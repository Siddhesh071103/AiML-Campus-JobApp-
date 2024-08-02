import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import StartScreen from '../component/StartScreen'
import SearchScreen from '../component/SearchScreen'
import JobDetails from '../component/JobDetails'

const StackNavigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='StartScreen' screenOptions={{ headerShown: false}}>
              <Stack.Screen name='StartScreen' component={StartScreen} />
              <Stack.Screen name='SearchScreen' component={SearchScreen} />
              <Stack.Screen name='JobDetails' component={JobDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})