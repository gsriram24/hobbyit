
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


export default class Register extends Component {
  componentDidMount() {

    StatusBar.setHidden(true);
  }
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password: "",
          passwordConfirm: "",
      };
  }
  onSignupPress = () => {
    if(this.state.email==='' || this.state.password==='' || this.state.passwordConfirm===''){
      Alert.alert('Please fill in all the fields!')
      return
    }
    if (this.state.password !== this.state.passwordConfirm) {
        Alert.alert("Passwords do not match");

    }
    else {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {this.props.navigation.navigate('MoreInformation')}, (error) => { Alert.alert(error.message); });
    }
  }

  render() {
    return (
    <LinearGradient style = {styles.body} colors= {['#60c3ff','#5574f7']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}  locations={[0.0, 0.99]}>
      <View style={styles.signInContainer}>
        <Text style = {styles.signInText}>Register</Text>
      </View>
      <View style = {styles.detailsContainer}>
        <Text style = {styles.inputName}>E-Mail</Text>
        <TextInput style={styles.loginInput} autoCapitalize = 'none' placeholder = {'E-Mail'} placeholderTextColor={'#ffffff'} onChangeText={(text) => { this.setState({email: text}) }}/>
        <Text style = {styles.inputName}>Password</Text>
        <TextInput style={[styles.loginInput,]} placeholder = {'Password'} placeholderTextColor={'#ffffff'} secureTextEntry={true} onChangeText={(text) => { this.setState({password: text}) }}/>
        <Text style = {styles.inputName}>Confirm Password</Text>
        <TextInput style={[styles.loginInput,]} placeholder = {'Confirm Password'} placeholderTextColor={'#ffffff'} secureTextEntry={true} onChangeText={(text) => { this.setState({passwordConfirm: text}) }}/>

        <TouchableOpacity style= {styles.button} onPress = {this.onSignupPress}>
        <Text style={{color:'#5887f9', fontSize:12, fontFamily:'Gibson',}} > REGISTER </Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
    );

  }
}
