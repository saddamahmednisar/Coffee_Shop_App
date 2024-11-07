import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Iconmin from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconadd from 'react-native-vector-icons/Ionicons';
import HeaderLine from '../../Components/HeaderLine';
import Touchable from '../../Components/Touchable';
import Colors from '../../Constant/Colors';
import Images from '../../Constant/Images';
import Styles from './Styles';

const Detail = () => {
    const [selectedSize, setSelectedSize] = useState('Medium');

    const handleSizeSelection = (size: React.SetStateAction<string>) => {
        setSelectedSize(size);
    };

    return (
        <>
            <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
            <View style={Styles.mainContainer}>
                <HeaderLine isMultiple={true} title="Detail" isBack={true} />
                <View style={Styles.subcont1}>
                    <Image source={Images.Ice_Mocha} style={Styles.image} />
                </View>
                <View style={Styles.subcont2}>
                    <View style={Styles.circularView}>
                        <Icon2 name="heart" color={Colors.red_heart} size={22} />
                    </View>
                    <View style={Styles.dash} />
                    <View style={Styles.TextContainer}>
                        <Text style={Styles.subHeading}>Ice Mocha</Text>
                        <Text style={Styles.paraT}>Curabitur facilisis condimentum lacinia. Nullam tempus libero ex, id finibus tortor eleifend sit amet. Proin cursus tellus in pellentesque finibus.</Text>
                        <View style={Styles.ReviewC}>
                            <View style={Styles.imagesContainer}>
                                <Image source={Images.USER1} style={Styles.imageR} />
                                <Image source={Images.USER2} style={Styles.imageR} />
                                <Image source={Images.USER3} style={Styles.imageR} />
                                <Image source={Images.USER4} style={Styles.imageR} />
                            </View>
                            <View style={Styles.ratingContainer}>
                                <Icon name="star" size={16} color={Colors.secondary} />
                                <Text style={Styles.ratingText}>4.9(264 reviews)</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.sizeContainer}>
                        <Text style={Styles.sizeText}>Size</Text>
                        <View style={Styles.DiffSizeMain}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={[
                                    Styles.sbtnContainer,
                                    { backgroundColor: selectedSize === 'Small' ? Colors.primary : Colors.box_background }
                                ]}
                                onPress={() => handleSizeSelection('Small')}
                            >
                                <Text style={{ color: selectedSize === 'Small' ? Colors.White : Colors.dark_grey }}>Small</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={[
                                    Styles.sbtnContainer,
                                    { backgroundColor: selectedSize === 'Medium' ? Colors.primary : Colors.box_background }
                                ]}
                                onPress={() => handleSizeSelection('Medium')}
                            >
                                <Text style={{ color: selectedSize === 'Medium' ? Colors.White : Colors.dark_grey }}>Medium</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={[
                                    Styles.sbtnContainer,
                                    { backgroundColor: selectedSize === 'Big' ? Colors.primary : Colors.box_background }
                                ]}
                                onPress={() => handleSizeSelection('Big')}
                            >
                                <Text style={{ color: selectedSize === 'Big' ? Colors.White : Colors.dark_grey }}>Big</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={Styles.pricecartmain}>
                        <View style={Styles.cartContainer}>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Iconmin name="minuscircle" size={26} color={Colors.secondary} />
                            </TouchableOpacity>
                            <Text style={Styles.cartText}>2</Text>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Iconadd name="add-circle" size={32} color={Colors.secondary} />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.priceContainer}>
                            <Text style={Styles.priceText}>Price</Text>
                            <Text style={Styles.priceAmount}>₹290.0</Text>
                        </View>
                    </View>
                    <View style={Styles.buttoncartmain}>
                        <Touchable title={"ADD TO CART"} />
                    </View>
                </View>
            </View>
        </>
    );
};

export default Detail;
