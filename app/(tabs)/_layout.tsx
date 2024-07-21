import { Tabs } from 'expo-router';
import React from 'react'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="MyTrip"/>
      <Tabs.Screen name="Discover"/>
      <Tabs.Screen name="Profile"/>
    </Tabs>
  )
}

export default TabLayout