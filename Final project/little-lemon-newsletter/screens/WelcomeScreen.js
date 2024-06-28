import * as React from 'react';
import { View, Image,StyleSheet, Text,Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
  <View style = {styles.container}>
          <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
          />
          <Text style={styles.title}>Little Lemon, your local Mediterranean Bistro</Text>

          <Pressable  style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
  </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150
  },
  title: {
    marginTop: 16,
    paddingVertical: 20,
    paddingHorizontal:40,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 142,
    height: 250,
    borderRadius: 5,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});
export default WelcomeScreen;
