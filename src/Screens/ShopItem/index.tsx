import { NavigationProp, ParamListBase, RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Iconadd from 'react-native-vector-icons/Ionicons';
import HeaderLine from '../../Components/HeaderLine';
import Colors from '../../Constant/Colors';
import Styles from './Styles';
import { databases } from '../../db/AppwriteDB';
import { Query } from 'appwrite';
import DBkeys from '../../Constant/DBkeys';
import FavouriteLoc from '../FavouriteLoc';




const categoriesStyles: { [key in Category]: any } = {
  All: Styles.itemCat1,
  'Special Offers': Styles.itemCat2,
  Coffee: Styles.itemCat3,
  Tea: Styles.itemCat4,
  Cookie: Styles.itemCat5,
};


const categoryMapping: { [key in Category]: string } = {
  All: 'All',
  'Special Offers': 'Special_Offers',
  Coffee: 'Coffee',
  Tea: 'Tea',
  Cookie: 'Cookie'
};

const ShopItem = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route: RouteProp<{ params: { shopId: string } }, 'params'> = useRoute();
  const { shopId } = route.params;

  const [shopItems, setShopItems] = useState<ShopItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<Category>('All');
  console.log("shopItems", shopItems, "hshhshshhs");

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(Colors.background);
      StatusBar.setBarStyle('dark-content');
    }, [])
  );

  useEffect(() => {
    const fetchShopItems = async () => {
      setIsLoading(true);
      try {
        console.log("shopId:", shopId, "Categories:", selectedCategories);

        const queryFilters = [Query.equal('shopsCaffine', shopId)];
        const categoryValue = categoryMapping[selectedCategories];

        if (categoryValue !== 'All') {
          queryFilters.push(Query.equal('categories', categoryValue));
        }

        const itemsData = await databases.listDocuments(
          DBkeys.Database_id,
          DBkeys.shopitemColl_id,
          queryFilters
        );

        const formattedItems = itemsData.documents.map((item: any) => ({
          id: item.$id,
          shopId: item.shopId,
          name: item.name,
          type: item.type,
          price: item.price,
          image: item.image,
          favourite: item.favourite
        }));

        setShopItems(formattedItems);
      } catch (error) {
        console.error("Error fetching shop items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShopItems();
  }, [shopId, selectedCategories]);

  const handleCategoriesSelection = (categories: Category) => {
    setSelectedCategories(categories);
  };
  const toggleFavourite = async (itemId: string, currentFavouriteStatus: boolean) => {
    try {

      await databases.updateDocument(
        DBkeys.Database_id,
        DBkeys.shopitemColl_id,
        itemId,
        { favourite: !currentFavouriteStatus }
      );

      setShopItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, favourite: !currentFavouriteStatus } : item
        )
      );
    } catch (error) {
      console.error("Error updating favourite status:", error);
    }
  };

  const renderItem = ({ item }: { item: ShopItemType }) => (
    <TouchableOpacity style={Styles.firstitem} onPress={() => navigation.navigate("Detail")}>
      <ImageBackground source={{ uri: item.image }} resizeMode="stretch" style={Styles.bgimage}>
        <TouchableOpacity onPress={() => toggleFavourite(item.id, item.favourite)}>
          <Icon2
            name="heart"
            color={item.favourite ? Colors.redHeart : Colors.light_grey}
            size={20}
            style={Styles.hearticon}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={Styles.TextViewoff}>
        <Text style={Styles.nameText}>{item.name}</Text>
        <Text style={Styles.typeText}>{item.type}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={Styles.priceText}>{item.price}</Text>
          <TouchableOpacity>
            <Iconadd name="add-circle" size={32} color={Colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={Styles.mainContainer}>

      <View style={Styles.container}>
        <HeaderLine isMultiple={true} title="Shop Items" isBack={false} />
        <View style={Styles.LocContainer}>
          <View style={Styles.lockm}>
            <Icon1 name="location" size={20} style={Styles.iconloc1} />
            <Text style={Styles.locText}>Location</Text>
          </View>
          <Text style={Styles.cityText}>Islamabad, Pak.</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[Styles.DiffitemMain, { flexDirection: 'row' }]}>
            {(['All', 'Special Offers', 'Coffee', 'Tea', 'Cookie'] as Category[]).map((categories) => (
              <TouchableOpacity
                key={categories}
                style={[
                  categoriesStyles[categories],
                  { backgroundColor: selectedCategories === categories ? Colors.primary : Colors.box_background },
                ]}
                onPress={() => handleCategoriesSelection(categories)}
              >
                <Text style={{ color: selectedCategories === categories ? Colors.White : Colors.dark_grey }}>
                  {categories}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 20 }} />
      ) : (
        <View style={Styles.itemOffC}>

          {shopItems.length === 0 ? (
            <Text style={{ textAlign: 'center', color: Colors.dark_grey, marginTop: 20 }}>No data available</Text>
          ) : (
            <FlatList
              data={shopItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={{ paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
            />
          )}

        </View>
      )}
    </View>
  );
};

export default ShopItem;
