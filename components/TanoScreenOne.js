import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default class TanoScreenOne extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ImageBackground
          source={require('../assets/tano.jpg')}
          style={styles.backgroundImage}
          imageStyle={{ opacity: 0.3 }}>
          <Text style={styles.baseText}>
            <Text style={styles.logoTitle}>Tano</Text>
          </Text>

          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.signupBtn}
              onPress={() => Alert.alert('Simple Button pressed')}>
              <Text style={styles.signupText}> SIGN UP </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => Alert.alert('Simple Button pressed')}>
              <Text style={styles.loginText}> LOGIN </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FF8787',
  },
  baseText: {
    textAlign: 'center',
    marginTop: 160,
  },
  logoTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 80,
    color: '#FFFFFF',
  },
  buttonView: {
    marginTop: 120,
    marginRight: 50,
    marginLeft: 50,
  },
  signupBtn: {
    backgroundColor: 'none',
    padding: 12,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginBtn: {
    backgroundColor: '#8E3FC3',
    padding: 12,
    borderRadius: 20,
    borderColor: '#8E3FC3',
    borderWidth: 1,
    alignItems: 'center',
  },
  signupText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
