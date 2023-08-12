import AsyncStorage from '@react-native-async-storage/async-storage';


// Set the item to async storage 
export const setItem = async (key : string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Error storing value: ', error);
  }
};


// Get the item from async storage 
export const getItem = async (key : string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log('Error retrieving value: ', error);
    }
};


// Delete the Item from async storage 
export const removeItem = async (key : string) =>{
    try {
        await AsyncStorage.removeItem(key);
      } catch (error) {
        console.log('Error deleting value: ', error);
      }
}