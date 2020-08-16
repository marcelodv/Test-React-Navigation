import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Contact = ({ navigation }) => {
  return <View>
      <Text style={styles.h1}>
          Contact
      </Text>
      <Button title="Home" onPress={ () => navigation.navigate("Home") }/>
      <Button title="About" onPress={ () => navigation.navigate("About") }/>
  </View>;
}

const styles = StyleSheet.create({
  h1: {
      fontSize: 30,
      color: '#7159c1',
      fontWeight: 'bold'
  }
});

export default Contact;