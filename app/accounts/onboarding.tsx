import { View, Text } from '../../components/Themed'
// @ts-ignore : true 
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react'
import Lottie from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';


const {width, height} = Dimensions.get('window');


export default function OnboardingScreen() {

  // done button component 
  const doneButton = ({...props})=>{
    return (
      <GestureHandlerRootView>
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text style={{color : "#fff", fontFamily : 'QuicksandBold',}}>Done</Text>
        </TouchableOpacity>
      </GestureHandlerRootView>
    )
  }


// Handle done button click 
  const handleDone = ()=>{

    // Move to home page 
    router.replace('/accounts/login')

    // Set onboarded to '1' in async storage 
    // setItem('onboarded', '1');
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
                    <Image style={styles.images} source={require('../../assets/images/one.jpg')} />
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
                    <Image style={styles.images} source={require('../../assets/images/two.jpg')} />
                ),

              title: 'Communicate',
              subtitle: 'Most stress free communication with team members and friends using our inbox feature.',
            },

            // Slider three
            {
              backgroundColor: '#fff',
              image: (
                <Image style={styles.images} source={require('../../assets/images/three.jpg')} />
              ),

              title: 'Share',
              subtitle: 'Share your pictures, videos, audio files or documents with ease to anyone, anywhere in the world.',
            },

            // Slider four
            {
              backgroundColor: '#fff',
              image: (
                <Image style={styles.images} source={require('../../assets/images/four.jpg')} /> 
              ),
              title: 'Security',
              subtitle: 'Your files are most secure and easily accessibly anywhere, from any device',
            },
          ]}

          titleStyles={{
            fontFamily : 'QuicksandBold',
            color : '#777',

          }}
          subTitleStyles={{
            paddingHorizontal: 10,
            letterSpacing: .4,
            fontSize: 17,
            color: '#999',
            fontFamily : 'QuicksandMedium',
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
      backgroundColor: '#2563eb',
      marginRight : 15,
      borderRadius : 100,
  }
})