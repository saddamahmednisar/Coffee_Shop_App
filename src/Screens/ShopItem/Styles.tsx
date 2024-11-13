import { StyleSheet } from 'react-native';
import Colors from '../../Constant/Colors';
import Fonts from '../../Constant/Fonts';

const Styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
   },
   container: {
      flex: 0.3,
   },
   LocContainer: {
      height: 50,
      marginHorizontal: 14,
      flexDirection: 'column'
   },
   lockm: {
      flexDirection: 'row',
   },
   iconloc1: {
      marginTop: 2,
      color: Colors.light_grey
   },
   locText: {
      paddingLeft: 4,
      marginTop: 2,
      fontSize: 12,
      color: Colors.dark_grey,
      fontFamily: Fonts.Regular
   },
   cityText: {
      fontSize: 14,
      color: Colors.Mat_black,
      paddingLeft: 22,
      fontFamily: Fonts.Regular
   },
   DiffitemMain: {
      height: 40,
      marginTop: 10,
      flexDirection: "row",
      justifyContent: 'space-evenly'
   },
   scrollContainer: {
      flexDirection: 'row',
   },
   itemCat1: {
      height: 38,
      width: 42,
      backgroundColor: Colors.box_background,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginHorizontal: 10
   },
   itemCat1T: {
      fontSize: 12,
      fontFamily: Fonts.Light,
      color: Colors.dark_grey
   },
   itemCat2: {
      height: 38,
      width: 120,
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginHorizontal: 10
   },
   itemCat2T: {
      fontSize: 12,
      fontFamily: Fonts.Light,
      color: Colors.White
   },
   itemCat3: {
      height: 38,
      width: 69,
      backgroundColor: Colors.box_background,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginHorizontal: 10
   },
   itemCat3T: {
      fontSize: 12,
      fontFamily: Fonts.Light,
      color: Colors.dark_grey
   },
   itemCat4: {
      height: 38,
      width: 48,
      backgroundColor: Colors.box_background,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginHorizontal: 10
   },
   itemCat4T: {
      fontSize: 12,
      fontFamily: Fonts.Light,
      color: Colors.dark_grey
   },
   itemCat5: {
      height: 38,
      width: 71,
      backgroundColor: Colors.box_background,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginHorizontal: 10
   },
   itemCat5T: {
      fontSize: 12,
      fontFamily: Fonts.Light,
      color: Colors.dark_grey
   },
   itemOffC: {
      flex: 0.8,
      flexDirection: "column",
      marginTop: 25,
      marginHorizontal: 14,
   },
   first2item: {
      flexDirection: 'row',
      justifyContent: "space-between",
      marginVertical: 5
   },
   firstitem: {
      width: "48%",
      backgroundColor: Colors.White,
      borderRadius: 10,
      shadowOffset: {
         width: 0,
         height: 0,
      },
      shadowRadius: 1,
      shadowOpacity: 0.2,
      elevation: 5,
      shadowColor: Colors.border_shadow,
      marginHorizontal: 5,
      marginBottom: 10
   },
   bgimage: {
      width: '100%',
      height: 140,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',

      overflow: 'hidden'
   },
   hearticon: {
      paddingBottom: 10,
      paddingRight: 15,
   },
   TextViewoff: {
      flexDirection: 'column',
      margin: 8,
   },
   nameText: {
      fontSize: 14,
      color: Colors.Mat_black
   },
   typeText: {
      fontSize: 12,
      color: Colors.dark_grey,
      marginTop: 2
   },
   priceText: {
      fontSize: 18,
      color: Colors.primary,
      marginTop: 4
   },
   cart_ic_adj: {
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center'
   }
});


export default Styles;
