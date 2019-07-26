
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import firebase from 'react-native-firebase'


export default class Dashboard extends Component {

  componentDidMount() {
    StatusBar.setHidden(true);
    this.checkIfLoggedIn()
  }

  checkIfLoggedIn = () => {
      firebase.auth().onAuthStateChanged((user) => {
         if(user) {
           this.props.navigation.navigate('DashboardScreen')
         }
         else {
           this.props.navigation.navigate('LoginScreen')
         }
       }
       )
  }

  render() {
    return (
      <View>
        <ActivityIndicator size = "large" />
      </View>
    );

  }
}
