import { StyleSheet, Text, View, ActivityIndicator,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useEffect, useState } from 'react';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from './../../config/FirebaseConfig';
import UserTripList from './../../components/MyTrips/UserTripList';

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const userEmail =user?.email

  useEffect(() => {
    if (user) {
      getMyTrip();
    }
  }, [user]);

  const getMyTrip = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(collection(db,'UserTrip'), where('userEmail', '==', userEmail));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      setUserTrips((prev) => [...prev, doc.data()]);
      console.log('setUserTrips',userTrips)
    });
    setLoading(false);
  };

  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.flexRowView}>
        <Text style={styles.title}>My Trip</Text>
        <Ionicons name="add-circle-outline" size={50} color="black" />
      </View>
      {loading && <ActivityIndicator size="large" color={Colors.primary} />}
      {userTrips.length === 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips} />}
    </ScrollView>
  );
};

export default MyTrip;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.white,
    height: '100%',
    paddingTop: 40,
    padding: 25,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 30,
    marginTop: 30,
  },
  flexRowView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
