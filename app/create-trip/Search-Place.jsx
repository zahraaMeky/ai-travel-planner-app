import { StyleSheet,View,Image,Text} from 'react-native';
import { useNavigation,useRouter } from 'expo-router';
import { useEffect, useContext } from 'react';
import { Colors } from '@/constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { EXPO_PUBLIC_GOOGLE_MAP_API_KEY } from '@env';
import { CreateTripContext } from '../../context/CreateTripContext';

const SearchPlace = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    });
  }, [navigation]);

  useEffect(() => {
    console.log("tripData",tripData)
  }, [tripData]);


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Search Your Destination</Text>

        <GooglePlacesAutocomplete
          placeholder='Search Place'
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(data, details);
            setTripData({
              ...tripData,
              locationInfo: {
                name: data.description,
                coordinate: details?.geometry.location,
                photoRef: details?.photos[0].photo_reference,
                url:details?.url
              },
            });
            router.push('create-trip/Select-Traveler')
          }}
          query={{
            key: EXPO_PUBLIC_GOOGLE_MAP_API_KEY,
            language: 'en',
          }}
          styles={{
            textInputContainer: {
              backgroundColor: Colors.white,
              borderWidth:1,
              borderRadius:15,
              marginTop:25,
              
            },
            
          }}
        />     
    </View>
  );
}

export default SearchPlace;

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
    textAlign:'center',
    marginTop:10
  },
});
