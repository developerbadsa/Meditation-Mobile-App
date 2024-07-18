import {  StyleSheet, Text, View } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Bismillahir Rahmanir Rahim,, allahu akbar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    // paddingStart: 100
  },
  body: {
     backgroundColor: 'green',
     flex: 1,
    paddingTop: 100,
    justifyContent: 'center'
  }
});
