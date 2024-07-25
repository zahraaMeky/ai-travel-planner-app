import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useEffect,useState } from 'react';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection,getDocs,query, where } from "firebase/firestore"; 
import {auth,db} from './../../config/FirebaseConfig'

const MyTrip = () => {
  const [userTrip, setUserTrip] = useState([]);
  const user =auth.currentUser

  useEffect(() => {
    user&&getMyTrip()
  }, [user]);

  const getMyTrip = async()=>{
    const q= query(collection(db,'UserTrip'),where('userEmail','==',user?.email))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

  }


  return (
    <View style={styles.mainView}>

      <View style={styles.flexRowView}>
        <Text style={styles.title}>My Trip</Text>
        <Ionicons name="add-circle-outline" size={50} color="black" />
      </View>

      {
        userTrip?.length==0?
        <StartNewTripCard/>:
        null
      }
    </View>
  )
}

export default MyTrip

const styles = StyleSheet.create({
  mainView: {
    backgroundColor:Colors.white,
    height:'100%',
    paddingTop: 40,
    padding:25
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 30,
    marginTop:30
  },
  flexRowView:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'


  }
})