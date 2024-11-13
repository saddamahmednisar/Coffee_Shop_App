import { StyleSheet } from 'react-native';
import Colors from '../../Constant/Colors';
import Fonts from '../../Constant/Fonts';

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.background
    },
    subcont1: {
        flex: 0.7,
        margin: 14
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover'
    },
    subcont2: {
        flex: 1.3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
        position: 'relative',
    },
    circularView: {
        width: 40,
        height: 40,
        backgroundColor: Colors.transparent,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        top: -20,
        right: 20,
    },
    dash: {
        width: 36,
        height: 5,
        marginTop: 10,
        backgroundColor: Colors.dashColor,
        alignSelf: 'center',
        borderRadius: 2.5
    },
    TextContainer: {
        flex: 0.35,
        margin: 14
    },
    subHeading: {
        fontFamily: Fonts.Medium,
        fontSize: 20,
        color: Colors.Mat_black
    },
    description: {
        fontFamily: Fonts.Regular,
        fontSize: 12,
        color: Colors.dark_grey
    },
    
    ReviewC: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
        marginTop: 4
    },
    imagesContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    imageR: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.White,
        marginLeft: -15,  
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 4,
        fontFamily:Fonts.Regular,
        fontSize: 12,
        color: Colors.dark_grey,
        marginTop: 2
    },

    sizeContainer: {
        flex: 0.2,
        marginHorizontal: 14,

    },
    sizeText: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: Colors.Mat_black
    },
    DiffSizeMain: {
        height: 38,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    sbtnContainer: {
        height: 38,
        width: "30%",
        borderRadius: 4,
        backgroundColor: Colors.box_background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontFamily: Fonts.Regular,
        fontSize: 12,
        color: Colors.dark_grey
    },
    pricecartmain: {
        flex: 0.15,
        marginHorizontal: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    cartContainer: {
        height: 46,
        width: 132,
        backgroundColor: Colors.Cart_bg,
        borderRadius: 27.5,
        flexDirection: "row",
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
    priceContainer: {
        height: "100%",
        width: "50%",
        alignItems: 'flex-end',
      
    },
    priceText: {
        fontFamily: Fonts.Regular,
        fontSize: 14,
        color: Colors.black
    },
    priceAmount: {
        fontFamily: Fonts.Regular,
        fontSize: 24,
        color: Colors.primary
    },
    buttoncartmain: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttoncart: {
        height: 48,
        width: 386,
        backgroundColor: Colors.primary,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttoncartText: {
        fontFamily: Fonts.Regular,
        fontSize: 12,
        color: Colors.White
    }
});
export default Styles;