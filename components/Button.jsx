import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ color, text, size = "normal", onPress }) => {
  const buttonStyles = [styles.button];
  switch (size) {
    case "double":
      buttonStyles.push(styles.buttonDouble);
      break;
    case "triple":
      buttonStyles.push(styles.buttonTriple);
      break;
    default:
      break;
  }

  switch (color) {
    case "1":
      buttonStyles.push(styles.buttonColor1);
      break;
    case "2":
      buttonStyles.push(styles.buttonColor2);
      break;
    case "3":
      buttonStyles.push(styles.buttonColor3);
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    width: "22%",
    height: 90,
  },
  buttonDouble: {
    width: "30.5%",
  },
  buttonTriple: {
    width: "47%",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#212121",
  },
  buttonColor1: {
    backgroundColor: "#03a9f4",
  },
  buttonColor2: {
    backgroundColor: "#cddc39",
  },
  buttonColor3: {
    backgroundColor: "#b388ff",
  },
});

export default Button;
