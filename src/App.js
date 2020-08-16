import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View, Text, } from 'react-native';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Contact" component={Contact}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } 
};

const styles = StyleSheet.create({

});