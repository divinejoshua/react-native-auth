import { ActivityIndicator, KeyboardAvoidingView, Platform, Pressable, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { SafeAreaView, Text, View, TextInput } from '../../components/Themed'
import styles from '../../constants/styles/accounts.style'
import { Link, Stack, router } from 'expo-router'
import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import { validateEmailFormat } from '../../utils/validateForm';
import { useAuth } from '../../context/AuthContext';
import axios from '../../api/axios';

interface iFormData {
  email         : string;
  password      : string;
  hasErrors     : boolean;
  emailError    : string;
  passwordError : string;
}

export default function LoginScreen() {

  // Get theme 
  const currentTheme = useColorScheme();
  const backgroundColor = currentTheme === "light" ? Colors.light.background :Colors.dark.background
  const textColor = currentTheme === "light" ? Colors.light.text :Colors.dark.text
  const textMuted = currentTheme === "light" ? Colors.light.textMuted :Colors.dark.textMuted
  const backgroundMuted = currentTheme === "light" ? Colors.light.backgroundMuted :Colors.dark.backgroundMuted
  const borderColor = currentTheme === "light" ? Colors.light.borderColor :Colors.dark.borderColor

  //Data
  const [formData, setformData] = useState<iFormData>({
    email : "",
    password : "",
    hasErrors : false,
    emailError : "",
    passwordError : "",
  })

  const [showPassword, setshowPassword] = useState<boolean>(false)
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [isDisabled, setisDisabled] = useState<boolean>(false)
  const [firstValidate, setfirstValidate] = useState<boolean>(true)
  const [serverErrorMessage, setserverErrorMessage] = useState<string>("")

  //Authentication
  const { onSetToken } = useAuth()


    // Handle OTP 
    const validateForm = () => {
      
      // Validate email format 
      setformData((prevData) => ({
        ...prevData,  
        emailError: validateEmailFormat(formData.email) ? "" : 'Invalid email address', 
      }));  //Validate email format

      // Validate password [required ]
      setformData((prevData) => ({
        ...prevData,  
        passwordError: formData.password ? "" : 'Password is required', 
      }));  //Validate password required

      // Set server error to none 
      setserverErrorMessage("")
    }

  // Form validation watcher 
  const validateFormWatcher = ()=> {

    // Set hasErrors to true if any firld has erros 
    setformData((prevData) => ({...prevData, 
      hasErrors: formData.emailError === "" &&  formData.passwordError === "" ? false : true
    }));  //Set form has erros to false

    // Set disabled if all fields are not available 
    setisDisabled(formData.email && formData.password ? false : true)

  }



  // Handle login 
  const handleLogin =() =>{

    setfirstValidate(false)   //Set firstValidate to false

    if(formData.hasErrors) { return }   // Return if error 

    setisDisabled(true) //Set disabled to true 
    setisLoading(true)   // Set loading to true

    // If all successful 
    loginUser()
  }

  // On login to server 
  const loginUser = async () =>{
    try {

      // Login user with the data 

      // @ts-ignore 
      let response = await axios.post('/accounts/auth/login/', 
        { 
          "username" : formData.email,
          "password"  :formData.password 
        }
      );
      
      // If response is 200 
      if (response.status === 200){

        // Set the access token in expo secure store 
        onSetToken(response.data.access_token);

        router.push("/accounts/otp") //Move to OTP page

        // console.log(response.data)
      }

    } catch (error : any) {
      // Handle error

       // If response is 400 
       if (error.response.status === 400) {
        
        //@ts-ignore: true
        setserverErrorMessage(error.response.data.non_field_errors[0]) //Set the server error
      }
      else {
          console.log('Error:', error);
          //@ts-ignore: true
          setserverErrorMessage("An error occured") //Set a generic error message
      }
    }


    // On finally 
    finally {

        setisDisabled(false) //Set disabled to true 
        setisLoading(false)   // Set loading to true

    }
  }


  // Use effect 
  useEffect(() => {
    
    // Auto validate after first Validation 
      validateForm()
      validateFormWatcher()

  }, [formData.email, formData.password, formData.emailError, formData.passwordError, formData.hasErrors])
  
  
  
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
          <Text style={styles.pageTitle}>Login</Text>
          {/* @ts-ignore : true  */}
          <Text style={styles.subTitleText(textMuted)}>Join our community of experience a seamless vacation experience accross africa</Text>

          {/* Form  */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >

            {/* Email  */}
            <View style={styles.formView}>
              <Text style={styles.formLabel}>Email </Text>
              <TextInput
               onChangeText={text => {
                  setformData({
                    ...formData, // Spread the existing data to preserve other fields
                    email: text // Update the email field
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

              <View style={styles.passwordView}>

                {/* Show password icon  */}
                <TouchableOpacity style={styles.showPasswordIcon} onPress={() => setshowPassword((prevValue) => !prevValue)}>
                  {showPassword ? 
                    <Entypo name="eye-with-line" size={18} color="#bcbcbc" /> //Show eye closed when showPassword is true
                    :
                    <Entypo name="eye" size={18} color="#bcbcbc" /> //Show eye open when showPassword is false

                  }
              </TouchableOpacity>

              {/* Password Text Input  */}
              <TextInput
                onChangeText={text => {
                    setformData({
                      ...formData, // Spread the existing data to preserve other fields
                      password: text // Update the email field
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
            </View>

            {/* Error message  */}
            { formData.passwordError && !firstValidate?
              <Text style={styles.errorMessage}>
                <Entypo name="warning" size={16} color="#ef4444" /> { formData.passwordError}
              </Text> : ""
            }


            {/* Forgot password  */}
            {/* @ts-ignore */}
            <Text style={styles.forgotPassword(textMuted)}>Forgot password?</Text>


             {/* Server Error message  */}
             { serverErrorMessage && !firstValidate?
              <Text style={styles.errorMessage}>
                <Entypo name="warning" size={16} color="#ef4444" /> { serverErrorMessage}
              </Text> : ""
            }


            {/* Action button  */}
              <TouchableOpacity  disabled={isDisabled} style={[styles.actionBtn, isDisabled ? styles.disableBtn : {}]}  onPress={()=> handleLogin()}>
                {
                    isLoading ? 
                      <ActivityIndicator size="small" color={"#fff"}/>
                    :
                      <Text style={styles.btnColor}>Continue</Text>
                }
              </TouchableOpacity>


              </KeyboardAvoidingView>

              {/* OR Login With socials  */}
              {/* @ts-ignore:true  */}
              <Text style={styles.ORtext(textMuted)}>OR</Text>

              {/* Social Button view  */}
              <View style={styles.socialsBtnView}>

                  {/* Google  */}
                  {/* @ts-ignore:true  */}
                  <TouchableOpacity style={styles.socialsBtn(borderColor)}>
                    {/* @ts-ignore: true */}
                    <Image source={require('../../assets/images/google.png')} style={styles.socialIcon}/>
                     <Text style={styles.btnText}>Google</Text>
                  </TouchableOpacity>

                  {/* Facebook  */}
                  {/* @ts-ignore:true  */}
                  <TouchableOpacity style={styles.socialsBtn(borderColor)}>
                    {/* @ts-ignore: true */}
                    <Image source={require('../../assets/images/facebook.png')} style={styles.socialIcon}/>
                    <Text style={styles.btnText}>Facebook</Text>
                  </TouchableOpacity>

              </View>

               {/* Register text  */}
              <View  style={styles.registerView}>

                {/* @ts-ignore: true  */}
                <Text style={styles.registerText(textMuted)}>Haven't registered yet?</Text>
                <Link href={"/accounts/register"}><Text style={styles.registerLink}> Register</Text></Link>
              </View>



        </ScrollView>


    </SafeAreaView>
  )
}