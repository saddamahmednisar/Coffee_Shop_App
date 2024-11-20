import { NavigationProp, ParamListBase, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import HeaderLine from '../../Components/HeaderLine';
import StarsLine from '../../Components/StarsLine';
import Colors from '../../Constant/Colors';
import Styles from './Styles';
import { databases } from '../../db/AppwriteDB';
import DBkeys from '../../Constant/DBkeys';
import { Query } from 'appwrite';

interface Shop {
    id: string;
    name: string;
    distance: string;
    image: string; 
    rating: number;
    favourite: boolean;
}

const FavouriteLoc = () => {
    const [favoriteShops, setFavoriteShops] = useState<Shop[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const isFocus = useIsFocused();

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor(Colors.background);
            StatusBar.setBarStyle('dark-content');
        }, [])
    );

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

    useEffect(() => {
        fetchFavoriteShops();
    }, [isFocus]);

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

    return (
        <View style={Styles.container}>
            <HeaderLine isMultiple={true} title="Wish List" isBack={false} />
            <View style={Styles.subContainer2}>
                <View style={Styles.sub2TextCont}>
                    <Text style={Styles.sub2Text}>Favourite Coffee Shops:</Text>
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
        </View>
    );
};

export default FavouriteLoc;
