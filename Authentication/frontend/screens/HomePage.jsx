import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NameCard from '../component/NameCard'; // Assuming NameCard is in a separate file

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setIsLoading(true);

      const response = await axios.post('http://192.168.141.188:8888/userData', { token });
      setUserData(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Home!</Text>
      {isLoading ? (
        <Text style={styles.loading}>Loading user data...</Text>
      ) : (
        <>
          {userData && <NameCard userData={userData} />}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loading: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});

export default HomePage;