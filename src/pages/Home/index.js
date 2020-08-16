import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

const Home = ({ navigation }) => {
  return <View>
      <Text style={styles.h1}>
          Home
      </Text>
      <Button title="About" onPress={ () => navigation.navigate('About') }/>
      <Button title="Contact" onPress={ () => navigation.navigate('Contact') }/>
  </View>;
}


const styles = StyleSheet.create({
    h1: {
        fontSize: 30,
        color: '#7159c1',
        fontWeight: 'bold'
    }
});

export default Home;