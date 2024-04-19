// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import SettingScreen from './Screens/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Stack = createStackNavigator();

export default function App() {
  return (
  
<NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      tabBarLabelPosition: 'below-icon',
      tabBarShowLabel: true,
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'red',
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: () => (<Ionicons name='home' size={20} />)
      }}
    />

    <Stack.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color }) => (<Ionicons name='edit' size={20} color={color} />)
      }}
    />
  </Stack.Navigator>
</NavigationContainer>
  );
}



const styles = StyleSheet.create({}) 

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
 
export default function App() {
  const [FeelsLikeC, setFeelsLikeC] = useState([]);
  const [FeelsLikeF, setFeelsLikeF] = useState([]);
  const [TempF, setTempF] = useState([]);
  const [TempC, setTempC] = useState([]);
  const [currentIcon, setCurrentIcon] = useState([])
  const test = 'https:'+currentIcon;
  useEffect(
    () => {
      fetch('http://api.weatherapi.com/v1/current.json?key=84c26bbdf78146c48b305203232011&q=calgary&aqi=no')
        .then(response => response.json())
        .then((json) => {
          setTempC(json.current.temp_c);
          setFeelsLikeC(json.current.feelslike_c);
          setFeelsLikeF(json.current.feelslike_f)
          setTempF(json.current.temp_f)
          setCurrentIcon(json.current.condition.icon)
          console.log(json.current.condition.icon)
        })
    }
  )
  //cdn.weatherapi.com/weather/64x64/day/122.png
  return (
<View style={styles.container}>
<Text>Open up App.js to start working on your app!</Text>
<Text>Feels Like in C: {FeelsLikeC}</Text>
<Text>Feels Like in F:{FeelsLikeF}</Text>
<Text>Current Temp in F: {TempF}</Text>
<Text>Current Temp in C:{TempC}</Text>
<Text>https:{currentIcon}</Text>
 
      <Image source={{ uri: test }} style={styles.image} />
<StatusBar style="auto" />
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 64,
    width: 64,
  }
});

*/