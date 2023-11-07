import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Rotas
import Post from '../screens/post/Post';
import Home from '../screens/home/Home';
import Usuario from '../screens/usuario/Usuario';



const Stack = createStackNavigator();

export default function Router() {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Post' component={Post} />
        <Stack.Screen name='Usuario' component={Usuario} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})