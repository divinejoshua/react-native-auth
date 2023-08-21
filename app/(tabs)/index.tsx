import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { removeItem } from '../../utils/asyncStorage';
// Flash message 
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import { Feather } from '@expo/vector-icons';


export default function TabOneScreen() {


  // Clear async Storage 
  const showFlashMessage = () =>{


    // Show flash message 
    showMessage({
      message: "Async storage cleared successfully",
      description: "The async storage has been cleared successfully",
      type: "success",
      backgroundColor: "#22c55e", // background color
    });
  }

 


  return (
    <View style={styles.container}>

      {/* Flash message  */}
      <FlashMessage position="top" style={{marginTop : -40}}/>

      <Text style={styles.title}>Welcome back Divine</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text style={{marginBottom:20, fontSize : 16}}>Logged is as <Text style={{ color : "#3b82f6"}}>divine@email.com</Text></Text>


      <EditScreenInfo path="app/(tabs)/index.tsx"/>
  

        {/* Button to remove onboarded from async storage  */}
      <TouchableOpacity style={styles.doneButton} onPress={()=> showFlashMessage()}>
            <Text style={{color : "#fff", fontFamily : 'QuicksandSemiBold',}}>Show flash message</Text>
        </TouchableOpacity>


        {/* Logout button  */}
        <TouchableOpacity style={{marginTop:30}}>
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
