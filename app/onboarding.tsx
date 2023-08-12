import { View, Text } from '../components/Themed'
// @ts-ignore : true 
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react'
import Lottie from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { setItem } from '../utils/asyncStorage';


const {width, height} = Dimensions.get('window');


export default function OnboardingScreen() {

  // done button component 
  const doneButton = ({...props})=>{
    return (
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text style={{color : "#fff", fontWeight : '700'}}>Done</Text>
        </TouchableOpacity>
    )
}


  // Handle done button click 
  const handleDone = ()=>{
    router.replace('/two')
    setItem('onboarded', '1');
  }
  



  return (
    <>
        <Onboarding
          onDone={handleDone}
          onSkip={handleDone}
          containerStyles={{padding: 30}}
          // bottomBarColor={'transparent'}
          bottomBarHighlight={false}
          DoneButtonComponent={doneButton}
          pages={[

            // Slider one 
            {
              backgroundColor: '#fff',
              image: (
                // <View style={styles.lottie}>
                    <Image style={styles.images} source={require('../assets/images/one.jpg')} />
                    //  <Lottie style={{backgroundColor : '#fff'}}  source={require('../assets/images/two.json')} autoPlay loop />
                //  </View>
              ),

              title: 'Cloudiby',
              subtitle: 'Welcome to Cloudiby, we help you store and manage your files the 21st century way.',
            },


            // Slider two 
            {
              backgroundColor: '#fff',
              image: (
                    <Image style={styles.images} source={require('../assets/images/two.jpg')} />
                ),

              title: 'Communicate',
              subtitle: 'Most stress free communication with team members and friends using our inbox feature.',
            },

            // Slider three
            {
              backgroundColor: '#fff',
              image: (
                <Image style={styles.images} source={require('../assets/images/three.jpg')} />
              ),

              title: 'Share',
              subtitle: 'Share your pictures, videos, audio files or documents with ease to anyone, anywhere in the world.',
            },

            // Slider four
            {
              backgroundColor: '#fff',
              image: (
                <Image style={styles.images} source={require('../assets/images/four.jpg')} /> 
              ),

              title: 'Security',
              subtitle: 'Your files are most secure and easily accessibly anywhere, from any device',
            },
          ]}

          titleStyles={{
            fontWeight: '500',

          }}
          subTitleStyles={{
            paddingHorizontal: 10,
            letterSpacing: .2,
            fontWeight: '300',
            fontSize: 17,
            color: '#999',

          }}
          imageContainerStyles={{
          }}
        />

    </>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      // backgroundColor: 'white'
  },
  lottie:{
      width: width*0.9,
      height: width,
  },

  images:{
    width : 140, 
    height : 140,
  },
  doneButton: {
      paddingVertical: 20,
      paddingHorizontal : 40,
      color: '#fff',
      backgroundColor: '#3b82f6',
      marginRight : 20,
      // borderTopLeftRadius : 100,
      borderRadius : 100,
      // borderTopLeftRadius : 100,
      // borderBottomLeftRadius : 100,
  }
})