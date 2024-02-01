import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Calculator from "./Calculator";


const SignIn = ({navigation}) => {
  {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
      console.log("Logging in...");
      if ((email && password) != "") {
        navigation.replace("Calculator");
      } else {
        alert("Please enter your email and password.");
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.SubContainer}>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={require("../..//assets/download.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Your Email"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
          <Text style={styles.text}>Enter password </Text>
          <TextInput
            style={styles.TextInput}
            placeholder="password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={{ fontSize: 20 }}>submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  SubContainer: {
    margin: 14,
  },
  imageView: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 30,
    textAlign: "left",
    paddingLeft: 20,
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 90,
  },
  TextInput: {
    height: 60,
    width: "100%",
    borderColor: "green",
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    height: 50,
    width: "30%",
    alignItems: "center",
    backgroundColor: "#ebae34",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    borderRadius: 5,
  },
});
