import { StyleSheet } from 'react-native';
import Colors from '../../Constant/Colors';
import Fonts from '../../Constant/Fonts';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    subContainer1: {
        height: 75,
        justifyContent: "center",
        backgroundColor: Colors.background,
    },
    Inputmain: {
        height: 48,
        flexDirection: 'row',
        paddingHorizontal: 15,

    },
    Inputext: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "80%",
        backgroundColor: Colors.White,
        paddingHorizontal: 10,
        borderColor: Colors.border_shadow,
        borderWidth: 1
    },

    textInput: {
        marginLeft: 8,
    },

    Filterpoint: {
        width: "15%",
        backgroundColor: Colors.White,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 16,
        resizeMode: 'cover'
    },

    subContainer2: {
        flex: 1,
        backgroundColor: Colors.White,
        marginTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // zIndex: 233
    },
    sub2TextCont: {
        height: 30,
        marginTop: 15,
        marginHorizontal: 15,
        justifyContent:"center"
    },
    sub2Text: {
        fontSize: 16,
        fontFamily: Fonts.Medium,
        color: Colors.Mat_black
    },
    scrollcont: {
        marginHorizontal: 15

    },
    //FIRST SHOP
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
        shadowColor:Colors.border_shadow

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
        color:  Colors.dark_grey
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
    emptyCompText:{
        alignSelf:'center',
        fontSize: 16,
        fontFamily: Fonts.Regular,
        color:Colors.dark_grey
    }


});
export default Styles;