import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { ProductsList } from "./ProductsList";

const Home = ({ navigation }) => {
  const handleCalculator = () => {
    console.log("Calculator");
    navigation.navigate("Calculator");
  };
  const handleProduct = () => {
    console.log("Product");
    navigation.navigate("ProductsList");
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>My Collections</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.button} onPress={handleCalculator}>
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleProduct}>
          <Text style={styles.buttonText}>Task 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    backgroundColor: "#FFFFEC",
    height: "1000%",
  },
  container: {
    alignItems: "center",
    padding: 10,
  },
  body: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#C6A969",
    padding: 20,
    borderRadius: 5,
    width: "40%",
    margin: 10,
  },
  buttonText: {
    color: "black",
    alignSelf: "center",
    fontSize: 20,
  },
});
