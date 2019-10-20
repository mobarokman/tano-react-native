import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TanoScreenOne from './components/TanoScreenOne';
import Login from './components/Login';

export default class App extends React.Component {
  render() {
    return (
      <View >
      
        <TanoScreenOne />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
