import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { ForYou } from '@/screens'
import TabBar from '@/components/navigation/TabBar'
import Header from '@/components/navigation/Header'

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ForYou"
        tabBar={props => <TabBar {...props} />}
        screenOptions={{ header: props => <Header {...props} /> }}>
        <Tab.Screen
          name="ForYou"
          component={ForYou}
          options={{ title: 'For You' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
