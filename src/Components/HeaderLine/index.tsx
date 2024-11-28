import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux'; // Import useSelector if using Redux
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Iconback from 'react-native-vector-icons/Ionicons';
import Colors from '../../Constant/Colors';
import Fonts from '../../Constant/Fonts';
import Images from '../../Constant/Images';

interface HeaderLineProps {
    isMultiple: boolean;
    title: string;
    isBack: boolean;
}

const HeaderLine: React.FC<HeaderLineProps> = ({ isMultiple, title, isBack }) => {
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
    
   
    const cartItems = useSelector((state: any) => state.cart.items);

    return (
        <View style={styles.headmaincontainer}>
            {isBack ? (
                <TouchableOpacity>
                    <Iconback
                        name="arrow-back"
                        color={Colors.Mat_black}
                        size={26}
                        onPress={() => navigation.goBack()}
                    />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" color={Colors.Mat_black} size={24} />
                </TouchableOpacity>
            )}

            <View>
                <Text style={styles.titleText}>{title}</Text>
            </View>

            {isMultiple ? (
                <View style={styles.iconcont}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Icon2
                            name="heart"
                            color={Colors.light_grey}
                            size={18}
                            onPress={() =>
                                navigation.navigate('FavouriteLoc', {
                                    screen: 'FavouriteLocations',
                                })
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('CartScreen')}
                    >
                        <View style={styles.cartIconContainer}>
                            <Icon1 name="shopping-basket" size={18} />
                            {cartItems.length > 0 && (
                                <View style={styles.redDot}>
                                    <Text style={styles.dotText}>{cartItems.length}</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                        navigation.navigate('tab', { screen: 'AccountScreen' })
                    }
                >
                    <View style={styles.circularView}>
                        <Image source={Images.Profilepic} style={styles.image} />
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default HeaderLine;

const styles = StyleSheet.create({
    headmaincontainer: {
        height: 70,
        backgroundColor: Colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
    },
    titleText: {
        fontSize: 16,
        fontFamily: Fonts.Medium,
        color: Colors.Mat_black,
    },
    circularView: {
        width: 40,
        height: 40,
        backgroundColor: Colors.White,
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconcont: {
        width: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cartIconContainer: {
        position: 'relative',
    },
    redDot: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dotText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
