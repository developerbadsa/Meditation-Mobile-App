import {  StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Bismillahir Rahmanir Rahim
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    // paddingStart: 100
  },
  body: {
     backgroundColor: 'red',
     flex: 1,
    paddingTop: 100,
    justifyContent: 'center'
  }
});
