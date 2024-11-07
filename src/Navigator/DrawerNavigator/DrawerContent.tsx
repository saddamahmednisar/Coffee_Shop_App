import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Images from '../../Constant/Images';
import FABGroup from '../../Screens/FavouriteLoc';
import Colors from "../../Constant/Colors"

const CustomDrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}>

            <View style={styles.profileContainer}>
                <Image source={Images.Profilepic} style={styles.profileImage}/>
                <Text style={styles.profileName}>Saddam Ahmed</Text>
            </View>

            <DrawerItem
                label="Home"
                onPress={() => props.navigation.navigate('HomeScreen')}
                icon={() => <Icon name="home" size={24} color={Colors.light_grey} />}
                labelStyle={styles.labelStyle}
            />
            <DrawerItem
                label="My Cart"
                onPress={() => props.navigation.navigate('MyCart')}
                icon={() => <Icon name="shopping-cart" size={24} color={Colors.light_grey} />}
                labelStyle={styles.labelStyle}
            />
            <DrawerItem
                label="Favourites"
                onPress={() => props.navigation.navigate('FavouriteLoc', { screen: 'FavouriteLocations' })}
                icon={() => <Icon name="favorite" size={24} color={Colors.light_grey} />}
                labelStyle={styles.labelStyle}
            />
            
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.primary,
        marginTop: -4
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.White
    },
    labelStyle: {
        fontSize: 16,
        marginLeft: -20,
    },
});

export default CustomDrawerContent;
