import { NavigationProp, ParamListBase, RouteProp, useFocusEffect, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Iconmin from 'react-native-vector-icons/AntDesign';
import Iconadd from 'react-native-vector-icons/Ionicons';
import HeaderLine from '../../Components/HeaderLine';
import Colors from '../../Constant/Colors';
import Styles from './Styles';
import { databases } from '../../db/AppwriteDB';
import { Query } from 'appwrite';
import DBkeys from '../../Constant/DBkeys';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../Redux/slices/cartSlice';

type Category = 'All' | 'Special Offers' | 'Coffee' | 'Tea' | 'Cookie';

interface ShopItemType {
  id: string;
  shopId: string;
  name: string;
  description: string;
  type: string;
  price: string;
  image: string;
  favourite: boolean;
}

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
  Cookie: 'Cookie',
};

const ShopItem = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useDispatch();

  const route = useRoute<RouteProp<{ params: { shopId: string } }, 'params'>>();
  const { shopId } = route.params;

  const [shopItems, setShopItems] = useState<ShopItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<Category>('All');
  const cartItems = useSelector((state: any) => state.cart.items); // Get cart items from Redux


   const isFocus =useIsFocused();
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

        const formattedItems: ShopItemType[] = itemsData.documents
          .map((item: any) => ({
            id: item.$id,
            shopId: item.shopId,
            name: item.name,
            description: item.description,
            type: item.type,
            price: item.price,
            image: item.image,
            favourite: item.favourite,
          }))
          .sort((a, b) => (b.favourite ? 1 : 0) - (a.favourite ? 1 : 0));

        setShopItems(formattedItems);
      } catch (error) {
        console.error("Error fetching shop items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShopItems();
  }, [shopId, selectedCategories, isFocus]);

  const handleCategoriesSelection = (category: Category) => {
    setSelectedCategories(category);
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
        prevItems
          .map((item) =>
            item.id === itemId ? { ...item, favourite: !currentFavouriteStatus } : item
          )
          .sort((a, b) => (b.favourite ? 1 : 0) - (a.favourite ? 1 : 0))
      );
    } catch (error) {
      console.error("Error updating favourite status:", error);
    }
  };

  const addToCart = (item: ShopItemType) => {
    const itemInCart = cartItems.find((cartItem: any) => cartItem.id === item.id);

    if (itemInCart && itemInCart.quantity > 0) {
      dispatch(removeItem(item));
    } else {
      dispatch(addItem(item));
    }
  };

  const renderItem = ({ item }: { item: ShopItemType }) => {
    const itemInCart = cartItems.find((cartItem: any) => cartItem.id === item.id);

    return (
      <TouchableOpacity 
        style={Styles.firstitem} 
        onPress={() => navigation.navigate("Detail", { item })}
      >
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
            <TouchableOpacity onPress={() => addToCart(item)}>
              <View style={Styles.cart_ic_adj}>
                {itemInCart && itemInCart.quantity > 0 ? (
                  <Iconmin name="minuscircle" size={26} color={Colors.primary} />
                ) : (
                  <Iconadd name="add-circle" size={32} color={Colors.secondary} />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
            {(['All', 'Special Offers', 'Coffee', 'Tea', 'Cookie'] as Category[]).map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  categoriesStyles[category],
                  { backgroundColor: selectedCategories === category ? Colors.primary : Colors.box_background },
                ]}
                onPress={() => handleCategoriesSelection(category)}
              >
                <Text style={{ color: selectedCategories === category ? Colors.White : Colors.dark_grey }}>
                  {category}
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
