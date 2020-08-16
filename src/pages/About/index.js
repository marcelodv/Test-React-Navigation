import React from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';

const About = ({ navigation }) => {
  return <View>
      <Text>
          About
      </Text>
      <Button title="Contact" onPress={ () => navigation.navigate("Contact")}/>
  </View>;
}

export default About;