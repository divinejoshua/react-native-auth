import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),

    // NunitoSans
    NunitoSans: require('../assets/fonts/NunitoSans-Regular.ttf'),
    NunitoSansBold: require('../assets/fonts/NunitoSans-Bold.ttf'),

    //Quicksand
    Quicksand: require('../assets/fonts/Quicksand-Regular.ttf'),
    QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
    QuicksandLight: require('../assets/fonts/Quicksand-Light.ttf'),
    QuicksandSemiBold: require('../assets/fonts/Quicksand-SemiBold.ttf'),
    QuicksandMedium: require('../assets/fonts/Quicksand-Medium.ttf'),

    
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />

        {/* Accounts  */}
        <Stack.Screen name="accounts/getstarted" options={{ headerShown: false }} />
        <Stack.Screen name="accounts/onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="accounts/login" />
        <Stack.Screen name="accounts/register" />
      </Stack>
    </ThemeProvider>
  );
}
