import { ActivityIndicator, Alert, Button, KeyboardAvoidingView, Platform, Pressable, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { SafeAreaView, Text, View, TextInput } from '../../components/Themed'
import styles from '../../constants/styles/accounts.style'
import { Link, Stack, router } from 'expo-router'
import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { setItem } from '../../utils/asyncStorage';

// Flash message 
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";





export default function OtpScreen() {



  // Get theme 
  const currentTheme = useColorScheme();
  const backgroundColor = currentTheme === "light" ? Colors.light.background :Colors.dark.background
  const textColor = currentTheme === "light" ? Colors.light.text :Colors.dark.text
  const textMuted = currentTheme === "light" ? Colors.light.textMuted :Colors.dark.textMuted
  const backgroundMuted = currentTheme === "light" ? Colors.light.backgroundMuted :Colors.dark.backgroundMuted
  const borderColor = currentTheme === "light" ? Colors.light.borderColor :Colors.dark.borderColor


  // Data 
  const [otpValue, setotpValue] = useState<string>("")
  const [isError, setisError] = useState<boolean>(false)
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [isDisabled, setisDisabled] = useState<boolean>(false)
  const [firstValidate, setfirstValidate] = useState<boolean>(true)


  
  // Handle OTP 
  const validateOTP = () => {
    
    setisDisabled(otpValue ? false : true) //set disable to true depending if OTP has a value 
    
    setisError(false)  //Set isError to default

    // Otp Digits 
    let otpDigits 

    // Convert the input value to a number 
    let otpCode = parseInt(otpValue);

    // Get the number of digits in the text input 
    if (!isNaN(otpCode)) {
      otpDigits = Math.abs(otpCode).toString().length;
    }

    // If successful 
    if (otpDigits === 5) {
      setisError(false)
    } 

    // If errors 
    else {
      setisError(true)
    }
  }
  
//   On completing validation check 
  const completeValidation = () => {
    setfirstValidate(false) //Set firstValidate to false

    // validateOTP()           //Validate OTP code on front end
   
     if(isError) { return }   // Return if error 

    setisDisabled(true) //Set disabled to true 
    setisLoading(true)      // Set loading to true

    // If all successful 
    setTimeout(() => {
      //NOTE 
      // Set onboarded to '1' in async storage: This will make sure the user doesn't have to see the onboarding / Accounts screen after entering the app again
      setItem('onboarded', '1');

      //Redirect the user to home page
      router.replace("/")

    }, 2000);

  }


  // Resend OTP 
  const resendOTP = () =>{
      // Show flash message 
      showMessage({
        message: "OTP resent successfully",
        description: "We have resent a 5 digit OTP to your email",
        type: "success",
        backgroundColor: "#22c55e", // background color
      });
  }

  useEffect(() => {

    // Auto validate after first Validation 
      validateOTP()

  }, [otpValue])
  

  return (
    <>
    
    <FlashMessage position="bottom"/>

    <SafeAreaView style={[styles.safeAreaView]}>
        <Stack.Screen
          options={{
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: backgroundColor,
              },
              headerLeft: () => (
                  <TouchableOpacity style={[styles.backButton, {backgroundColor : backgroundMuted}]} onPress={()=> router.back()}>
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

            {/* OTP  */}
            <View style={styles.formView}>
              <Text style={styles.formLabel}>OTP </Text>
              <TextInput
                onChangeText={text => setotpValue(text)}
                autoCapitalize="none"
                autoComplete="one-time-code"
                autoCorrect={false}
                keyboardType="number-pad"
                returnKeyType="next"
                placeholder='Enter your OTP here'
                //@ts-ignore : true
                style={styles.formControl(borderColor)}
                textContentType="oneTimeCode"
              />
            </View>

           
            {/* IF there is error  */}

            { isError && !firstValidate ?
              <Text style={styles.errorMessage}>
                <Entypo name="warning" size={16} color="#ef4444" /> Invalid OTP code
              </Text> : ""
            }

            {/* Action button  */}
              <TouchableOpacity disabled={isDisabled} style={[styles.actionBtn, isDisabled ? styles.disableBtn : {}]} onPress={()=> completeValidation()}>
                {
                  isLoading ? 
                    <ActivityIndicator size="small" color={"#fff"} />
                  :
                    <Text style={styles.btnColor}>Continue</Text>
                }
                
                
              </TouchableOpacity>

              {/* Resend OTP  */}
              <TouchableOpacity onPress={()=> resendOTP()}>
                <Text style={styles.resendCode}>Send code again </Text>
              </TouchableOpacity>



              </KeyboardAvoidingView>



        </ScrollView>


    </SafeAreaView>
    </>
  )
}