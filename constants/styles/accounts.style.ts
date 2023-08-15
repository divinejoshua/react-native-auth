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
        marginBottom : 10,
    }),

    formView:{
        marginTop : 20,
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

    //@ts-ignore : true
    socialsBtn :  (borderColor : string) => ({
        height : 45,
        alignItems : 'center',
        justifyContent : 'center',
        flex : 2,
        borderColor : borderColor,
        borderRadius : 5,
        borderWidth : .5,
        flexDirection :'row',
    }),

    socialIcon:{
        height : 18,
        width : 18,
        marginRight : 10,
        backgroundColor : 'transparent',
    },
    
    btnText:{
        fontFamily : 'QuicksandSemiBold',
    },

    registerView: {
        flexDirection: 'row',
        backgroundColor :'transparent',
        justifyContent : 'center',
        alignContent: 'center',
        marginTop : 40,
        marginBottom : 30,
      },
    
      //@ts-ignore:true
      registerText: (color: string) =>({
        fontSize : 16,
        letterSpacing:.3,
        color : color,
    
      }),
    
      registerLink:{
        fontSize : 17,
        letterSpacing:.3,
        color : '#3b82f6',
      },

      checkboxView:{
        flexDirection: 'row',
        alignItems: 'center',
        gap : 10,
        maxWidth: '100%',
        marginTop : 30,
      },

      checkbox :{
        borderRadius :7,
      },

    //   @ts-ignore : true
      termsOfServiceText : (color: string) =>({
        color : color,
        flex: 1,
        letterSpacing:.3,
        maxWidth: '100%',
      }),

      link:{
        color : '#3b82f6',
        fontFamily : 'QuicksandSemiBold',
      },

      resendCode :{
        color : '#3b82f6',
        marginTop :10,
        textAlign : 'right',
        fontFamily : 'QuicksandSemiBold',
      },

})

export default styles;