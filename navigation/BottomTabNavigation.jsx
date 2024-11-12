import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator> 
        <Tab.Screen name="Home" component={Home} />

    </Tab.Navigator>
  )
}

export default BottomTabNavigation