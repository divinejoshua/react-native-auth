import { ImageBackground, StyleSheet } from 'react-native';
import { View, Text } from '../../components/Themed';


export default function GetStartedScreen() {

  const image = require('../../assets/images/getstarted.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        {/* App Name  */}
        <Text style={styles.nameText}>Wetrosoft</Text>

      {/* Bottom view  */}
        <View style={styles.bottomView}>
          <Text>Omo</Text>
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
    paddingHorizontal : 30,
  },
  nameText: {
    marginTop: 70,
    color: 'white',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: '600',
    // textAlign: 'center',
  },

  bottomView:{
    bottom : 0,
    padding: 100,
    position : 'absolute'
  }

});