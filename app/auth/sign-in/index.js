import { StyleSheet, Text, TextInput, View,TouchableOpacity,ToastAndroid} from 'react-native';
import { useEffect,useState } from 'react';
import { useNavigation,useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../config/FirebaseConfig";

const SignIn = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  const onSignIn=()=>{
    if(!email&&!password){
      ToastAndroid.show('Please Enter Email & Password',ToastAndroid.LONG)
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      router.replace('/MyTrip')
      console.log('user',user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorMessage',errorMessage)
      if (errorCode === 'auth/invalid-email') {
        ToastAndroid.show('Invalid Email',ToastAndroid.LONG)
      }
      if (errorCode === 'auth/invalid-credential') {
        ToastAndroid.show('Invalid Credential',ToastAndroid.LONG)
      }
    });
  }
  return (
    <View style={styles.mainView}>

      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.paragraph}>Let's get you signed in</Text>
      <Text style={[styles.paragraph,styles.paragraphFirst]}>Welcome Back</Text>
      <Text style={[styles.paragraph,styles.paragraphFirst]}>You've been missed !</Text>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily: 'Outfit'}}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email"
           onChangeText={(value)=>setEmail(value)}
        ></TextInput>
      </View>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily: 'Outfit'}}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Enter Password"
           onChangeText={(value)=>setPassword(value)}
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.button}  onPress={onSignIn}>
        <Text style={{textAlign:'center',color:Colors.white}}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button,styles.buttonInverter]}
       onPress={()=>router.replace('auth/sign-up')}
      >
        <Text style={{textAlign:'center',color:Colors.primary}}>Create Account</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor:Colors.white,
    height:'100%',
    paddingTop: 40,
    padding:25
  },
  paragraph: {
    fontFamily: 'Outfit',
    fontSize: 30,
    marginTop: 30,
  },
  paragraphFirst: {
    color: Colors.gray, 
  },
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.gray,
    fontFamily: 'Outfit',
  },
  button: {
    padding: 20,
    backgroundColor: Colors.primary,
    borderRadius:15,
    marginTop:20
  },
  buttonInverter: {
    backgroundColor: Colors.white,
    borderWidth:1
  },
});
