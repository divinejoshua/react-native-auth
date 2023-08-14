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
        marginTop : 10,
        fontSize : 16,
        color : color,
    }),

    form:{
        marginTop : 20,
    },

    formLabel : {
        fontSize : 18,
        fontFamily : 'QuicksandSemiBold',
        marginBottom : 10,
    },

    // @ts-ignore : true 
    formControl : (borderColor : string) =>({
        height : 50,
        borderWidth : 1,
        paddingHorizontal : 10,
        borderRadius : 5,
        borderColor : "#efefef",
    })
})

export default styles;