import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Iconadr from 'react-native-vector-icons/Entypo';
import IconPay from 'react-native-vector-icons/MaterialIcons';
import HeaderLine from '../../Components/HeaderLine';
import Touchable from '../../Components/Touchable';
import Colors from '../../Constant/Colors';
import Styles from './Styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store'; 

const Delivery_Payment = () => {
  const [selectedOption, setSelectedOption] = useState('delivery');


  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const tax = useSelector((state: RootState) => state.cart.tax);
  const total = useSelector((state: RootState) => state.cart.total);

  const handleSelection = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  return (
    <View style={Styles.mainContainer}>
      <HeaderLine isMultiple={true} title="Delivery & Payment" isBack={true} />
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
            onPress={() => handleSelection('selfPickUp')}>
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
            onPress={() => handleSelection('delivery')}>
            <Text style={{ color: selectedOption === 'delivery' ? Colors.primary : Colors.Mat_black }}>
              Delivery
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.listContainerMain}>
        <View style={Styles.listContainersub}>
          <View style={Styles.FirstCard}>
            <View style={Styles.mainiconCont}>
              <View style={Styles.iconBox}>
                <Iconadr name="address" size={30} color={Colors.primary} />
              </View>
            </View>
            <View style={Styles.textContainermain}>
              <Text style={Styles.AddressText}>Address</Text>
              <Text style={Styles.compAdd}>1T-1, Yeses Building, 3rd Avenue, West, Anna Nagar, Chennai,TN-600040.</Text>
            </View>
            <View style={Styles.forwrsdIconCont}>
              <Icon3 name="right" size={18} color={Colors.light_grey} />
            </View>
          </View>
          {/* Second Card */}
          <View style={[Styles.FirstCard, { height: '20%' }]}>
            <View style={Styles.mainiconCont}>
              <View style={Styles.iconBox}>
                <IconPay name="person" size={30} color={Colors.primary} />
              </View>
            </View>
            <View style={Styles.textContainermain}>
              <Text style={Styles.AddressText}>Contact</Text>
              <Text style={Styles.compAdd}>+91 00000 00000</Text>
            </View>
            <View style={Styles.forwrsdIconCont}>
              <Icon3 name="right" size={18} color={Colors.light_grey} />
            </View>
          </View>
          {/* Third Card */}
          <View style={[Styles.FirstCard, { height: '20%' }]}>
            <View style={Styles.mainiconCont}>
              <View style={Styles.iconBox}>
                <Icon3 name="clockcircleo" size={30} color={Colors.primary} />
              </View>
            </View>
            <View style={Styles.textContainermain}>
              <Text style={Styles.AddressText}>Delivery Time</Text>
              <Text style={Styles.compAdd}>As soon as possible</Text>
            </View>
            <View style={Styles.forwrsdIconCont}>
              <Icon3 name="right" size={18} color={Colors.light_grey} />
            </View>
          </View>
          {/* Fourth Card */}
          <View style={[Styles.FirstCard, { height: '20%' }]}>
            <View style={Styles.mainiconCont}>
              <View style={Styles.iconBox}>
                <IconPay name="payment" size={30} color={Colors.primary} />
              </View>
            </View>
            <View style={Styles.textContainermain}>
              <Text style={Styles.AddressText}>Payment Option</Text>
              <Text style={Styles.compAdd}>Credit Card</Text>
            </View>
            <View style={Styles.forwrsdIconCont}>
              <Icon3 name="right" size={18} color={Colors.light_grey} />
            </View>
          </View>
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
            <Text style={Styles.subtotalAmount}>₹{(subtotal ?? 0).toFixed(2)}</Text>
          </View>
          <View style={Styles.cal2cont}>
            <Text style={Styles.taxText}>Tax & Fee:</Text>
            <Text style={Styles.taxAmount}>₹{(tax ?? 0).toFixed(2)}</Text>
          </View>
          <View style={Styles.line} />
          <View style={Styles.totalmain}>
            <Text style={Styles.totalText}>Total:</Text>
            <Text style={Styles.totalAmount}>₹{(total ?? 0).toFixed(2)}</Text>
          </View>
        </View>
        <View style={Styles.touchablecont}>
          <Touchable title="CONFIRM" />
        </View>
      </View>
    </View>
  );
};

export default Delivery_Payment;
