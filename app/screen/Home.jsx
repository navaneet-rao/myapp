import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({navigation}) => {
  const handleCalculator = () => {
    console.log("Calculator");
    navigation.navigate("Calculator");
  };
  return (
    <View>
      <Text>Home</Text>
      <View style={styles.body}>
        <TouchableOpacity style={styles.button} onPress={handleCalculator}>
          <Text>Calculator</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 5,
  },
});
