import React, { useState, useMemo } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Iconadr from 'react-native-vector-icons/Entypo';
import IconPay from 'react-native-vector-icons/MaterialIcons';
import HeaderLine from '../../Components/HeaderLine';
import Touchable from '../../Components/Touchable';
import Colors from '../../Constant/Colors';
import Styles from './Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';
import { databases } from '../../db/AppwriteDB';
import DBkeys from '../../Constant/DBkeys';
import { RootState } from '../../Redux/store';
import Toast from 'react-native-toast-message';

const Delivery_Payment = () => {
  const [selectedOption, setSelectedOption] = useState('delivery');
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingDeliveryTime, setIsEditingDeliveryTime] = useState(false);
  const [isEditingPaymentOption, setIsEditingPaymentOption] = useState(false);

  const [address, setAddress] = useState('Add your address here');
  const [contact, setContact] = useState('Add your contact number');
  const [deliveryTime, setDeliveryTime] = useState('Your delivery time');
  const [paymentOption, setPaymentOption] = useState('Your Cash Method');

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
      return acc + itemPrice * item.quantity;
    }, 0);
  }, [cartItems]);

  const TAX_AMOUNT = 40.0;
  const tax = subtotal > 0 ? TAX_AMOUNT : 0;
  const total = subtotal + tax;

  const handleSelection = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  const handleConfirm = async () => {

    if (
      address === 'Add your address here' ||
      contact === 'Add your contact number' ||
      deliveryTime === 'Your delivery time' ||
      paymentOption === 'Your Cash Method'
    ) {
      Toast.show({
        type: 'error',
        text1: 'Add your data',
        text2: 'Please fill in all fields before confirming your order.',
      });
      return; 
    }

    const formattedProducts = cartItems.map((item) => `${item.name} (x${item.quantity})`);

    const orderData = {
      Address: address,
      Contact: contact,
      DeliveryTime: deliveryTime,
      Payment_Option: paymentOption,
      Product: formattedProducts,
    };

    try {
      const response = await databases.createDocument(
        DBkeys.Database_id,
        DBkeys.order_id,
        'unique()',
        orderData
      );
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Your order has been placed successfully!',
      });
      console.log('Order saved:', response);

      setAddress('Add your address here');
      setContact('Add your contact number');
      setDeliveryTime('Your delivery time');
      setPaymentOption('Your Cash Method');

    } catch (error) {
      console.error('Error saving order:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to place your order. Please try again.',
      });
    }
  };

  return (
    <>
      <HeaderLine isMultiple={true} title="Delivery & Payment" isBack={true} />

      <KeyboardAwareScrollView
        contentContainerStyle={Styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={Styles.selectingContainermain}>
          <View style={Styles.selectingContainersub}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                Styles.selfpickCont,
                {
                  backgroundColor: selectedOption === 'selfPickUp' ? 'white' : Colors.selfcard,
                },
              ]}
              onPress={() => handleSelection('selfPickUp')}
            >
              <Text style={{ color: selectedOption === 'selfPickUp' ? Colors.primary : Colors.Mat_black }}>
                Self Pick-up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                Styles.delivery,
                {
                  backgroundColor: selectedOption === 'delivery' ? 'white' : Colors.selfcard,
                },
              ]}
              onPress={() => handleSelection('delivery')}
            >
              <Text style={{ color: selectedOption === 'delivery' ? Colors.primary : Colors.Mat_black }}>
                Delivery
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', justifyContent: 'space-evenly', alignItems: 'center', gap: 10, marginVertical: 10 }}>
          {/* Address Card */}
          <View style={Styles.FirstCard}>
            <View style={Styles.mainiconCont}>
              <View style={Styles.iconBox}>
                <Iconadr name="address" size={30} color={Colors.primary} />
              </View>
            </View>
            <View style={Styles.universalTextmainContainer}>
              <Text style={Styles.AddressText}>Address</Text>
              {isEditingAddress ? (
                <TextInput
                  style={Styles.compAdd}
                  value={address}
                  onChangeText={setAddress}
                  placeholder={address}
                  multiline={false}
                  autoFocus
                />
              ) : (
                <Text style={Styles.compAdd}>{address}</Text>
              )}
            </View>
            <TouchableOpacity
              style={Styles.forwrsdIconCont}
              onPress={() => setIsEditingAddress((prev) => !prev)}
            >
              <Icon3 name={isEditingAddress ? 'check' : 'edit'} size={18} color={Colors.secondary} />
            </TouchableOpacity>
          </View>

          {/* Contact Card */}
          <View style={Styles.FirstCard}>
            <View style={Styles.mainiconCont}>
              <View style={Styles.iconBox}>
                <IconPay name="person" size={30} color={Colors.primary} />
              </View>
            </View>
            <View style={Styles.universalTextmainContainer}>
              <Text style={Styles.AddressText}>Contact</Text>
              {isEditingContact ? (
                <TextInput
                  style={Styles.compAdd}
                  value={contact}
                  onChangeText={setContact}
                  placeholder={contact}
                  multiline={false}
                  autoFocus
                />
              ) : (
                <Text style={Styles.compAdd}>{contact}</Text>
              )}
            </View>
            <TouchableOpacity
              style={Styles.forwrsdIconCont}
              onPress={() => setIsEditingContact((prev) => !prev)}
            >
              <Icon3 name={isEditingContact ? 'check' : 'edit'} size={18} color={Colors.secondary} />
            </TouchableOpacity>
          </View>

          {/* Delivery Time Card */}
          <View style={Styles.FirstCard}>
            <View style={Styles.mainiconCont}>
              <View style={Styles.iconBox}>
                <Icon3 name="clockcircleo" size={30} color={Colors.primary} />
              </View>
            </View>
            <View style={Styles.universalTextmainContainer}>
              <Text style={Styles.AddressText}>Delivery Time</Text>
              {isEditingDeliveryTime ? (
                <TextInput
                  style={Styles.compAdd}
                  value={deliveryTime}
                  onChangeText={setDeliveryTime}
                  placeholder={deliveryTime}
                  multiline={false}
                />
              ) : (
                <Text style={Styles.compAdd}>{deliveryTime}</Text>
              )}
            </View>
            <TouchableOpacity
              style={Styles.forwrsdIconCont}
              onPress={() => setIsEditingDeliveryTime((prev) => !prev)}
            >
              <Icon3 name={isEditingDeliveryTime ? 'check' : 'edit'} size={18} color={Colors.secondary} />
            </TouchableOpacity>
          </View>

          {/* Payment Option Card */}
          <View style={Styles.FirstCard}>
            <View style={Styles.mainiconCont}>
              <View style={Styles.iconBox}>
                <IconPay name="payment" size={30} color={Colors.primary} />
              </View>
            </View>
            <View style={Styles.universalTextmainContainer}>
              <Text style={Styles.AddressText}>Payment Option</Text>
              {isEditingPaymentOption ? (
                <TextInput
                  style={Styles.compAdd}
                  value={paymentOption}
                  onChangeText={setPaymentOption}
                  multiline={false}
                  autoFocus
                />
              ) : (
                <Text style={Styles.compAdd}>{paymentOption}</Text>
              )}
            </View>
            <TouchableOpacity
              style={Styles.forwrsdIconCont}
              onPress={() => setIsEditingPaymentOption((prev) => !prev)}
            >
              <Icon3 name={isEditingPaymentOption ? 'check' : 'edit'} size={18} color={Colors.secondary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.dottedview}>
          <Text style={Styles.PromoText}>Add Promo Code</Text>
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
              <Text style={Styles.taxAmount}>Rs {tax.toFixed(2)}</Text>
            </View>
            <View style={Styles.line} />
            <View style={Styles.totalmain}>
              <Text style={Styles.totalText}>Total:</Text>
              <Text style={Styles.totalAmount}>Rs {total.toFixed(2)}</Text>
            </View>
          </View>
          <View style={Styles.touchablecont}>
            <Touchable title="CONFIRM" onPress={handleConfirm} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Delivery_Payment;
