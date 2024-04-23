import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#F4CE14',  }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
