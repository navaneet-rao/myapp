import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const UserInputBox = ({ placeholders, isPass, handleChange }) => {
  const [InputValue, setInputValue] = React.useState("");
  const [icon, setIcon] = React.useState();
  const handleChangeEvent = (e) => {
    const { text } = e; // Extract the value from the event
    setInputValue(text);
    handleChange(text); // Optionally pass the value to the parent component
  };
  React.useLayoutEffect(() => {
    switch (placeholders) {
      case "Password":
        return setIcon("lock");
      case "Name":
        return setIcon("person");
      case "Email":
        return setIcon("email");
    }
  });
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={icon}
        size={24}
        color={"#FF7E01"}
        style={{ paddingTop: 8 }}
      />
      <TextInput
        value={InputValue}
        placeholder={placeholders}
        secureTextEntry={isPass}
        onChange={handleChangeEvent}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 65,
    margin: 12,
    borderColor: "#f1f1f1",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 18,
    justifyContent: "center",
  },
  input: {
    paddingLeft: 10,
    flex: 1,
  },
});

export default UserInputBox;
