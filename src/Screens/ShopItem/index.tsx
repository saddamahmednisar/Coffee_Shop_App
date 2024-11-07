import { NavigationProp, ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Iconadd from 'react-native-vector-icons/Ionicons';
import HeaderLine from '../../Components/HeaderLine';
import Colors from '../../Constant/Colors';
import Images from '../../Constant/Images';
import Styles from './Styles';

const shopItems: ShopItemType[] = [
  { id: '1', name: 'Ice Cafe Latte', type: 'Iced Coffee', price: '₹250.00', image: Images.Ice_cafe },
  { id: '2', name: 'Caramel Frappuccino', type: 'Iced Coffee', price: '₹320.00', image: Images.caramel },
  { id: '3', name: 'Pumpkin Pie Coffee', type: 'Iced Coffee', price: '₹330.00', image: Images.Pumpkin_pie },
  { id: '4', name: 'Ice Mocha', type: 'Iced Coffee', price: '₹290.00', image: Images.Ice_Mocha },
  { id: '5', name: 'Ice Cafe Latte', type: 'Iced Coffee', price: '₹250.00', image: Images.Ice_cafe },
  { id: '6', name: 'Pumpkin Pie Coffee', type: 'Iced Coffee', price: '₹330.00', image: Images.Pumpkin_pie },
];

const ShopItem = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Special Offers');

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(Colors.background);
      StatusBar.setBarStyle('dark-content');
    }, [])
  );


  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };

  const renderItem = ({ item }: { item: ShopItemType }) => (
    <TouchableOpacity style={Styles.firstitem} onPress={() => navigation.navigate("Detail")}>
      <ImageBackground source={item.image} resizeMode="stretch" style={Styles.bgimage}>
        <TouchableOpacity>
          <Icon2 name="heart" color={Colors.light_grey} size={20} style={Styles.hearticon} />
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
        <HeaderLine isMultiple={true} title="Home" isBack={false} />
        <View style={Styles.LocContainer}>
          <View style={Styles.lockm}>
            <Icon1 name="location" size={20} style={Styles.iconloc1} />
            <Text style={Styles.locText}>Location</Text>
          </View>
          <Text style={Styles.cityText}>Chennai, TN.</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[Styles.DiffitemMain, { flexDirection: 'row' }]}>
            <TouchableOpacity
              style={[
                Styles.itemCat1,
                { backgroundColor: selectedCategory === 'All' ? Colors.primary : Colors.box_background },
              ]}
              onPress={() => handleCategorySelection('All')}>
              <Text style={{ color: selectedCategory === 'All' ? Colors.White : Colors.dark_grey }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Styles.itemCat2,
                { backgroundColor: selectedCategory === 'Special Offers' ? Colors.primary : Colors.box_background },
              ]}
              onPress={() => handleCategorySelection('Special Offers')}>
              <Text style={{ color: selectedCategory === 'Special Offers' ? Colors.White : Colors.dark_grey }}>Special Offers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Styles.itemCat3,
                { backgroundColor: selectedCategory === 'Coffee' ? Colors.primary : Colors.box_background },
              ]}
              onPress={() => handleCategorySelection('Coffee')}>
              <Text style={{ color: selectedCategory === 'Coffee' ? Colors.White : Colors.dark_grey }}>Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Styles.itemCat4,
                { backgroundColor: selectedCategory === 'Tea' ? Colors.primary : Colors.box_background },
              ]}
              onPress={() => handleCategorySelection('Tea')}>
              <Text style={{ color: selectedCategory === 'Tea' ? Colors.White : Colors.dark_grey }}>Tea</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Styles.itemCat5,
                { backgroundColor: selectedCategory === 'Cookie' ? Colors.primary : Colors.box_background },
              ]}
              onPress={() => handleCategorySelection('Cookie')}>
              <Text style={{ color: selectedCategory === 'Cookie' ? Colors.White : Colors.dark_grey }}>Cookie</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={Styles.itemOffC}>
        <FlatList
          data={shopItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>

  );
};

export default ShopItem;
