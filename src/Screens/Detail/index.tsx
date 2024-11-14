import React, { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Iconmin from 'react-native-vector-icons/AntDesign';
import Iconadd from 'react-native-vector-icons/Ionicons';
import IconHeart from 'react-native-vector-icons/Entypo';
import HeaderLine from '../../Components/HeaderLine';
import Colors from '../../Constant/Colors';
import Styles from './Styles';
import Images from '../../Constant/Images';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { addItem, updateQuantity } from '../../Redux/slices/cartSlice';

interface RouteParams {
    item: {
        id: string;
        name: string;
        image: string;
        price: string;
        description: string;
        favourite: boolean;
    };
}

const Detail = () => {
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { item } = route.params;
    const dispatch = useDispatch();
    const cartItem = useSelector((state: RootState) => state.cart.items.find(i => i.id === item.id));
    const [selectedSize, setSelectedSize] = useState('Medium');
    const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);
    const [isFavourite, setIsFavourite] = useState(item.favourite);

    const handleSizeSelection = (size: string) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (cartItem) {
            Alert.alert("Already Added", "This item is already in your cart.");
        } else {
            dispatch(addItem({ ...item, quantity, selectedSize }));
            Alert.alert("Item Added", "This item has been added to your cart.");
        }
    };

    const handleIncreaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    };

    const handleDecreaseQuantity = () => {
        const newQuantity = quantity - 1;
        if (newQuantity > 0) {
            setQuantity(newQuantity);
            dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
        }
    };

    const toggleFavourite = () => {
        setIsFavourite(!isFavourite);
    };

    return (
        <>
            <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
            <View style={Styles.mainContainer}>
                <HeaderLine isMultiple={true} title="Detail" isBack={true} />
                <View style={Styles.subcont1}>
                    <Image source={{ uri: item?.image }} style={Styles.image} />
                </View>
                <View style={Styles.subcont2}>
                    {isFavourite && (
                        <TouchableOpacity onPress={toggleFavourite} style={Styles.circularView}>
                            <IconHeart
                                name="heart"
                                color={Colors.red_heart}
                                size={22}
                            />
                        </TouchableOpacity>
                    )}
                    <View style={Styles.TextContainer}>
                        <Text style={Styles.subHeading}>{item?.name}</Text>
                        <Text style={Styles.description}>{item?.description}</Text>
                        <View style={Styles.ReviewC}>
                            <View style={Styles.imagesContainer}>
                                <Image source={Images.USER1} style={Styles.imageR} />
                                <Image source={Images.USER2} style={Styles.imageR} />
                                <Image source={Images.USER3} style={Styles.imageR} />
                                <Image source={Images.USER4} style={Styles.imageR} />
                            </View>
                            <View style={Styles.ratingContainer}>
                                <Text style={Styles.ratingText}>4.9 (264 reviews)</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.sizeContainer}>
                        <Text style={Styles.sizeText}>Size</Text>
                        <View style={Styles.DiffSizeMain}>
                            {['Small', 'Medium', 'Big'].map((size) => (
                                <TouchableOpacity
                                    key={size}
                                    activeOpacity={0.7}
                                    style={[Styles.sbtnContainer, { backgroundColor: selectedSize === size ? Colors.primary : Colors.box_background }]}
                                    onPress={() => handleSizeSelection(size)}
                                >
                                    <Text style={{ color: selectedSize === size ? Colors.White : Colors.dark_grey }}>{size}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={Styles.pricecartmain}>
                        <View style={Styles.cartContainer}>
                            <TouchableOpacity activeOpacity={0.7} onPress={handleDecreaseQuantity}>
                                <Iconmin name="minuscircle" size={26} color={Colors.secondary} />
                            </TouchableOpacity>
                            <Text style={Styles.cartText}>{quantity}</Text>
                            <TouchableOpacity activeOpacity={0.7} onPress={handleIncreaseQuantity}>
                                <Iconadd name="add-circle" size={32} color={Colors.secondary} />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.priceContainer}>
                            <Text style={Styles.priceText}>Price</Text>
                            <Text style={Styles.priceAmount}>{item?.price}</Text>
                        </View>
                    </View>
                    <View style={Styles.buttoncartmain}>
                        <TouchableOpacity activeOpacity={0.7} style={Styles.buttoncart} onPress={handleAddToCart}>
                            <Text style={Styles.buttoncartText}>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Detail;
