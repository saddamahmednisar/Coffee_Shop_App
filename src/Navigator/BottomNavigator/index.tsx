import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Fontisto'; 
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import ShopItem from '../../Screens/ShopItem';
import Colors from '../../Constant/Colors';
import FavouriteLoc from '../../Screens/FavouriteLoc';
import AccountScreen from '../../Screens/AccountScreen';
import MyCart from '../../Screens/MyCart';


const Tab = createBottomTabNavigator();




const BottomTab = () => {
  
    return (
        <Tab.Navigator
            initialRouteName="ShopItem"
            screenOptions={{
                tabBarStyle: { height: 70, paddingBottom: 10, backgroundColor: Colors.White },
                tabBarActiveTintColor: '#FF8845',
                tabBarInactiveTintColor: '#FFFFFF',
            }}
        >
            <Tab.Screen
                name="ShopItem"
                component={ShopItem}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home" size={30} 
                            color={focused ? Colors.primary : Colors.light_grey} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="FavouriteLocations"
                component={FavouriteLoc}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon2 name="heart" size={30}
                        color={focused ? Colors.primary : Colors.light_grey}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={MyCart} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon1 name="shopping-basket" size={30}
                        color={focused ? Colors.primary : Colors.light_grey} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="AccountScreen"
                component={AccountScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="person" size={30}
                        color={focused ? Colors.primary : Colors.light_grey} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
