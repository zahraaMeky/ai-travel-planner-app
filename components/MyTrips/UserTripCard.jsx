import { StyleSheet, Text, View ,Image} from 'react-native'
import moment from 'moment'
import { Colors } from './../../constants/Colors';


const UserTripCard = ({trip}) => {
    const formateData=(data)=>{
        return JSON.parse(data)
    }
    console.log('trip from UserTripCard',trip)
  return (
    <View style={styles.flexContainer}>
       <Image 
          source={require('./../../assets/images/travel.jpg')} 
          style={styles.image} 
        />
        <View>
            <Text style={styles.paragraph}>
                {trip?.tripPlan?.travel_plan?.destination}
            </Text>
            <Text style={styles.smallPara}>{moment(formateData(trip.tripData).startDate).format("DD MMM YYYY")}</Text>
            <Text style={styles.smallPara}>Travelling: {formateData(trip.tripData).traveler.title}</Text>
        </View>
    </View>
  )
}

export default UserTripCard

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius:15
       
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap:10,
        alignItems:'center',
        marginTop:20
    },
    paragraph: {
        fontFamily: 'Outfit-Medium',
        fontSize: 18,
    },
    smallPara: {
        fontFamily: 'Outfit',
        fontSize: 14,
        color:Colors.gray
    },
})