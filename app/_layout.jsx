import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import {CreateTripContext} from '@/context/CreateTripContext'
import {useState} from "react";

export default function RootLayout() {
  const [tripData,setTripData] = useState([]);

  useFonts({
    'Outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <CreateTripContext.Provider value={{tripData,setTripData}}>

    <Stack screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="index" options={{headerShown:false}}/> */}
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </CreateTripContext.Provider>
  );
}
