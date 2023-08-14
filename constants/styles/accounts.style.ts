import { StyleSheet } from "react-native";

// Account pages style 
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },

    backButton:{
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        
    },
    
    container :{
        paddingHorizontal : 20,
        paddingVertical : 20,
    },

    pageTitle : {
        fontSize : 26,
        fontFamily : 'QuicksandBold',
    },

    //@ts-ignore : true
    subTitleText: (color : string) => ({
        marginTop : 15,
        fontSize : 16,
        color : color,
    }),

    formView:{
        marginTop : 30,
    },

    formLabel : {
        fontSize : 17,
        fontFamily : 'QuicksandSemiBold',
        marginBottom : 10,
    },

    // @ts-ignore : true 
    formControl : (borderColor : string) =>({
        height : 50,
        borderWidth : 1,
        paddingHorizontal : 10,
        borderRadius : 5,
        borderColor : borderColor,
        width: '100%',
    }),

    passwordView : {
        width: '100%',
        flexDirection: 'row',
        position : 'relative',
    },

    showPasswordIcon : {
        position : 'absolute',
        paddingVertical : 14,
        paddingHorizontal : 20,
        right : 0,
        zIndex : 1,
    },

    //@ts-ignore : true 
    forgotPassword : (color : string) =>({
        color : color,
        marginTop :10,
        textAlign : 'right',
        fontFamily : 'QuicksandSemiBold',
    }),

    actionBtn : {
        marginTop : 30,
        alignItems : 'center',
        justifyContent : 'center',
        width : '100%',
        height : 50,
        backgroundColor : '#3b82f6',
        borderRadius : 5,
    },

    btnColor : {
        color : '#fff',
        fontSize : 16,
        fontFamily : 'QuicksandBold',
    },

    //@ts-ignore: true
    ORtext: (color : string) => ({
        marginTop : 30,
        textAlign : 'center',
        color : color,
        fontFamily : 'QuicksandBold',
    }),

    socialsBtnView: {
        flexDirection : 'row',
        marginTop : 30,
        gap : 10
    },

    socialsBtn : {
        height : 45,
        alignItems : 'center',
        justifyContent : 'center',
        flex : 2,
        borderRadius : 5,
        borderWidth : .5,

    }
})

export default styles;