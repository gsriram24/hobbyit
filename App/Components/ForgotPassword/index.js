/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from './style.js'
import firebase from 'react-native-firebase'

export default class ForgotPassword extends Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
      };
  }

  onResetPasswordPress = () => {
      firebase.auth().sendPasswordResetEmail(this.state.email)
          .then(() => {
              Alert.alert("Password reset email has been sent.");
          }, (error) => {
              Alert.alert(error.message);
          });
  }
  render() {
    return (
    <LinearGradient style = {styles.body} colors= {['#60c3ff','#5574f7']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}  locations={[0.0, 0.99]}>
      <View style={styles.signInContainer}>
        <Text style = {styles.signInText}>Reset Password</Text>
      </View>
      <View style = {styles.detailsContainer}>
        <TextInput style={styles.loginInput} autoCapitalize = 'none' placeholder = {'E-Mail'} placeholderTextColor={'#ffffff'} onChangeText={(text) => { this.setState({email: text}) }}  />
        <TouchableOpacity style= {styles.button} onPress = {_ => this.onResetPasswordPress()}>
          <Text style={{color:'#5887f9', fontSize:12, fontFamily:'Gibson',}}> RESET PASSWORD </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    );

  }
}
