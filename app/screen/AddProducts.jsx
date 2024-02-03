import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { FIREBASE_DB } from "../../config/FirebaseConfig";
import * as ImagePicker from "expo-image-picker";
import ProductInputBox from "../../components/ProductInputBox";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const AddProducts = () => {
  const [productName, setProductName] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [productDescription, setProductDescription] = React.useState("");
  const [productImage, setProductImage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const firebase_db = FIREBASE_DB;
  console.log(productName, productPrice, productDescription, productImage);
  const productData = {
    Name: productName,
    Price: productPrice,
    Description: productDescription,
    Image: productImage,
  };
  const handleAddProject = async () => {
    setLoading(true);
    try {
      //   console.log(productData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.body}>
      <View style={styles.bodyText}>
        <Text style={{ fontSize: 30 }}>Add Product</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
      </View>
      <ProductInputBox
        placeholders={"Product Name"}
        handleChange={(text) => setProductName(text)}
      />
      <ProductInputBox
        placeholders={"Product Price"}
        handleChange={(text) => setProductPrice(text)}
      />
      <ProductInputBox
        placeholders={"Product Description"}
        handleChange={(text) => setProductDescription(text)}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity
          title="Add Product"
          onPress={handleAddProject}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddProducts;

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
  },
  bodyText: {
    alignItems: "center",
    marginTop: 60,
    paddingBottom: 60,
  },
  button: {
    backgroundColor: "#FF7E01",
    padding: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "45%",
    height: 70,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
