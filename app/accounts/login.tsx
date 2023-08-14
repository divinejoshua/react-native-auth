import {  SafeAreaView } from 'react-native'
import React from 'react'
import { Text } from '../../components/Themed'
import styles from '../../constants/styles/accounts.style'
import { Stack } from 'expo-router'




export default function LoginScreen() {
  return (
    <SafeAreaView>
        <Stack.Screen
          options={{
              headerShadowVisible: false,
              // headerLeft: () => (
              //     <ScreenHeaderBtn
              //         iconUrl={icons.left}
              //         dimension='60%'
              //         handlePress={() => router.back()}
              //     />
              // ),
              headerTitle: "Yoo",
          }}
        />



      {/* Page Title  */}
      <Text style={styles.container}>Login</Text>
    </SafeAreaView>
  )
}