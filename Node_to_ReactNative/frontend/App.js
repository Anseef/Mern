import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";


export default function App() {
  const [dataset, setDataSet] = useState([]);
  const [food, setFood] = useState('');
  const [viewMore, setViewMore] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedMealTime, setSelectedMealTime] = useState('Breakfast');

  const fetchData = async () => {
    try {
      const response = await axios.post("http://192.168.110.188:8000/data", { food });
      setDataSet(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    console.log(dataset);
  }, [dataset]);

  const handleAdd = (foodItem) => {

    const currentDate = new Date().toISOString().split('T')[0];
    setSelectedFoods((selectedFoods) => [
      ...selectedFoods,
      {
        Name: foodItem.Name,
        Calories: foodItem.Calories,
        ServingSize: foodItem.ServingSize,
        Fat: foodItem.Fat,
        SaturatedFat: foodItem.SaturatedFat,
        Protein: foodItem.Protein,
        Sodium: foodItem.Sodium,
        Potassium: foodItem.Potassium,
        Cholesterol: foodItem.Cholesterol,
        Carbohydrates: foodItem.Carbohydrates,
        Fiber: foodItem.Fiber,
        Sugar: foodItem.Sugar,
        MealTime: selectedMealTime,
        Date: currentDate
      }
    ]);
    console.log("Added", foodItem);
  }

  const addSelectedFoodArray = async() => {
    await axios.post("http://192.168.110.188:8000/selected", { selectedFoods })
    .then( response => {
      console.log(response.data);
    })
    .catch( e => {
      console.log(e);
    })
  }

  return (
    <View style={styles.container}>
      <Text>The food details are</Text>
      <View style={{ padding: 10, flexDirection: 'row' }}>
        <Picker
          selectedValue={selectedMealTime}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedMealTime(itemValue)}
        >
          <Picker.Item label="Breakfast" value="Breakfast" />
          <Picker.Item label="Lunch" value="Lunch" />
          <Picker.Item label="Dinner" value="Dinner" />
        </Picker>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Enter a food"
          onChangeText={(text) => {
            setFood(text)
          }}
        />
        <Button
          onPress={fetchData}
          title="Search"
        />
      </View>

      {/* Add food item */}
      <View>
        {viewMore ? (
          <View>
            <ScrollView style={{ height: 400,width: 600 }}>
              {dataset.map((foodItem, index) => (
                <View style = {[ styles.foodItemContainer,{flexDirection : 'row', justifyContent: 'space-between',alignItems: 'center', padding: 15 }]}>
                  
                  <View key={index}>
                    <Text>Name: {foodItem.Name}</Text>
                    <Text>Calories: {foodItem.Calories}</Text>
                    <Text>ServingSize: {foodItem.ServingSize}</Text>
                    <Text>Fat: {foodItem.Fat}</Text>
                    <Text>Protein: {foodItem.Protein}</Text>
                    <Text>Sodium: {foodItem.Sodium}</Text>
                    <Text>Pottasium: {foodItem.Pottasium}</Text>
                    <Text>Cholesterol: {foodItem.Cholesterol}</Text>
                    <Text>Fiber: {foodItem.Fiber}</Text>
                    <Text>Sugar: {foodItem.Sugar}</Text>
                  </View>

                  <Button 
                    onPress={() => handleAdd(foodItem)}
                    title = "Add" 
                  />
                </View>
              ))}
              <Button
                onPress={() => setViewMore(false)}
                title="View Less"
              />
            </ScrollView>

            <Button onPress={ addSelectedFoodArray } title = "Done"/>

          </View>
        ) : (
          <Button
            onPress={() => setViewMore(true)}
            title="View More"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  foodItemContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});
