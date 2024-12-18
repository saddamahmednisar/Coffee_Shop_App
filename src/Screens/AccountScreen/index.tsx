import { DrawerActions, useFocusEffect, useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Feather';
import StarsLine from '../../Components/StarsLine';
import Colors from '../../Constant/Colors';
import Images from '../../Constant/Images';
import Styles from './Styles';
import { databases } from '../../db/AppwriteDB';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DBkeys from '../../Constant/DBkeys';
import { Query } from 'appwrite';
import { TextInput } from 'react-native-gesture-handler';

export type RootStackParamList = {
    tab: {
        screen: string;
        params: {
            shopId: string;
        };
    };
    ShopItem: {
        shopId: string;
    };
};

const AccountScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [favoriteShops, setFavoriteShops] = useState<Shop[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Favourite');

    const handleSelection = (option: string) => {
        setSelectedOption(option);
    };

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor(Colors.primary);
            StatusBar.setBarStyle('light-content');

            const fetchFavoriteShops = async () => {
                setIsLoading(true);
                try {
                    const response = await databases.listDocuments(
                        DBkeys.Database_id,
                        DBkeys.shopcaffineColl_id,
                        [Query.equal('favourite', true)]
                    );

                    const shops = response.documents.map((doc: any) => ({
                        id: doc.$id,
                        name: doc.name,
                        distance: doc.distance,
                        image: doc.image,
                        rating: doc.rating,
                        favourite: doc.favourite,
                    }));
                    setFavoriteShops(shops);
                } catch (error) {
                    console.error("Error fetching favorite shops:", error);
                    Alert.alert("Error", "Failed to load favourite shops.");
                } finally {
                    setIsLoading(false);
                }
            };

            fetchFavoriteShops();
        }, [])
    );

    const toggleHeartColor = async (shopId: string) => {
        const shop = favoriteShops.find((item) => item.id === shopId);
        if (shop) {
            try {
                await databases.updateDocument(
                    DBkeys.Database_id,
                    DBkeys.shopcaffineColl_id,
                    shopId,
                    { favourite: false }
                );
                setFavoriteShops((prevShops) => prevShops.filter((item) => item.id !== shopId));
            } catch (error) {
                console.error("Error updating favourite status:", error);
                Alert.alert("Error", "Failed to update status.");
            }
        }
    };

    const renderShopItem = ({ item }: { item: Shop }) => (
        <View style={Styles.sub2coffCont}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={Styles.loc1}
                onPress={() => navigation.navigate('tab', { screen: 'ShopItem', params: { shopId: item.id } })}
            >
                <View style={Styles.loc1img}>
                    <Image source={{ uri: item.image }} style={Styles.imageAres} />
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
                                color={item.favourite ? Colors.redHeart : Colors.light_grey}
                                size={20}
                                style={Styles.icon2heart}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={Styles.mainContainer}>
            <KeyboardAwareScrollView
                 contentContainerStyle={{ flexGrow: 1,}}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >

                <View style={Styles.headericonConatiner}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <Icon name="menu" color={Colors.White} size={24} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.ProContainer}>
                    <Image source={Images.Profilepic} style={Styles.profileImage} />
                    <Text style={Styles.profileName}>Saddam Ahmed Nisar</Text>
                </View>

                <View style={Styles.selectingContainermain}>
                    <View style={Styles.selectingContainersub}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={[
                                Styles.selfpickCont,
                                {
                                    backgroundColor: selectedOption === 'Favourite' ? 'white' : Colors.selfcard,
                                },
                            ]}
                            onPress={() => handleSelection('Favourite')}
                        >
                            <Text style={{ color: selectedOption === 'Favourite' ? Colors.primary : Colors.Mat_black }}>
                                Favourite
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={[
                                Styles.delivery,
                                {
                                    backgroundColor: selectedOption === 'My Order' ? 'white' : Colors.selfcard,
                                },
                            ]}
                            onPress={() => handleSelection('My Order')}
                        >
                            <Text style={{ color: selectedOption === 'My Order' ? Colors.primary : Colors.Mat_black }}>
                                My Order
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {selectedOption === 'Favourite' ? (
                    <View style={Styles.FvrtMain}>
                        <View style={Styles.sub2TextCont}>
                            <Text style={Styles.sub2Text}>Favourite Coffresh Shop’s:</Text>
                        </View>
                        {isLoading ? (
                            <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 20 }} />
                        ) : (
                            <FlatList
                                data={favoriteShops}
                                keyExtractor={(item) => item.id}
                                renderItem={renderShopItem}
                                style={Styles.scrollcont}
                                ListEmptyComponent={<Text style={Styles.emptyCompText}>No favourite shops found</Text>}
                            />
                        )}
                    </View>
                ) : (
                    <View style={Styles.FvrtMain}>
                        <View style={Styles.sub2TextCont}>
                            <Text style={Styles.sub2Text}>My Orders:</Text>
                        </View>
                        {isLoading ? (
                            <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 20 }} />
                        ) : (
                            
                            <View style={Styles.ordercheck}>
                                <TextInput style={Styles.orderInput} placeholder='Enter Phone No to check your order'></TextInput>
                                <TouchableOpacity activeOpacity={0.7} style={Styles.orderbtn}>
                                    <Text style={Styles.orderbtnText}>Check</Text>
                                </TouchableOpacity>
                            </View>
                       
                        )}
                    </View>
                )}

            </KeyboardAwareScrollView>
        </View>
    );
};

export default AccountScreen;
