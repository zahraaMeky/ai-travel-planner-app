import { StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';
import { useNavigation,Link} from 'expo-router';
import { Colors } from '@/constants/Colors';
import { selectTravelersList } from './../../constants/data';
import { useEffect,useState,useContext } from "react";
import OptionTravelCard from './../../components/CreateTrip/OptionTravelCard';
import { CreateTripContext } from '../../context/CreateTripContext';

const SelectTraveler = () => {
  const navigation = useNavigation();
  const [selectedTravels, setSelectedTravels] = useState("");
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);

  useEffect(() => {
    setTripData({...tripData,
      traveler:selectedTravels
    })
  }, [selectedTravels]);

  useEffect(() => {
    console.log("tripData",tripData)
  }, [tripData]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who's traveling?</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.subTitle}>Choose Your Travelers</Text>
        <FlatList
          data={selectTravelersList}
          renderItem={({ item }) => (
            <TouchableOpacity style={{marginVertical:10}}
            onPress={()=>{setSelectedTravels(item)}}
            >
              <OptionTravelCard option={item} selectedOption={selectedTravels}/>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
  
      <TouchableOpacity style={styles.button}>
        <Link href="/create-trip/Select-Dates" style={{textAlign:'center'}}>
            <Text style={{color:Colors.white,textAlign:'center',fontFamily: 'Outfit-Medium',fontSize:20}}>Contiue</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default SelectTraveler;

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
  subTitle: {
    fontFamily: 'Outfit-Bold',
    fontSize: 23,
  },
  button: {
    backgroundColor:Colors.primary,
    padding: 15,
    borderRadius:15,
    marginTop:20,
    padding:15
  },
});
