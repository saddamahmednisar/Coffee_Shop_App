import { StyleSheet } from 'react-native';
import Colors from '../../Constant/Colors';
import Fonts from '../../Constant/Fonts';

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.background,

    },
    headericonConatiner: {
        flex: 0.07,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        paddingHorizontal: 14
    },
    ProContainer: {
        flex: 0.3,
        backgroundColor: Colors.primary,
        justifyContent: 'flex-start',
        alignItems: 'center',


    },
    profileImage: {
        width: "28%",
        height: "57%",
        borderRadius: 75,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.White,
        marginTop: 5
    },
    selectingContainermain: {
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 3,
        backgroundColor: Colors.background,
        marginTop: 10


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
    FvrtMain: {
        flex: 0.63,
        backgroundColor: Colors.background
    },
    sub2TextCont: {
        height: 25,
        marginTop: 15,
        marginHorizontal: 15
    },
    sub2Text: {
        fontSize: 16,
        fontFamily: Fonts.Medium,
        color: Colors.Mat_black
    },
    scrollcont: {
        margin: 15

    },
    sub2coffCont: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.border_shadow,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 1,
        shadowOpacity: 0.2,
        elevation: 4,
        shadowColor: Colors.border_shadow

    },
    loc1: {
        height: 120,
        flexDirection: 'row'
    },
    loc1img: {
        width: 92,
        margin: 10,

    },
    imageAres: {
        height: '100%',
        width: "100%",
        resizeMode: 'cover',
        borderRadius: 4
    },
    loc1TextC: {

        flex: 1,
        marginTop: 7,
        marginRight: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    loc1TC1: {
        height: '100%',
        width: '90%',

        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    Shop1T: {
        fontSize: 14,
        fontFamily: Fonts.Medium,
        marginTop: 10,
        color: Colors.Mat_black
    },
    lockm: {
        flexDirection: 'row',

    },
    iconloc1: {
        marginTop: 2,
        color: Colors.light_grey
    },
    kmText: {
        fontSize: 12,
        color: Colors.dark_grey
    },

    loc1TC2: {
        width: '10%',

    },
    icon2heart: {
        marginTop: 10
    },
    starContainer: {
        marginTop: 3
    },

    myStarStyle: {
        color: Colors.light_mustard,
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        borderColor: Colors.black
    },
    myEmptyStarStyle: {
        color: Colors.White,
    },
    emptyCompText: {
        alignSelf: "center",
        fontFamily: Fonts.Medium
    },
    ordercheck: {
        height: "12%",
        margin: 14,
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    orderInput: {
        width: "70%",
        backgroundColor: Colors.White,
        borderRadius: 10,
        borderColor: Colors.dark_grey,
        borderWidth: 1,
        paddingLeft: 10
    },
    orderbtn: {
        width: "23%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        borderColor: Colors.White,
        borderWidth: 1,
    },
    orderbtnText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.White
    }
});
export default Styles;