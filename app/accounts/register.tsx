import { KeyboardAvoidingView, Platform, Pressable, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { SafeAreaView, Text, View, TextInput } from '../../components/Themed'
import styles from '../../constants/styles/accounts.style'
import { Link, Stack, router } from 'expo-router'
import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

interface iFormData {
  username              : string;
  email                 : string;
  password              : string;
  confirmPassword       : string;
  hasErrors             : boolean;  
  usernameError         : string;
  emailError            : string;
  passwordError         : string;
  confirmPasswordError  : string;
}




export default function RegisterScreen() {

  // Get theme 
  const currentTheme = useColorScheme();
  const backgroundColor = currentTheme === "light" ? Colors.light.background :Colors.dark.background
  const textColor = currentTheme === "light" ? Colors.light.text :Colors.dark.text
  const textMuted = currentTheme === "light" ? Colors.light.textMuted :Colors.dark.textMuted
  const backgroundMuted = currentTheme === "light" ? Colors.light.backgroundMuted :Colors.dark.backgroundMuted
  const borderColor = currentTheme === "light" ? Colors.light.borderColor :Colors.dark.borderColor

  //Data
  const [showPassword, setshowPassword] = useState<boolean>(false)     
  const [isChecked, setChecked] = useState<boolean>(false)   //This is the terms and conditions checkbox value

  const [formData, setformData] = useState<iFormData>({
      username: "",
      email : "",
      password : "",
      confirmPassword : "",
      hasErrors : false,
      usernameError : "",
      emailError : "",
      passwordError : "",
      confirmPasswordError   : "",
    })

  const [isLoading, setisLoading] = useState<boolean>(false)
  const [isDisabled, setisDisabled] = useState<boolean>(false)
  const [firstValidate, setfirstValidate] = useState<boolean>(true)



  // Handle Register 
  const handleRegister  =() =>{

    setfirstValidate(false)   //Set firstValidate to false

    if(formData.hasErrors) { return }   // Return if error 

    setisDisabled(true) //Set disabled to true 
    setisLoading(true)   // Set loading to true

    // If all successful 
    setTimeout(() => {
      router.push("/accounts/otp") //Move to OTP page

      setisDisabled(false) //Set disabled to true 
      setisLoading(false)   // Set loading to true

    }, 2000);


  }


  return (
    <SafeAreaView style={[styles.safeAreaView]}>
        <Stack.Screen
          options={{
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: backgroundColor,
              },
              headerLeft: () => (
                  <TouchableOpacity style={[styles.backButton, {backgroundColor : backgroundMuted}]}  onPress={()=> router.back()}>
                    <Entypo name="chevron-left" size={20} color={textColor}/>
                  </TouchableOpacity>
              ),
              headerTitle: "",
          }}
        />

        {/* Main container  */}
        <ScrollView style={styles.container}>

          {/* Page title  */}
          <Text style={styles.pageTitle}>Create Account</Text>
          {/* @ts-ignore : true  */}
          <Text style={styles.subTitleText(textMuted)}>Join our community of experience a seamless vacation experience accross africa</Text>

          {/* Form  */}
          <KeyboardAvoidingView
            keyboardVerticalOffset={100}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >

            {/* Username  */}
            <View style={styles.formView}>
              <Text style={styles.formLabel}>Username </Text>
              <TextInput
                onChangeText={text => {
                    setformData({
                      ...formData,
                      username: text
                    });
                }}
                autoCapitalize="none"
                autoComplete="username"
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="next"
                placeholder='Enter your username'
                //@ts-ignore : true
                style={styles.formControl(borderColor)}
                textContentType="username"
              />
            </View>


            {/* Email  */}
            <View style={styles.formView}>
              <Text style={styles.formLabel}>Email </Text>
              <TextInput
                onChangeText={text => {
                  setformData({
                    ...formData,
                    email: text
                  });
                }}
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
            

                {/* Password  */}
                <View style={styles.formView}>
                <Text style={styles.formLabel}>Password </Text>

                {/* Password Text Input  */}
                <TextInput
                    onChangeText={text => {
                      setformData({
                        ...formData,
                        password: text
                      });
                    }}
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect={false}
                    secureTextEntry={!showPassword} //If showPassword is false, then SecureTextEntey will be true and vice versa
                    returnKeyType="next"
                    placeholder='Enter your password'
                    //@ts-ignore : true
                    style={styles.formControl(borderColor)}
                    textContentType="password"
                />
                </View>


                {/* Confirm Password  */}
                <View style={styles.formView}>
                <Text style={styles.formLabel}>Confirm Password </Text>

                {/* Password Text Input  */}
                <TextInput
                    onChangeText={text => {
                      setformData({
                        ...formData,
                        username: text
                      });
                    }}
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect={false}
                    secureTextEntry={!showPassword} //If showPassword is false, then SecureTextEntey will be true and vice versa
                    returnKeyType="next"
                    placeholder='Confirm your password'
                    //@ts-ignore : true
                    style={styles.formControl(borderColor)}
                    textContentType="password"
                />
                </View>

                {/* Terms of service  */}
                <View style={styles.checkboxView}>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        style={styles.checkbox}
                        color={isChecked ? '#3b82f6' : undefined}
                    />

                    {/* @ts-ignore:true  */}
                    <Text style={styles.termsOfServiceText(textMuted)}>
                        By agreeing to the <Text style={styles.link}>term of service</Text>, you are entering into a legally binding contract with the service provider.
                    </Text>
                </View>


                { /* Action button  */}
                <TouchableOpacity style={styles.actionBtn}  onPress={()=> router.push("/accounts/otp")}>
                    <Text style={styles.btnColor}>Continue</Text>
                </TouchableOpacity>


           </KeyboardAvoidingView>


            {/* Login text  */}
            <View  style={styles.registerView}>

            {/* @ts-ignore: true  */}
            <Text style={styles.registerText(textMuted)}>Already have an account?</Text>
            <Link href={"/accounts/login"}><Text style={styles.registerLink}> Login</Text></Link>
            </View>



        </ScrollView>


    </SafeAreaView>
  )
}