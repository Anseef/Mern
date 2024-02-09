import React from 'react';
import { View, StyleSheet, Pressable,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const foodName = 'Appam';

  return (
    <View style={styles.container}>
      <Text>this is HomeScreen</Text>
      <Pressable
        onPress={() =>
          navigation.navigate('FoodDetails', { foodName })
        }
      >
        <Text style ={{ backgroundColor: 'blue', padding: 15,}}>Food Page</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});
export default HomeScreen;