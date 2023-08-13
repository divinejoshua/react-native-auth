import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../../components/Themed';


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
          <TouchableOpacity style={styles.actionButton}>
            <Text>Get started</Text>
          </TouchableOpacity>
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
    fontWeight: '600',
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
    fontSize : 30,
    fontWeight :'600',
    color : '#fff'
  },

  regularText:{
    marginTop : 10,
    fontSize:16,
    letterSpacing:.3,
    color : "#ccc"
  },

  actionButton : {
    marginTop : 25,
    width : '100%',
    height : 50,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor :'#3b82f6'
  },

  actionButtonText: {
    
  }

});