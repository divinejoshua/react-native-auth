import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../../components/Themed';
import { router } from 'expo-router';


export default function GetStartedScreen() {

  const image = require('../../assets/images/getstarted.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        {/* App Name  */}
        <Text style={styles.nameText}>Wetrospace</Text>

      {/* Bottom view  */}
        <View style={styles.bottomView}>

          {/* Hero text  */}
          <Text style={styles.heroText}>Book a vacation with Wetrospace</Text>
          <Text style={styles.regularText}>Discover, Connect and Visit every part of the world with Wetrospace.</Text>

          {/* Get started button  */}
          <TouchableOpacity style={styles.actionButton} onPress={()=> router.push('/')}>
            <Text style={styles.actionButtonText}>Get started</Text>
          </TouchableOpacity>

        {/* Register text  */}
          <View style={styles.registerView}>
            <Text style={styles.registerText}>Haven't registered yet,</Text>
            <Text style={styles.registerLink}> register here</Text>
          </View>

        </View>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // paddingHorizontal : 30,
  },
  nameText: {
    marginHorizontal : 30,
    marginTop: 70,
    color: 'white',
    fontSize: 25,
    lineHeight: 84,
    fontFamily : 'NunitoSansBold',
    fontWeight: '700',
    // textAlign: 'center',
  },

  bottomView:{
    bottom : 0,
    padding: 30,
    position : 'absolute',
    // borderWidth : 1,
    width: '100%',
    backgroundColor :'transparent',
  },

  heroText: {
    fontSize : 35,
    fontWeight :'700',
    color : '#fff',
    letterSpacing:-.5,
    fontFamily : 'NunitoSansBold',
  },

  regularText:{
    marginTop : 15,
    fontSize:17,
    letterSpacing:.3,
    color : "#ffffff"
  },

  actionButton : {
    marginTop : 25,
    width : '100%',
    height : 50,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor :'#3b82f6',
    borderRadius : 100,
  },

  actionButtonText: {
    color : '#fff',
    fontWeight : '600',
    fontFamily : 'NunitoSansBold',
    fontSize : 16,
  },

  registerView: {
    flexDirection: 'row',
    backgroundColor :'transparent',
    justifyContent : 'center',
    alignContent: 'center',
    marginTop : 15,
    marginBottom : 30,
  },

  registerText:{
    fontSize : 17,
    color : '#fff',
    letterSpacing:.3,
    fontWeight : '500',
    fontFamily : 'NunitoSansBold',

  },

  registerLink:{
    fontSize : 17,
    letterSpacing:.3,
    color : '#3b82f6',
    fontWeight : '500',
    fontFamily : 'NunitoSansBold',
  }

});