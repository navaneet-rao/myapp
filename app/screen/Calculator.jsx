import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Row from "../../components/Row";
import Button from "../../components/Button";

const Calculator = () => {
  const [displayValue, setDisplayValue] = React.useState("0");
  const [operator, setOperator] = React.useState(null);
  const [firstValue, setFirstValue] = React.useState("");

  const handleNumberInput = (num) => {
    if (displayValue === "0") {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          result = "Error";
        } else {
          result = num1 / num2;
        }
        break;
      case "%":
        if (num2 === 0) {
          result = "Error";
        } else {
          result = num1 % num2;
        }
        break;
        break;
      default:
        result = displayValue;
    }

    setDisplayValue(result.toString());
    console.log(num1, operator, num2, "=", result);
    setOperator(null);
    setFirstValue("");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.RowContainer}>
        {/* <Row>
          <Button text="C" size="triple" />
        </Row> */}
        <Row>
          <Button color="1" text="C" size="double" onPress={handleClear} />
          <Button
            color="1"
            text="%"
            size="double"
            onPress={() => handleOperatorInput("%")}
          />
          <Button
            color="1"
            text="/"
            size="double"
            onPress={() => handleOperatorInput("/")}
          />
        </Row>
        <Row>
          <Button text="7" onPress={() => handleNumberInput(7)} />
          <Button text="8" onPress={() => handleNumberInput(8)} />
          <Button text="9" onPress={() => handleNumberInput(9)} />
          <Button color="2" text="*" onPress={() => handleOperatorInput("*")} />
        </Row>
        <Row>
          <Button text="4" onPress={() => handleNumberInput(4)} />
          <Button text="5" onPress={() => handleNumberInput(5)} />
          <Button text="6" onPress={() => handleNumberInput(6)} />
          <Button color="2" text="-" onPress={() => handleOperatorInput("-")} />
        </Row>
        <Row>
          <Button text="1" onPress={() => handleNumberInput(1)} />
          <Button text="2" onPress={() => handleNumberInput(2)} />
          <Button text="3" onPress={() => handleNumberInput(3)} />
          <Button color="2" text="+" onPress={() => handleOperatorInput("+")} />
        </Row>
        <Row>
          <Button
            color="3"
            text="0"
            size="triple"
            onPress={() => handleNumberInput(0)}
          />
          <Button text="." color="." onPress={() => handleNumberInput(".")} />
          <Button text="=" onPress={handleEqual} color="=" />
        </Row>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#e3f2fd",
    backgroundColor: "#FFFFEC",
    alignItems: "stretch",
    justifyContent: "flex-end",
    padding: 20,
  },
  displayContainer: {
    // backgroundColor: "#80d8ff",
    // backgroundColor: "#F1E4C3",
    backgroundColor: "#dee6a3",
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "right",
  },
  RowContainer: {
    marginBottom: 20,
  },
});
