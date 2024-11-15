import { NavigationProp, ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Iconmin from 'react-native-vector-icons/AntDesign';
import Iconadd from 'react-native-vector-icons/Ionicons';
import HeaderLine from '../../Components/HeaderLine';
import Touchable from '../../Components/Touchable';
import Colors from '../../Constant/Colors';
import Styles from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../Redux/slices/cartSlice';

const MyCart = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items);

    const TAX_AMOUNT = 40.00;

    const { subtotal, total } = useMemo(() => {
        const subtotal = cartItems.reduce((acc: number, item: any) => {
            const itemPrice = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
            return acc + itemPrice * item.quantity;
        }, 0);
        const total = subtotal > 0 ? subtotal + TAX_AMOUNT : 0; 
        return { subtotal, total };
    }, [cartItems]);

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor(Colors.background);
            StatusBar.setBarStyle('dark-content');
        }, [])
    );

    const handleAddItem = (item: any) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item: any) => {
        dispatch(removeItem(item));
    };

    const renderItem = ({ item }: any) => (
        <View style={Styles.loc1}>
            <View style={Styles.loc1img}>
                <Image source={{ uri: item.image }} style={Styles.imagecoff} resizeMode="contain" />
            </View>
            <View style={Styles.TextViewoff}>
                <Text style={Styles.nameText}>{item?.name}</Text>
                <Text style={Styles.typeText}>{item?.type}</Text>
                <Text style={Styles.priceText}>Rs {item?.price}</Text>
            </View>
            <View style={Styles.cartMainContainer}>
                <View style={Styles.cartContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => handleRemoveItem(item)}
                    >
                        <Iconmin name="minuscircle" size={22} color={Colors.secondary} />
                    </TouchableOpacity>
                    <Text style={Styles.cartText}>{item.quantity}</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => handleAddItem(item)}
                    >
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
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={Styles.listmain}
                    ListEmptyComponent={<Text style={{ textAlign: 'center' }}>Your Cart is Empty</Text>}
                />
            </View>
            <View style={Styles.subcont2}>
                <View style={Styles.dash} />
                <View style={Styles.calTextContainer}>
                    <View style={Styles.cal1cont}>
                        <Text style={Styles.subtotalText}>Subtotal:</Text>
                        <Text style={Styles.subtotalAmount}>Rs {subtotal.toFixed(2)}</Text>
                    </View>
                    <View style={Styles.cal2cont}>
                        <Text style={Styles.taxText}>Tax & Fee:</Text>
                        <Text style={Styles.taxAmount}>Rs {subtotal > 0 ? TAX_AMOUNT.toFixed(2) : "0.00"}</Text>
                    </View>
                    <View style={Styles.line} />
                    <View style={Styles.totalmain}>
                        <Text style={Styles.totalText}>Total:</Text>
                        <Text style={Styles.totalAmount}>Rs {total.toFixed(2)}</Text>
                    </View>
                </View>
                <View style={Styles.touchablecont}>
                    <Touchable title="CHECKOUT" onPress={() => navigation.navigate("Delivery_Payment")} height={45} />
                </View>
            </View>
        </View>
    );
};

export default MyCart;
 