import { StyleSheet,Text,View,FlatList,TouchableOpacity,ToastAndroid} from 'react-native'
import { useNavigation,useRouter} from 'expo-router';
import { useEffect,useState,useContext } from "react";
import { Colors } from '@/constants/Colors';
import OptionTravelCard from './../../components/CreateTrip/OptionTravelCard';
import { CreateTripContext } from '../../context/CreateTripContext';
import {selectBudgetOption} from './../../constants/data'
const SelectBudget = () => {
    const navigation = useNavigation();
    const router = useRouter();

    const [selectedOption, setSelectedOption] = useState();

    const { tripData, setTripData } = useContext(CreateTripContext);

    
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);

  useEffect(() => {
    selectedOption&&setTripData({
        ...tripData,
        budget:selectedOption?.title
    })
  }, [selectedOption]);

 const onClickContinue=()=>{
    if(!selectedOption){
        ToastAndroid.show('Select Your Budget',ToastAndroid.LONG)
        return
    }
    router.push('/create-trip/Review-Trip')
 }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget</Text>
      <View style={{marginTop:20}}>
            <Text style={{fontFamily:'Outfit-Bold',fontSize:20}}>Select Your Trip Spending Habit</Text>
            <FlatList
                data={selectBudgetOption}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{marginVertical:10}}
                    onPress={()=>{setSelectedOption(item)}}
                    >
                        <OptionTravelCard option={item} selectedOption={selectedOption}/>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
      </View>
      <TouchableOpacity style={styles.button} onPress={onClickContinue}>
            <Text style={{color:Colors.white,textAlign:'center',fontFamily: 'Outfit-Medium',fontSize:20}}>Contiue</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default SelectBudget

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
    button: {
        backgroundColor:Colors.primary,
        padding: 15,
        borderRadius:15,
        marginTop:20,
        padding:15
    },
})