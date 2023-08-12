import { View, Text } from '../components/Themed'
// @ts-ignore : true 
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react'
import { Image } from 'react-native';

export default function OnboardingScreen() {
  return (
        <Onboarding
          pages={[
            {
              backgroundColor: '#fff',
              // image: <Image source={require('./images/circle.png')} />,
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
          ]}
        />
  )
}