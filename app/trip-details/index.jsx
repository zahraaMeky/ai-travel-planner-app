import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';

const Index = () => {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);

  const formatData = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error parsing data:', error);
      return null;
    }
  };

  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });

    if (trip) {
      const parsedTrip = formatData(trip);
      setTripDetails(parsedTrip);
    }
  }, [trip]);

  if (!tripDetails) return null;

  const tripData = formatData(tripDetails?.tripData);
  const photoRef = tripData?.locationInfo?.photoRef;

  const imageUrl = photoRef && apiKey 
    ? `https://maps.googleapis.com/maps/api/place/photo?maxheight=400&photoreference=${photoRef}&key=${apiKey}`
    : null;

  const flights = tripDetails?.tripPlan?.travel_plan?.flights || [];

  return (
    <View>
      {imageUrl ? (
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.image} 
        />
      ) : (
        <Image 
          source={require('./../../assets/images/travel.jpg')} 
          style={styles.image} 
        />
      )}
      <View style={styles.container}>
        <Text style={styles.title}>
          {tripDetails.tripPlan?.travel_plan?.destination}
        </Text>
        <View style={styles.flexBox}>
          <Text style={styles.smallPara}>
            {moment(tripData?.startDate).format("DD MMM YYYY")}
          </Text>
          <Text style={styles.smallPara}>
            - {moment(tripData?.endDate).format("DD MMM YYYY")}
          </Text>
        </View>
        <Text style={styles.smallPara}>
          🚌 {tripData?.traveler?.title}
        </Text>

        {/* Flight Info */}
        <FlightInfo flightData={flights} />
      </View>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 330,
  },
  container: {
    padding: 15,
    backgroundColor: Colors.white,
    height: '100%',
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 25,
  },
  smallPara: {
    fontFamily: 'Outfit',
    fontSize: 18,
    color: Colors.gray,
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 5,
  },
});
