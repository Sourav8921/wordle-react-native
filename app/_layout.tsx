import { Stack } from "expo-router";
import { useFonts, FrankRuhlLibre_800ExtraBold, FrankRuhlLibre_500Medium, FrankRuhlLibre_900Black } from '@expo-google-fonts/frank-ruhl-libre';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

//load the fonts before hiding the splash screen
SplashScreen.preventAutoHideAsync();

export default function RootLayout () {
  const [fontsLoaded] = useFonts({
    FrankRuhlLibre_800ExtraBold,
    FrankRuhlLibre_500Medium,
    FrankRuhlLibre_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <Stack />;
}
