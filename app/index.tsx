import { Text, View } from "react-native";
import Login from "./../components/Login";
import { auth } from "./../config/FirebaseConfig";
import { Redirect} from "expo-router";

export default function Index() {
  const user = auth.currentUser
  console.log('user',user)
  return (
    <View
      style={{flex: 1}}
    >
       {user ? <Redirect href="/MyTrip" /> : <Login />}
      
    </View>
  );
}
