import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useContext, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { CreateTripContext } from '../../context/CreateTripContext';
import { Colors } from './../../constants/Colors';
import { AI_PROMPT } from './../../constants/data';
import { chatSession } from './../../config/AiModel';
import { auth, db } from './../../config/FirebaseConfig';
import { setDoc, doc } from 'firebase/firestore'; // Correct Firebase import

const GenerateTrip = () => {
  const user = auth.currentUser;
  const { tripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    generateAiTrip();
  }, []);

  const generateAiTrip = async () => {
    try {
      setLoading(true);
      const FINAL_PROMPT = AI_PROMPT.replace('{location}', tripData?.locationInfo?.name)
        .replace('{totalDay}', tripData?.totalNumOfDays)
        .replace('{totalNight}', tripData?.totalNumOfDays - 1)
        .replace('{traveler}', tripData?.traveler?.title)
        .replace('{budget}', tripData?.budget)
        .replace('{totalDay}', tripData?.totalNumOfDays)
        .replace('{totalNight}', tripData?.totalNumOfDays - 1)

      console.log('FINAL_PROMPT', FINAL_PROMPT);
      const result = await chatSession.sendMessage(FINAL_PROMPT);

      // Assuming the response text is a JSON string
      const tripResponse = JSON.parse(result.response.text());
      console.log(tripResponse);
      setLoading(false);

      // Save generating trip data to Firebase
      const docId = Date.now().toString();
      await setDoc(doc(db, 'UserTrip', docId), {
        userEmail: user.email,
        tripPlan: tripResponse, // AI Generate Result
        tripData: JSON.stringify(tripData), // User Selection data
        docId: docId,
      });

      router.push('/MyTrip');
    } catch (error) {
      console.error('Error generating trip:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Wait .........</Text>
      <Text style={styles.paragraph}>We are working on generating your dream Trip</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={require('./../../assets/images/plane.gif')} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>
      <Text style={styles.paragraph}>Don't go back.</Text>
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
  paragraph: {
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
  paragraphGray: {
    fontFamily: 'Outfit',
    fontSize: 20,
    color: Colors.gray,
    textAlign: 'center',
  },
});
