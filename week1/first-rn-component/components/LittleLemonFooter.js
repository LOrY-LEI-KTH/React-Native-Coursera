import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{ flex: 0.05, backgroundColor: '#F4CE14', alignItems:"center", justifyContent:"center" }}>
      <Text
        style={{
          padding: 10,
          fontSize: 15,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
