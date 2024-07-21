import { StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import { useEffect } from 'react';
import { useNavigation,useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

const SignIn = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  return (
    <View style={styles.mainView}>
      <Text style={styles.paragraph}>Let's get you signed in</Text>
      <Text style={[styles.paragraph,styles.paragraphFirst]}>Welcome Back</Text>
      <Text style={[styles.paragraph,styles.paragraphFirst]}>You've been missed !</Text>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily: 'Outfit'}}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email"></TextInput>
      </View>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily: 'Outfit'}}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Enter Password"></TextInput>
      </View>

      <View style={styles.button}>
        <Text style={{textAlign:'center',color:Colors.white}}>Sign In</Text>
      </View>

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
    paddingTop: 80,
    padding:25
  },
  paragraph: {
    fontFamily: 'Outfit',
    fontSize: 30,
    marginTop: 10,
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
