import React from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';

const About = ({ navigation }) => {
  return <View>
      <Text style={styles.h1}>
          About
      </Text>
      <Button title="Home" onPress={ () => navigation.navigate("Home") }/>
      <Button title="Contact" onPress={ () => navigation.navigate("Contact") }/>
  </View>;
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 30,
        color: '#7159c1',
        fontWeight: 'bold'
    }
});

export default About;