import { KeyboardAvoidingView, Platform, Pressable, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { SafeAreaView, Text, View, TextInput } from '../../components/Themed'
import styles from '../../constants/styles/accounts.style'
import { Link, Stack } from 'expo-router'
import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { Image } from 'expo-image';




export default function OtpScreen() {

  // Get theme 
  const currentTheme = useColorScheme();
  const backgroundColor = currentTheme === "light" ? Colors.light.background :Colors.dark.background
  const textColor = currentTheme === "light" ? Colors.light.text :Colors.dark.text
  const textMuted = currentTheme === "light" ? Colors.light.textMuted :Colors.dark.textMuted
  const backgroundMuted = currentTheme === "light" ? Colors.light.backgroundMuted :Colors.dark.backgroundMuted
  const borderColor = currentTheme === "light" ? Colors.light.borderColor :Colors.dark.borderColor

  //Data
  const [showPassword, setshowPassword] = useState<boolean>(false)     

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
        <Stack.Screen
          options={{
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: backgroundColor,
              },
              headerLeft: () => (
                  <TouchableOpacity style={[styles.backButton, {backgroundColor : backgroundMuted}]}>
                    <Entypo name="chevron-left" size={20} color={textColor}/>
                  </TouchableOpacity>
              ),
              headerTitle: "",
          }}
        />

        {/* Main container  */}
        <ScrollView style={styles.container}>
          
          {/* Page title  */}
          <Text style={styles.pageTitle}>Confirm Email</Text>
          {/* @ts-ignore : true  */}
          <Text style={styles.subTitleText(textMuted)}>Enter the code we sent to your email address <Text>myemail123@gmail.com </Text></Text>

          {/* Form  */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >

            {/* Email  */}
            <View style={styles.formView}>
              <Text style={styles.formLabel}>Email </Text>
              <TextInput
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder='Enter your email address'
                //@ts-ignore : true
                style={styles.formControl(borderColor)}
                textContentType="emailAddress"
              />
            </View>

            {/* Resend OTP  */}
            {/* @ts-ignore */}
            <Text style={styles.forgotPassword(textMuted)}>Forgot password?</Text>


            {/* Action button  */}
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.btnColor}>Continue</Text>
              </TouchableOpacity>


              </KeyboardAvoidingView>



        </ScrollView>


    </SafeAreaView>
  )
}