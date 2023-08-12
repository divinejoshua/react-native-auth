import { View, Text } from '../components/Themed'
// @ts-ignore : true 
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react'
import Lottie from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const {width, height} = Dimensions.get('window');


export default function OnboardingScreen() {

  // done button component 
  const doneButton = ({...props})=>{
    return (
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text style={{color : "#fff", fontWeight : '500'}}>Done</Text>
        </TouchableOpacity>
    )
    
}


  return (
    <>
    {/* <StatusBar hidden={true} /> */}
        <Onboarding
          containerStyles={{padding: 30}}
          // bottomBarColor={'transparent'}
          bottomBarHighlight={false}
          DoneButtonComponent={doneButton}
          pages={[

            // Slider one 
            {
              backgroundColor: '#fff',
              image: (
                <View style={styles.lottie}>
                    <Lottie style={{backgroundColor : '#fff'}}  source={require('../assets/images/two.json')} autoPlay loop />
                </View>
              ),

              title: 'Cloudiby',
              subtitle: 'Welcome to Cloudiby, we help you store and manage your files the 21st century way.',
            },


            // Slider two 
            {
              backgroundColor: '#fff',
              image: (
                <View style={styles.lottie}>
                    <Lottie  style={{backgroundColor : '#fff'}}  source={require('../assets/images/three.json')} autoPlay loop />
                </View>
              ),

              title: 'Communicate',
              subtitle: 'Most stress free communication with team members and friends using our inbox feature.',
            },

            // Slider three
            {
              backgroundColor: '#fff',
              image: (
                <View style={styles.lottie}>
                    <Lottie style={{backgroundColor : '#fff'}} source={require('../assets/images/one.json')} autoPlay loop />
                </View>
              ),

              title: 'Share',
              subtitle: 'Share your pictures, videos, audio files or documents with ease to anyone, anywhere in the world.',
            },

            // Slider four
            {
              backgroundColor: '#fff',
              image: (
                <View style={styles.lottie}>
                    <Lottie style={{backgroundColor : '#fff'}} source={require('../assets/images/three.json')} autoPlay loop />
                </View>
              ),

              title: 'Security',
              subtitle: 'Your files are most secure and easily accessibly anywhere, from any device',
            },
          ]}

          titleStyles={{
            fontWeight: '500',
            color: '#172554',
          }}
          subTitleStyles={{
            paddingHorizontal: 10,
            letterSpacing: .2,
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
  doneButton: {
      paddingVertical: 20,
      paddingHorizontal : 40,
      color: '#fff',
      backgroundColor: '#121212',
      borderTopLeftRadius : 100,
      borderBottomLeftRadius : 100,
      // marginRight :10,
  }
})