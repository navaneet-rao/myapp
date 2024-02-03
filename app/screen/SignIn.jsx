import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import UserInputBox from "../../components/UserInputBox";

const SignIn = ({ navigation }) => {
  {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
      if ((email && password) != "") {
        console.log("Logging in...");
        navigation.replace("Home");
      } else {
        alert("Please enter your email and password.");
      }
    };
    return (
      <View style={styles.body}>
        <Image
          source={require("../../assets/GFXoPO.jpg")}
          style={{ width: 2000, height: 300 }}
          resizeMode="cover"
        />
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 40, marginBottom: 10 }}>WELCOME</Text>
            <Text style={{ marginBottom: 10 }}>Login to your account</Text>
          </View>
          <UserInputBox
            placeholders={"Email"}
            isPass={false}
            handleChange={() => setEmail()}
          />
          <UserInputBox
            placeholders={"Password"}
            isPass={true}
            handleChange={() => setPassword()}
          />
          <View style={{ marginTop: "10", flexDirection: "row" }}>
            <Text>Don't Have an account!!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{ marginTop: "1", color: "#FF7E01", marginRight: "10" }}
              >
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              backgroundColor: "#FF7E01",
              padding: 5,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              width: "34%",
              height: 60,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default SignIn;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
  },
  container: {
    alignItems: "center",
    borderRadius: 50,
    padding: 20,
    height: "100%",
    marginTop: -50,
    backgroundColor: "#fff",
  },
});
