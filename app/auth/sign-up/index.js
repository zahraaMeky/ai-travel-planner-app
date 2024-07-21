import { StyleSheet, Text, View,TextInput,TouchableOpacity, ToastAndroid } from 'react-native'
import { useNavigation,useRouter } from 'expo-router';
import { useEffect,useState } from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../config/FirebaseConfig";

const SignUP = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");


  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount =()=>{
    if(!email&&!password&&!fullName){
      ToastAndroid.show('Please Enter all details',ToastAndroid.LONG)
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      router.replace('/MyTrip')
      console.log('user',user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorMessage',errorMessage)
    });
  }

  return (
    <View style={styles.mainView}>
      
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Create New Account</Text>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily: 'Outfit'}}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Full Name"
          onChangeText={(value)=>setFullName(value)}
        ></TextInput>
      </View>


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

      <TouchableOpacity style={styles.button}
        onPress={onCreateAccount}
      >
        <Text style={{textAlign:'center',color:Colors.white}}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button,styles.buttonInverter]}
       onPress={()=>router.replace('auth/sign-in')}
      >
        <Text style={{textAlign:'center',color:Colors.primary}}>Sign In</Text>
      </TouchableOpacity>

    </View>
  )
}

export default SignUP

const styles = StyleSheet.create({
  mainView: {
    backgroundColor:Colors.white,
    height:'100%',
    paddingTop: 50,
    padding:25
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 30,
    marginTop:30
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
})