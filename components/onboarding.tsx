import { View, Text } from '../components/Themed'
// @ts-ignore : true 
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react'
import Lottie from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet } from 'react-native';


const {width, height} = Dimensions.get('window');


export default function OnboardingScreen() {
  return (
    <>
    <StatusBar hidden={true} />
        <Onboarding
          containerStyles={{paddingHorizontal: 15}}
          pages={[

            // Slider one 
            {
              backgroundColor: '#fecaca',
              image: (
                <View style={styles.lottie}>
                    <Lottie source={require('../assets/images/one.json')} autoPlay loop />
                </View>
              ),

              title: 'Onboarding',
              subtitle: 'Welcome to Cloudiby, we help you store and manage your files the 21st century way.',
            },


            // Slider two 
            {
              backgroundColor: '#fff',
              image: (
                <View style={styles.lottie}>
                    <Lottie source={require('../assets/images/two.json')} autoPlay loop />
                </View>
              ),

              title: 'Onboarding',
              subtitle: 'Welcome to Cloudiby, we help you store and manage your files the 21st century way.',
            },

            // Slider three
            {
              backgroundColor: '#fff',
              image: (
                <View style={styles.lottie}>
                    <Lottie source={require('../assets/images/three.json')} autoPlay loop />
                </View>
              ),

              title: 'Onboarding',
              subtitle: 'Welcome to Cloudiby, we help you store and manage your files the 21st century way.',
            },
          ]}

          titleStyles={{
            // color: '#fff',
          }}
          subTitleStyles={{
            paddingHorizontal: 10

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
      backgroundColor: 'white'
  },
  lottie:{
      width: width*0.9,
      height: width,
  },
  doneButton: {
      padding: 20,
      // backgroundColor: 'white',
      // borderTopLeftRadius: '100%',
      // borderBottomLeftRadius: '100%'
  }
})