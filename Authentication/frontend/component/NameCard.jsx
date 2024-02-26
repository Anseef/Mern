import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NameCard = ({ userData }) => {
  if (!userData || !userData.name || !userData.email) {
    return null;
  }

  const { name, email } = userData;

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#333',
  },
});

export default NameCard;