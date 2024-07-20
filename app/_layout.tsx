import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
export default function RootLayout() {
  useFonts({
    'Outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
