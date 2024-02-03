import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const ProductInputBox = ({ handleChange, placeholders }) => {
  const [InputValue, setInputValue] = React.useState("");

  const handleChangeEvent = (text) => {
    setInputValue(text);
    handleChange(text);// Optionally pass the value to the parent component
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={InputValue}
        placeholder={placeholders}
        onChange={handleChangeEvent} // Use onChangeText instead of onChange
        style={styles.input}
      />
    </View>
  );
};

export default ProductInputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
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
