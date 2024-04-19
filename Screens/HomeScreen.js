/*import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';




export default function HomeScreen({navigation}) {




  const [FeelsLikeC, setFeelsLikeC] = useState(null);
  const [FeelsLikeF, setFeelsLikeF] = useState(null);
  const [TempC, setTempC] = useState(null);
  const [TempF, setTempF] = useState(null);
  const [currentIcon, setCurrentIcon] = useState(null); 
  const test = 'https:' + currentIcon;

  useEffect(() => { 
    fetch('http://api.weatherapi.com/v1/forecast.json?key=16350cbd2ec34fe28e7175821241804&q=calgary&days=7&aqi=no&alerts=no')
    .then((response) => response.json())
    .then((json) => {
      setTempC(json.current.temp_c);
      setFeelsLikeC(json.current.feelslike_c);
      setFeelsLikeF(json.current.feelslike_f);
      setTempF(json.current.temp_f);
      setCurrentIcon(json.current.condition.icon);
    });
  }, []);

  return (
   
 
    <View style={styles.container}>
      <Text style={styles.title}>Weather forecast</Text>
      <View style={styles.weatherContainer}>
        <Text style={styles.weatherText}>Temp in C: {TempC}</Text>
        <Text style={styles.weatherText}>Temp in F: {TempF}</Text>
        <Text style={styles.weatherText}>Feels like in C: {FeelsLikeC}</Text>
        <Text style={styles.weatherText}>Feels like in F: {FeelsLikeF}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={styles.settingsButton}>
        <Text style={styles.settingsText}>Temperature in calgary</Text>
      </TouchableOpacity>
        {currentIcon && <Image source={{ uri: test }} style={styles.image} />}
      </View>
      <StatusBar style="auto" />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weatherContainer: {
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
}); */

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [FeelsLikeC, setFeelsLikeC] = useState(null);
  const [FeelsLikeF, setFeelsLikeF] = useState(null);
  const [TempC, setTempC] = useState(null);
  const [TempF, setTempF] = useState(null);
  const [currentIcon, setCurrentIcon] = useState(null);
  const [unit, setUnit] = useState('C');
  const test = 'https:' + currentIcon;

  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=16350cbd2ec34fe28e7175821241804&q=calgary&days=7&aqi=no&alerts=no')
      .then((response) => response.json())
      .then((json) => {
        setTempC(json.current.temp_c);
        setFeelsLikeC(json.current.feelslike_c);
        setFeelsLikeF(json.current.feelslike_f);
        setTempF(json.current.temp_f);
        setCurrentIcon(json.current.condition.icon);
      });
  }, []);

  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather forecast</Text>
      <Text style={styles.title2}>calgary Today</Text>
      <View style={styles.weatherContainer}>
        <Text style={styles.weatherText}>Temp in {unit}: {unit === 'C' ? TempC : TempF}</Text>
        <Text style={styles.weatherText}>Feels like in {unit}: {unit === 'C' ? FeelsLikeC : FeelsLikeF}</Text>
        <TouchableOpacity onPress={toggleUnit} style={styles.settingsButton}>
          <Text style={styles.settingsText}>Change the unit ({unit === 'C' ? 'F' : 'C'})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={styles.settingsButton}>
          <Text style={styles.settingsText}>Find weather in your desired city</Text>
        </TouchableOpacity>
        {currentIcon && <Image source={{ uri: test }} style={styles.image} />}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'light purple',
  },
  weatherContainer: {
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  settingsButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  settingsText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
});

