import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { removeItem } from '../../utils/asyncStorage';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
  

        {/* Button to remove onboarded from async storage  */}
      <TouchableOpacity style={styles.doneButton} onPress={()=> removeItem("onboarded")}>
            <Text style={{color : "#fff", fontWeight : '700'}}>Clear Async storage</Text>
        </TouchableOpacity>

      <Text>By clearing async storage, you will be able to see the onboarding screen again</Text>

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
