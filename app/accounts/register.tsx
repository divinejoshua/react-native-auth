import { ActivityIndicator, KeyboardAvoidingView, Platform, Pressable, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { SafeAreaView, Text, View, TextInput } from '../../components/Themed'
import styles from '../../constants/styles/accounts.style'
import { Link, Stack, router } from 'expo-router'
import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';
import { validateEmailFormat, validatePasswordFormat, validateUsernameFormat } from '../../utils/validateForm';

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



    // Validate form
    const validateForm = () => {

      // Validate email format 
      setformData((prevData) => ({
        ...prevData,  
        usernameError: validateUsernameFormat(formData.username) ? "" : '3 - 15 characters. Can include [-_.]', 
      }));  //Validate username format
    
      // Validate email format 
      setformData((prevData) => ({
        ...prevData,  
        emailError: validateEmailFormat(formData.email) ? "" : 'Invalid email address', 
      }));  //Validate email format

      // Validate password [required ]
      setformData((prevData) => ({
        ...prevData,  
        passwordError: validatePasswordFormat(formData.password)?  "" : 'Password Must contain at least 6 characters with at least one number and at least one special character', 
      }));  //Validate password required

      // Validate password [required ]
      setformData((prevData) => ({
        ...prevData,  
        confirmPasswordError: formData.confirmPassword === formData.password ?  "" : 'Passwords do not match', 
      }));  //Validate confirm password

    }


  // Form validation watcher 
  const validateFormWatcher = ()=> {

    // Set hasErrors to true if any firld has erros 
    setformData((prevData) => ({...prevData, 
      hasErrors: 
        formData.usernameError === "" &&  formData.emailError === "" &&  formData.passwordError === "" && formData.confirmPasswordError === ""  && isChecked === true
      ? false : true
    }));  //Set form has erros to false

    // Set disabled if all fields are not available 
    setisDisabled(formData.username &&  formData.email && formData.password && formData.confirmPassword   && isChecked===true ? false : true)

  }





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


  // Use effect 
  useEffect(() => {
  
    // Auto validate after first Validation 
      validateForm()
      validateFormWatcher()

  }, [formData.username, formData.email, formData.password, formData.confirmPassword, formData.usernameError, formData.emailError, formData.passwordError, formData.confirmPasswordError, formData.hasErrors, isChecked])
  
    


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

            {/* Error message  */}
            { formData.usernameError && !firstValidate?
              <Text style={styles.errorMessage}>
                <Entypo name="warning" size={16} color="#ef4444" /> { formData.usernameError}
              </Text> : ""
            }





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

              {/* Error message  */}
              { formData.emailError && !firstValidate?
                <Text style={styles.errorMessage}>
                  <Entypo name="warning" size={16} color="#ef4444" /> { formData.emailError}
                </Text> : ""
              }

            

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

                {/* Error message  */}
                { formData.passwordError && !firstValidate?
                  <Text style={styles.errorMessage}>
                    <Entypo name="warning" size={16} color="#ef4444" /> { formData.passwordError}
                  </Text> : ""
                }


                {/* Confirm Password  */}
                <View style={styles.formView}>
                <Text style={styles.formLabel}>Confirm Password </Text>

                {/* Password Text Input  */}
                <TextInput
                    onChangeText={text => {
                      setformData({
                        ...formData,
                        confirmPassword: text
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

                {/* Error message  */}
                { formData.confirmPasswordError && !firstValidate?
                  <Text style={styles.errorMessage}>
                    <Entypo name="warning" size={16} color="#ef4444" /> { formData.confirmPasswordError}
                  </Text> : ""
                }


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

                {/* Error message  */}
                { formData.hasErrors && !firstValidate && isChecked ===false?
                  <Text style={styles.errorMessage}>
                    <Entypo name="warning" size={16} color="#ef4444" /> Agree to terms of service
                  </Text> : ""
                }


                { /* Action button  */}
                <TouchableOpacity  disabled={isDisabled} style={[styles.actionBtn, isDisabled ? styles.disableBtn : {}]} onPress={()=> handleRegister()}>
                    {
                        isLoading ? 
                          <ActivityIndicator size="small" color={"#fff"}/>
                        :
                          <Text style={styles.btnColor}>Continue</Text>
                    }
                </TouchableOpacity>


                {/* Login text  */}
                <View  style={styles.registerView}>

                {/* @ts-ignore: true  */}
                <Text style={styles.registerText(textMuted)}>Already have an account?</Text>
                <Link href={"/accounts/login"}><Text style={styles.registerLink}> Login</Text></Link>
                </View>


            </KeyboardAvoidingView>


        </ScrollView>


    </SafeAreaView>
  )
}