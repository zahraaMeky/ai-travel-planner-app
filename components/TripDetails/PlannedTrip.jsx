import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

// Define how each activity should be rendered
const renderActivity = ({ item }) => (
  <View style={styles.activity}>
    <Text style={styles.activityTitle}>{item.activity}</Text>
    <Text>Time: {item.time} ({item.time_to_spend})</Text>
    <Text>Details: {item.details}</Text>
    <Text>Best Time to Visit: {item.best_time_to_visit}</Text>
  </View>
);

const PlannedTrip = ({ details }) => {
  console.log("details from plan trip", details);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏕️ Plan Details</Text>
      {Object.entries(details).map(([day, activities], index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>{day.charAt(0).toUpperCase() + day.slice(1)}</Text>
          <FlatList
            data={activities}
            renderItem={renderActivity}
            keyExtractor={(item, index) => `${day}-${index}`}
          />
        </View>
      ))}
    </View>
  );
};

export default PlannedTrip;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  activity: {
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
