import { NavigationProp, ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Iconmin from 'react-native-vector-icons/AntDesign';
import Iconadd from 'react-native-vector-icons/Ionicons';
import HeaderLine from '../../Components/HeaderLine';
import Touchable from '../../Components/Touchable';
import Colors from '../../Constant/Colors';
import Images from '../../Constant/Images';
import Styles from './Styles';



const MyCart = () => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const cartData: CartItem[] = [
        { id: '1', name: 'Ice Cafe Latte', type: 'Iced Coffee', price: 250.0, quantity: 2, image: Images.Ice_cafe },
        { id: '2', name: 'Ice Cafe Latte', type: 'Iced Coffee', price: 250.0, quantity: 2, image: Images.Ice_cafe },
        { id: '3', name: 'Ice Cafe Latte', type: 'Iced Coffee', price: 250.0, quantity: 2, image: Images.Ice_cafe },
        { id: '4', name: 'Ice Cafe Latte', type: 'Iced Coffee', price: 250.0, quantity: 2, image: Images.Ice_cafe },
    ];

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor(Colors.background); 
            StatusBar.setBarStyle('dark-content'); 
        }, [])
    );


    const renderItem = ({ item }: { item: CartItem }) => (
        <View style={Styles.loc1}>
            <View style={Styles.loc1img}>
                <Image source={item.image} style={Styles.imagecoff} />
            </View>
            <View style={Styles.TextViewoff}>
                <Text style={Styles.nameText}>{item.name}</Text>
                <Text style={Styles.typeText}>{item.type}</Text>
                <Text style={Styles.priceText}>₹{item.price.toFixed(2)}</Text>
            </View>
            <View style={Styles.cartMainContainer}>
                <View style={Styles.cartContainer}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Iconmin name="minuscircle" size={22} color={Colors.secondary} />
                    </TouchableOpacity>
                    <Text style={Styles.cartText}>{item.quantity}</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Iconadd name="add-circle" size={28} color={Colors.secondary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (


        <View style={Styles.mainContainer}>
            <HeaderLine isMultiple={true} title="My Cart" isBack={false} />
            <View style={Styles.subcont1}>
                <FlatList
                    data={cartData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={Styles.listmain}
                />
            </View>
            <View style={Styles.subcont2}>
                <View style={Styles.dash} />
                <View style={Styles.calTextContainer}>
                    <View style={Styles.cal1cont}>
                        <Text style={Styles.subtotalText}>Subtotal:</Text>
                        <Text style={Styles.subtotalAmount}>₹980.00</Text>
                    </View>
                    <View style={Styles.cal2cont}>
                        <Text style={Styles.taxText}>Tax & Fee:</Text>
                        <Text style={Styles.taxAmount}>₹40.00</Text>
                    </View>
                    <View style={Styles.line} />
                    <View style={Styles.totalmain}>
                        <Text style={Styles.totalText}>Total:</Text>
                        <Text style={Styles.totalAmount}>₹1,020.00</Text>
                    </View>
                </View>
                <View style={Styles.touchablecont}>
                    <Touchable title="CHECKOUT" onPress={() => navigation.navigate("Delivery_Payment")} />
                </View>
            </View>
        </View>

    );
};

export default MyCart;
