import { StyleSheet, Text, View, Image } from 'react-native';
import { CreateTripContext } from '../../context/CreateTripContext';
import { Colors } from './../../constants/Colors';
import { useEffect, useContext} from 'react';
import { AI_PROMPT } from './../../constants/data';
import {chatSession} from './../../config/AiModel'
import { useNavigation,useRouter } from 'expo-router';
const GenerateTrip = () => {
  const { tripData } = useContext(CreateTripContext);
  const [loading,setLoading] = useState(false);
  const router = useRouter();


  useEffect(() => {
    if (tripData) {
      generateAiTrip();
    }
  }, [tripData]);

  const generateAiTrip =async () => {
    setLoading(true)
    const FINAL_PROMPT = AI_PROMPT.replace('{location}', tripData?.locationInfo?.name)
      .replace('{totalDay}', tripData?.totalNumOfDays)
      .replace('{totalNight}', tripData?.totalNumOfDays - 1)
      .replace('{traveler}', tripData?.traveler?.title)
      .replace('{budget}', tripData?.budget);
    console.log('FINAL_PROMPT', FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    setLoading(false)
    router.push('(tabs)/MyTrip')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Wait .........</Text>
      <Text style={styles.pragraph}>We are working on generating your dream Trip</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={require('./../../assets/images/plane.gif')} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>
      <Text style={styles.pragraph}>Don't go back.</Text>
    </View>
  );
};

export default GenerateTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 85,
    padding: 25,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  pragraph: {
    fontFamily: 'Outfit-Medium',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: 200,
  },
  pragraphGray: {
    fontFamily: 'Outfit',
    fontSize: 20,
    color: Colors.gray,
    textAlign: 'center',
  }
});
