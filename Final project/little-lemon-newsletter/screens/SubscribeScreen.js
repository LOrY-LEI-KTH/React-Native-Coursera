import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = React.useState("");

  const isEmailValid = validateEmail(email);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/little-lemon-logo-grey.png")}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo grey"}
      />
      <Text style={styles.title}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={"Type your email"}
      />
      <Pressable
        style={[styles.button, !isEmailValid && styles.disabled]}
        onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
        }}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },

  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    height: 100,
    width: 300,
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#495E57",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  disabled: {
    backgroundColor: "grey",
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});

export default SubscribeScreen;
