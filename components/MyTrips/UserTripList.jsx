import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import moment from 'moment'
import { Colors } from './../../constants/Colors';
import UserTripCard from './UserTripCard';
import {useRouter } from 'expo-router';

const UserTripList = ({ userTrips }) => {
    const router = useRouter();
    console.log('userTrips from UserTripList',userTrips)
    const latestTrip = JSON.parse(userTrips[0].tripData)
    const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY;
    const photoRef = latestTrip?.locationInfo?.photoRef;

    const imageUrl = photoRef && apiKey 
    ? `https://maps.googleapis.com/maps/api/place/photo?maxheight=400&photoreference=${photoRef}&key=${apiKey}`
    : null;

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {imageUrl?
        <Image 
        source={{ uri: imageUrl }} 
        style={styles.image} 
      />
        :<Image 
          source={require('./../../assets/images/travel.jpg')} 
          style={styles.image} 
        />
      }
        <View style={{marginTop:10}}>
          <Text style={styles.paragraph}>
            {userTrips[0]?.tripPlan?.travel_plan?.destination}
          </Text>
          <View style={styles.flexContainer}>
            <Text style={styles.smallPara}>{moment(latestTrip.startDate).format("DD MMM YYYY")}</Text>
            <Text style={styles.smallPara}> 🚌 {latestTrip.traveler.title}</Text>
          </View>
          <TouchableOpacity style={styles.button}
            onPress={()=>router.push({pathname:'/trip-details',
              params:{trip:JSON.stringify(userTrips[0])}

            })}
            >
          <Text style={{textAlign:'center',color:Colors.white,fontFamily:'Outfit-Medium',fontSize:15}}>See Your Plan</Text>
        </TouchableOpacity>

        </View>
        
        {userTrips.map((trip, index) => (  
          <UserTripCard trip={trip} key={index} />
        ))}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  paragraph: {
    fontFamily: 'Outfit-Medium',
    fontSize: 20,
  },
  smallPara: {
    fontFamily: 'Outfit',
    fontSize: 17,
    color:Colors.gray
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:5
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius:15,
     marginTop:15

  },
});

export default UserTripList;
