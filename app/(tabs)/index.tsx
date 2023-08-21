import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { removeItem } from '../../utils/asyncStorage';
// Flash message 
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import axios from '../../api/axios';
import { useEffect, useLayoutEffect, useState } from 'react';



export default function TabOneScreen() {

  //Authenticaton
  const { onLogout, authState } = useAuth()

  // Data 
  const [userDetails, setUserDetails] = useState<object>({})


  // Get the logged in user 
  const getLoggedInUser = async () => {

    // Get user details from server 
    try {

      let response = await axios.get('/accounts/check/');
      setUserDetails(response.data);
    } 

    catch (error) {
      console.log(error);
    }



  }




  // Show Flash message
  const showFlashMessage = () =>{


    // Show flash message 
    showMessage({
      message: "Async storage cleared successfully",
      description: "The async storage has been cleared successfully",
      type: "success",
      backgroundColor: "#22c55e", // background color
    });
  }


  // Use effect 
  useLayoutEffect(() => {

    // Get logged in user 
    if(authState.token){
        getLoggedInUser()
    }
  
  }, [authState])
  

 


  return (
    <View style={styles.container}>

      {/* Flash message  */}
      <FlashMessage position="top" style={{marginTop : -40}}/>

        {/* @ts-ignore: true */}
      <Text style={styles.title}>Welcome back, {userDetails.username}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        {/* @ts-ignore : true  */}
      <Text style={{marginBottom:20, fontSize : 16}}>Logged is as <Text style={{ color : "#3b82f6"}}>{userDetails.email}</Text></Text>


      <EditScreenInfo path="app/(tabs)/index.tsx"/>
  

        {/* Button to remove onboarded from async storage  */}
      <TouchableOpacity style={styles.doneButton} onPress={()=> showFlashMessage()}>
            <Text style={{color : "#fff", fontFamily : 'QuicksandSemiBold',}}>Show flash message</Text>
        </TouchableOpacity>


        {/* Logout button  */}
        <TouchableOpacity style={{marginTop:30}} onPress={()=> onLogout()}>
          <Text style={{fontSize : 17, color : "#ef4444"}}>
            <Feather
            name="log-out"
            size={17}
            color={"#ef4444"}
            ></Feather> Logout
          </Text>
        </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  doneButton: {
    paddingVertical: 20,
    paddingHorizontal : 40,
    color: '#fff',
    backgroundColor: '#22c55e',
    borderRadius : 100,
}
});
