import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

import { router } from 'expo-router';
import { useEffect, useState } from 'react';

import * as SecureStore from 'expo-secure-store';


import { Redirect } from "expo-router";




/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  // Data 
  const [showOnboarding, setShowOnboarding] = useState<boolean|null>(null);

  // Color scheme 
  const colorScheme = useColorScheme();


  // Check if the user is logged in
  const userIsLoggedin = async ()=>{
    const loggedInToken = await SecureStore.getItemAsync("jwt-token")

    // Check for onboarded status on expo secure store
    if(!loggedInToken){
        setShowOnboarding(true); //Show onboarding
      } else {
        setShowOnboarding(false); //Proceed to tab pages
      }
  }

  useEffect(()=>{

    // Check if alreay onboarded 
    userIsLoggedin();

  },[])


  // If not onboarded, then redirect to the onboarding/getstarted screen 
  if(showOnboarding===true){
    return(
      <Redirect href="/accounts/getstarted" />
    )
  }


  // If the user is already onboarded, then show the tabs 
  else if(showOnboarding===false){

    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Tab One',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Tab Two',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
 
          }}
        />
      </Tabs>
    );


  }}