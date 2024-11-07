import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../../Screens/HomeScreen';
import MyCart from '../../Screens/MyCart';
import BottomTab from '../BottomNavigator';
import CustomDrawerContent from './DrawerContent';
import FavouriteLoc from '../../Screens/FavouriteLoc';


const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={(props) => <CustomDrawerContent {...props}  />}>
            <Drawer.Screen name="tab" component={BottomTab} options={{ headerShown: false }} />
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="MyCart" component={MyCart} options={{ headerShown: false }} />
            <Drawer.Screen name="FavouriteLoc" component={BottomTab}  options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
