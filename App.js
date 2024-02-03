import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Calculator from "./app/screen/Calculator";
import Home from "./app/screen/Home";
import SignIn from "./app/screen/SignIn";
import { ProductsList } from "./app/screen/ProductsList";
import { ProductDetails } from "./app/screen/ProductDetails";
import AddProducts from "./app/screen/AddProducts";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AddProducts" component={AddProducts} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
