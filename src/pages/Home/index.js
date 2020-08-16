import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

const Home = ({ navigation }) => {
  return <View>
      <Text>
          Home
      </Text>
      <Button title="About" onPress={ () => navigation.navigate('About') }/>
      <Button title="Contact" onPress={ () => navigation.navigate('Contact') }/>
  </View>;
}

export default Home;