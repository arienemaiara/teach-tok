import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { ForYou } from '@/screens'

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="ForYou">
        <Tab.Screen name="ForYou" component={ForYou} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
