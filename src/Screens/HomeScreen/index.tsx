import { NavigationProp, ParamListBase, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, StatusBar, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Feather';
import HeaderLine from '../../Components/HeaderLine';
import StarsLine from '../../Components/StarsLine';
import Colors from '../../Constant/Colors';
import Styles from './Styles';
import { databases } from '../../db/AppwriteDB';
import Images from '../../Constant/Images';
import DBkeys from '../../Constant/DBkeys';

type Shop = {
    id: number;
    name: string;
    distance: string;
    image: string;
    rating: number;
    favourite: boolean;
};

const HomeScreen = () => {
    const [shops, setShops] = useState<Shop[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
     const isFocus = useIsFocused();
    async function getCollections() {
        try {
            setIsLoading(true);
            const shopdata = await databases.listDocuments('672b42b6002033261bc2', '672b42d9002c372eab32');

            const updatedData = shopdata.documents.map((shop: any) => {
                return {
                    id: shop.$id,
                    name: shop.name,
                    distance: shop.distance,
                    image: shop.image,
                    rating: shop.rating,
                    favourite: shop.favourite,
                };
            });

            setShops(updatedData);
        } catch (error) {
            console.error("Error fetching data:", error);
            Alert.alert("Error", "Failed to load shops.");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCollections();
    }, [isFocus]);

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor(Colors.background);
            StatusBar.setBarStyle('dark-content');
        }, [])
    );

    const toggleHeartColor = async (shopId: number) => {
        const shop = shops.find((shop) => shop.id === shopId);
        if (!shop) return;

        const newFavouriteStatus = !shop.favourite;

        setShops((prevShops) =>
            prevShops.map((shop) =>
                shop.id === shopId ? { ...shop, favourite: newFavouriteStatus } : shop
            )
        );

        try {
            const databaseId = DBkeys.Database_id;
            const collectionId = DBkeys.shopcaffineColl_id;

            await databases.updateDocument(databaseId, collectionId, shopId.toString(), {
                favourite: newFavouriteStatus,
            });

            console.log(`Status of favourite ${shopId} updated successfully`);
        } catch (error) {
            console.error("Error updating favourite status:", error);

            setShops((prevShops) =>
                prevShops.map((shop) =>
                    shop.id === shopId ? { ...shop, favourite: !newFavouriteStatus } : shop
                )
            );
            Alert.alert("Error", "Failed to update favourite status.");
        }
    };

    const filteredShops = searchQuery
        ? shops.filter((shop: Shop) => {
            const normalizedShopName = shop.name.replace(/[^a-zA-Z]/g, '').toLowerCase();
            const normalizedSearchQuery = searchQuery.replace(/[^a-zA-Z]/g, '').toLowerCase();
            return normalizedShopName.includes(normalizedSearchQuery);
        })
        : shops;

        const renderShopItem = ({ item }: { item: Shop }) => {
            return (
                <View style={Styles.sub2coffCont}>
                    <TouchableOpacity 
                        activeOpacity={0.7} 
                        style={Styles.loc1} 
                        onPress={() => navigation.navigate("tab", { screen: "ShopItem", params: { shopId: item.id } })}
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
        };

    return (
        <View style={Styles.container}>
            <HeaderLine isMultiple={false} title="Home" isBack={false} />
            <View style={Styles.subContainer1}>
                <View style={Styles.Inputmain}>
                    <View style={Styles.Inputext}>
                        <Icon name="search" color="#C1C1C1" size={16} />
                        <TextInput
                            placeholder="Search…"
                            style={Styles.textInput}
                            value={searchQuery}
                            onChangeText={(text) => setSearchQuery(text)}
                        />
                    </View>
                    <View style={Styles.Filterpoint}>
                        <Image source={Images.Filterpic} style={Styles.image} />
                    </View>
                </View>
            </View>


            <View style={Styles.subContainer2}>
                <View style={Styles.sub2TextCont}>
                    <Text style={Styles.sub2Text}>Coffee Shops near you</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color={Colors.primary} style={{ alignSelf: 'center' }} />
                    ) : (
                        <>
                            <FlatList
                                data={filteredShops}
                                keyExtractor={(item) => item?.id.toString()}
                                renderItem={renderShopItem}
                                style={Styles.scrollcont}
                                ListEmptyComponent={<Text style={Styles.emptyCompText}>No shops found</Text>}
                            />
                        </>
                    )}
                </View>

            </View>
        </View>
    );
};

export default HomeScreen;
