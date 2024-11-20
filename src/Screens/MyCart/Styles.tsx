import { StyleSheet } from 'react-native';
import Colors from '../../Constant/Colors';
import Fonts from '../../Constant/Fonts';

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'space-between'

    },
    subcont1: {
        flex: 0.65,
        marginHorizontal: 14
    },
    listmain: {
        flexDirection: 'column'
    },
    loc1: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        marginTop: 3

    },
    loc1img: {
        height: 97,
        width: 68,
        margin: 10,


    },
    imagecoff: {
        height: '100%',
        width: "100%",
        resizeMode: 'cover',
        borderRadius: 4
    },
    TextViewoff: {
        flex: 0.8,
        flexDirection: 'column',
        margin: 5,
        justifyContent: 'center',

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
        marginTop: 8
    },
    cartMainContainer: {
        flex: 0.2,
        marginVertical: 10,
        flexDirection: "column",
        alignItems: 'flex-end'
    },
    cartContainer: {
        height: "98%",
        width: 46,
        borderRadius: 27.5,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "space-evenly",
        marginVertical: 4
    },
    cartText: {
        fontSize: 18,
        fontFamily: Fonts.Regular,
        color: Colors.Mat_black,
        marginTop: 5
    },
    // CONT 2
    subcont2: {
        flex: 0.4,
        backgroundColor: Colors.White,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20
    },
    dash: {
        width: 36,
        height: 5,
        marginTop: 10,
        backgroundColor: Colors.dashColor,
        alignSelf: 'center',
        borderRadius: 2.5
    },
    calTextContainer: {
        flex: 0.6,
        marginHorizontal: 25,
        marginTop: 18,
        flexDirection: 'column'
    },
    cal1cont: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subtotalText: {
        fontFamily: Fonts.Regular,
        fontSize: 14,
        color: Colors.dark_grey
    },
    subtotalAmount: {
        fontFamily: Fonts.Regular,
        fontSize: 18,
        color: Colors.Mat_black
    },
    cal2cont: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    taxText: {
        fontFamily: Fonts.Regular,
        fontSize: 14,
        color: Colors.dark_grey
    },
    taxAmount: {
        fontFamily: Fonts.Regular,
        fontSize: 18,
        color: Colors.Mat_black
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.dark_grey,
        marginVertical: 10,
        alignSelf: 'center'
    },
    totalmain: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    totalText: {
        fontFamily: Fonts.Regular,
        fontSize: 14,
        color: Colors.dark_grey
    },
    totalAmount: {
        fontFamily: Fonts.Regular,
        fontSize: 18,
        color: Colors.primary
    },
    touchablecont:{
        flex: 0.35,
         justifyContent:'center',
         alignItems:'center',
         marginTop: 20
         
    },
    emptyText:{
         alignSelf:'center',
         fontFamily:Fonts.Regular
    }
});
export default Styles;