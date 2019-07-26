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

export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password: "",
      };
  }

  onLoginPress = () => {
    if(this.state.email==='' || this.state.password===''){
      Alert.alert('Please fill in both fields!')
      return
    }
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => { }, (error) => { Alert.alert(error.message); });
  }

  goToRegister() {
    this.props.navigation.navigate('Register')
  }
  goToForgotPassword() {
    this.props.navigation.navigate('ForgotPassword')
  }
  render() {
    return (
    <LinearGradient style = {styles.body} colors= {['#60c3ff','#5574f7']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}  locations={[0.0, 0.99]}>
      <View style={styles.signInContainer}>
        <Text style = {styles.signInText}>Sign In</Text>
      </View>
      <View style = {styles.detailsContainer}>
        <TextInput style={styles.loginInput} autoCapitalize = 'none' placeholder = {'E-Mail'} placeholderTextColor={'#ffffff'} onChangeText={(text) => { this.setState({email: text}) }}  />
        <TextInput style={[styles.loginInput, {marginTop:61,}]} placeholder = {'Password'} placeholderTextColor={'#ffffff'} secureTextEntry={true} onChangeText={(text) => { this.setState({password: text}) }}/>
        <TouchableOpacity style= {styles.button} onPress = {_ => this.onLoginPress()}>
        <Text style={{color:'#5887f9', fontSize:12, fontFamily:'Gibson',}}> SIGN IN </Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword} onPress = {_ => this.goToForgotPassword()}>Forgot Password?</Text>
        <Text style={styles.registerText} onPress = {_ => this.goToRegister()}>SIGN UP</Text>
      </View>
    </LinearGradient>
    );

  }
}
