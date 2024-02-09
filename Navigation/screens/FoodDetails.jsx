import React from 'react';
import { View, StyleSheet, Pressable,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodDetails = ({ route }) => {
  const navigation = useNavigation();
  const { foodName } = route.params;

  return (
    <View style={ { backgroundColor: 'Green'}}>
      <Text> { foodName }</Text>
      <Pressable
        onPress={() =>
          navigation.navigate('Essentia')
        }
      >
        <Text>Back to Home</Text>
      </Pressable>
    </View>
  );
};

export default FoodDetails;
