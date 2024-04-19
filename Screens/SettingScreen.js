// screens/SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SettingScreen({ navigation }) {
  const [city, setCity] = useState('calgary'); // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=16350cbd2ec34fe28e7175821241804&q=${city}&days=7&aqi=no&alerts=no`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setWeatherData(json.current);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        setError('Failed to fetch weather data. Please try again later.');
        console.error('Error fetching weather data:', error);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]); // Fetch data whenever city changes

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherData();
    } else {
      Alert.alert('City name cannot be empty');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Forecast</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={(text) => setCity(text)}
        placeholder="Enter city name"
        onSubmitEditing={handleSearch}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Temperature in Celsius: {weatherData.temp_c} </Text>
          <Text style={styles.weatherText2}>Feels like in C: {weatherData.feelslike_c}</Text>
          <Text style={styles.weatherText}>Temperature in Fahrenheit: {weatherData.temp_f}</Text>
          <Text style={styles.weatherText2}>Feels like in F: {weatherData.feelslike_f}</Text>
          {weatherData.condition && (
            <Image source={{ uri: `https:${weatherData.condition.icon}` }} style={styles.image} />
          )}
        </View>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.settingsButton}>
        <Text style={styles.settingsText}>Home</Text>
      </TouchableOpacity>
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
  input: {
    width: '80%',
    height: 55,
    padding: 10,
    fontSize: 25,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  weatherContainer: {
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
    height: 45,
    padding: 20,
    fontWeight: 'bold',
  },
  weatherText2: {
    fontSize: 18,
    marginBottom: 10,
    height: 45,
    padding: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 15,
  },
  settingsButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'purple',
    borderRadius: 6,
    
  },
  settingsText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
