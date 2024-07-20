import React from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import {useRouter } from 'expo-router';


const Login = () => {
    const router = useRouter();

  return (
    <View>
      <View>
        <Image 
          source={require('./../assets/images/travel.jpg')} 
          style={styles.image} 
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.paragaph}>Effortlessly plan your next adventure with personalized itineraries and AI-driven travel insights.</Text>
        <TouchableOpacity onPress={()=>router.push('auth/sign-in')}
        style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:25
  },
  image: {
    width: '100%',
    height: 520,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 30,
    textAlign:'center',
    marginTop:10
  },
  paragaph: {
    fontFamily: 'Outfit',
    fontSize: 17,
    textAlign:'center',
    color:Colors.gray,
    marginTop:20
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius:99,
    marginTop:'25%'
  },
  buttonText:{
    fontFamily:'Outfit',
    textAlign:'center',
    color:Colors.white,
    fontSize:17
  }
});

export default Login;
