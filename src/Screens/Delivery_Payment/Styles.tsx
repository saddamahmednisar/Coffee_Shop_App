import { StyleSheet } from 'react-native';
import Colors from '../../Constant/Colors';
import Fonts from '../../Constant/Fonts';

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.background
    },
    selectingContainermain: {
        height:50,
        alignItems: 'center', 
        paddingHorizontal: 14, 
        paddingVertical: 3,
        backgroundColor:Colors.background


    },
    selectingContainersub: {
        height: "100%",
        width: "100%",
        backgroundColor: Colors.selfcard,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    selfpickCont: {
        height: "80%",
        width: "45%",
        backgroundColor: Colors.selfcard,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: "center"
    },
    selfpictText: {
        fontFamily: Fonts.Regular,
        color: Colors.Mat_black,
        fontSize: 12
    },
    delivery: {
        height: "80%",
        width: "45%",
        backgroundColor: Colors.White,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: "center"
    },
    deliveryText: {
        fontFamily: Fonts.Regular,
        color: Colors.primary,
        fontSize: 12
    },

    FirstCard: {
        width: "93%",
        backgroundColor: Colors.White,
        flexDirection: 'row',
        borderRadius: 4,
        marginHorizontal: 14,
        shadowColor: '#0000000',
        shadowOffset:
        {
            width: 0,
            height: 2

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent:'center',
        paddingVertical:10
    },
    mainiconCont: {
        width: "18%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconBox: {
        width: "60%",
        backgroundColor: Colors.signboxes,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    universalTextmainContainer: {
        flexDirection: 'column',
        width: '70%',
        justifyContent: "center",
         marginTop: 8
        

    },
    AddressText: {
        fontFamily: Fonts.Medium,
        fontSize: 14,
        color: Colors.Mat_black,
        lineHeight: 16,
    },
    compAdd: {
        color: Colors.dark_grey,
        backgroundColor: Colors.White,
        height: 35
    },
    
    forwrsdIconCont: {
        width: "10%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    dottedview: {
        padding:8,
        justifyContent: 'center',
        alignItems: "center",
        marginHorizontal: 14,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderStyle: 'dotted'
    },
    PromoText: {
        fontFamily: Fonts.Regular,
        color: Colors.secondary,
        fontSize: 14
    },
    subcont2: {
        flex: 0.35,
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
    touchablecont: {
        flex: 0.35,
        justifyContent: 'center',
        alignItems: 'center',

    },
    scrollViewContainer: {
        backgroundColor: Colors.White,
        flexGrow: 1,

    },
});
export default Styles