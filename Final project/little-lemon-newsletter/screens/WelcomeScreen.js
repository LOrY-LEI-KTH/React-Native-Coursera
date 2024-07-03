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

          <Pressable  style={styles.button} 
              onPress={() => {navigation.navigate("Subscribe");}}>
            <Text style={styles.buttonText}>Newsletter</Text>
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
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
export default WelcomeScreen;
