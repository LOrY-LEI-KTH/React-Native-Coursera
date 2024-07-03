import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require("../assets/little-lemon-logo.png")}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 300,
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#495E57",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});
export default WelcomeScreen;
