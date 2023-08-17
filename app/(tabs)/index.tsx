import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { removeItem } from '../../utils/asyncStorage';
// Flash message 
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";


export default function TabOneScreen() {


  // Clear async Storage 
  const clearAsyncStorage = () =>{

    // Remove Item from AsyncStorage
    removeItem("onboarded")

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

      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
  

        {/* Button to remove onboarded from async storage  */}
      <TouchableOpacity style={styles.doneButton} onPress={()=> clearAsyncStorage()}>
            <Text style={{color : "#fff", fontFamily : 'QuicksandSemiBold',}}>Clear Async storage</Text>
        </TouchableOpacity>

      <Text style={{ padding : 20, textAlign : 'center'}}>By clearing async storage, you will be able to see the onboarding / accounts screen when next you reload the app</Text>

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
