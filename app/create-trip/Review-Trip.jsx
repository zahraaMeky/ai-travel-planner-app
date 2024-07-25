import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useNavigation,useRouter} from 'expo-router';
import { useEffect,useState,useContext } from "react";
import { Entypo } from '@expo/vector-icons';
import { CreateTripContext } from '../../context/CreateTripContext';
import { Colors } from './../../constants/Colors';
import moment from 'moment'

const ReviewTrip = () => {
    const navigation = useNavigation();
    const router = useRouter();


    const { tripData, setTripData } = useContext(CreateTripContext);


    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
        });
      }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Trip</Text>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily:'Outfit-Bold',fontSize:20}}>Please review your selection before generating your trip.</Text>
        
        {/* Destination View */}
        <View style={[styles.flex, { marginTop: 20 }]}>
            <Text>📍</Text>
            <View>
                <Text style={{fontFamily:'Outfit',fontSize:20,color:Colors.gray}}>Destination</Text>
                <Text style={{fontFamily:'Outfit-Medium',fontSize:20}}>{tripData?.locationInfo?.name}</Text>
            </View>
        </View>

         {/* Calender travel Date View */}
         <View style={styles.flex}>
            <Text>📅</Text>
            <View>
                <Text style={{fontFamily:'Outfit',fontSize:20,color:Colors.gray}}>travel Date </Text>
                <Text style={{fontFamily: 'Outfit-Medium', fontSize: 20}}>
                    {moment(tripData?.startDate).format('DD MMM') + " TO " +
                    moment(tripData?.endDate).format('DD MMM') + " (" + tripData?.totalNumOfDays + " Days)"}
                </Text>

            </View>
        </View>

        {/* Count travel  View */}
        <View style={styles.flex}>
            <Text>👥</Text>
            <View>
                <Text style={{fontFamily:'Outfit',fontSize:20,color:Colors.gray}}>Who is traveling </Text>
                <Text style={{fontFamily: 'Outfit-Medium', fontSize: 20}}>{tripData?.traveler?.title}</Text>

            </View>
        </View>

          {/* Budget travel  View */}
          <View style={styles.flex}>
            <Text>💰</Text>
            <View>
                <Text style={{fontFamily:'Outfit',fontSize:20,color:Colors.gray}}>Who is traveling </Text>
                <Text style={{fontFamily: 'Outfit-Medium', fontSize: 20}}>{tripData?.budget}</Text>

            </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button}
      onPress={()=>router.replace('/create-trip/Generate-Trip')} 
      >
            <Text style={{color:Colors.white,textAlign:'center',fontFamily: 'Outfit-Medium',fontSize:20}}>Build My Trip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ReviewTrip

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingTop: 85,
        padding: 25,
        height: '100%',
      },
    title: {
        fontFamily: 'Outfit-Bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10,
      },
    flex:{
        display:'flex',
        flexDirection:'row',
        gap:20,
        marginTop:20
    },
    button: {
        backgroundColor:Colors.primary,
        padding: 15,
        borderRadius:15,
        marginTop:40,
        padding:15
    },
})