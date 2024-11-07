import { DrawerActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Feather';
import StarsLine from '../../Components/StarsLine';
import Colors from '../../Constant/Colors';
import Images from '../../Constant/Images';
import Styles from './Styles';

const shopData = [
    { id: '1', name: 'Coffresh Shop - ARES', distance: '1.5 km', image: Images.AresShop, rating: 5 },
    { id: '2', name: 'Coffresh Shop - PEACEMAKER', distance: '1.7 km', image: Images.PeacemakerShop, rating: 4 },
    { id: '3', name: 'Coffresh Shop - CYBORG', distance: '2.4 km', image: Images.CyborgShop, rating: 5 },
    { id: '4', name: 'Coffresh Shop - BLUE BEETLE', distance: '2.6 km', image: Images.BlueBettleShop, rating: 3 },
    { id: '5', name: 'Coffresh Shop - STEPHANIE BROWN', distance: '2.7 km', image: Images.StephaineShop, rating: 4 },
];

const AccountScreen = () => {
    const navigation = useNavigation();
    const [likedShops, setLikedShops] = useState<Record<string, boolean>>({});
    const [searchQuery, setSearchQuery] = useState('');

useFocusEffect(
    React.useCallback(() => {
        StatusBar.setBackgroundColor(Colors.primary); 
        StatusBar.setBarStyle('light-content'); 
    }, [])
);

    const toggleHeartColor = (shopId: string) => {
        setLikedShops((prevState) => ({
            ...prevState,
            [shopId]: !prevState[shopId],
        }));
    };

    const filteredShopData = searchQuery
        ? shopData.filter((shop) => {
            const normalizedShopName = shop.name.replace(/[^a-zA-Z]/g, '').toLowerCase();
            const normalizedSearchQuery = searchQuery.replace(/[^a-zA-Z]/g, '').toLowerCase();
            return normalizedShopName.includes(normalizedSearchQuery);
        })
        : shopData;

    const renderShopItem = ({ item }: { item: Shop }) => {
        const isLiked = likedShops[item.id];
        return (
            <View style={Styles.sub2coffCont}>
                <View style={Styles.loc1}>
                    <View style={Styles.loc1img}>
                        <Image source={item.image} style={Styles.imageAres} />
                    </View>
                    <View style={Styles.loc1TextC}>
                        <View style={Styles.loc1TC1}>
                            <Text style={Styles.Shop1T}>{item.name}</Text>
                            <View style={Styles.lockm}>
                                <Icon1 name="location" size={15} style={Styles.iconloc1} />
                                <Text style={Styles.kmText}>{item.distance}</Text>
                            </View>
                            <StarsLine defaultRating={item.rating} />
                        </View>
                        <View style={Styles.loc1TC2}>
                            <TouchableOpacity onPress={() => toggleHeartColor(item.id)}>
                                <Icon2
                                    name="heart"
                                    color={isLiked ? 'red' : Colors.light_grey}
                                    size={20}
                                    style={Styles.icon2heart}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <>
            {/* <StatusBar backgroundColor={statudBarColor} barStyle="light-content" /> */}
            <View style={Styles.mainContainer}>
                <View style={Styles.headericonConatiner}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon name="menu" color={Colors.White} size={24} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.ProContainer}>
                    <Image source={Images.Profilepic} style={Styles.profileImage} />
                    <Text style={Styles.profileName}>Saddam Ahmed Nisar</Text>
                </View>
                <View style={Styles.FvrtMain}>
                    <View style={Styles.sub2TextCont}>
                        <Text style={Styles.sub2Text}>Favourite Coffresh Shop’s:</Text>
                    </View>
                    <FlatList
                        data={filteredShopData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderShopItem}
                        style={Styles.scrollcont}
                    />
                </View>
            </View>
        </>
    );
};

export default AccountScreen;
