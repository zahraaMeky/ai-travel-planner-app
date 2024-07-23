import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }}>
      <Tabs.Screen 
        name="MyTrip"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="location-sharp" size={24} color={color} />,
          tabBarLabel: 'My Trip',
        }}
      />
      <Tabs.Screen 
        name="Discover"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="globe" size={24} color={color} />,
          tabBarLabel: 'Discover',
        }}
      />
      <Tabs.Screen 
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="people-circle-outline" size={24} color={color} />,
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
