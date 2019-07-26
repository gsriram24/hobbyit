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
export default class Interests extends Component {
  constructor() {
    super()
    this.state = {
      interest: '',
      searchResults: [],
    }
  }

  requestPress = () => {
    Alert.alert("Request Pressed")
  }
  onSearchPress = () => {
    this.db=firebase.firestore()
    this.db.collection('interests').where('interestName','==',this.state.interest).get().then((querySnapshot) => {
        if(querySnapshot.empty) {
          Alert.alert(
              'Not Found!',
              'Interest not found! Do you want to request to add?',
                [
                  {text: 'Request!', onPress: () => this.requestPress}
                ]
            )}
          else {
            querySnapshot.forEach((doc)=> {
                this.db.collection('interests').doc(doc.id).update({
                users: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email)
                }).then(() => {
                    Alert.alert(
                        'Added!',
                        'Interest added! You can add more or go to Dashboard',
                          [
                            {text: 'Go to Dashboard!', onPress: () => this.props.navigation.navigate('LoadingScreen')}
                          ]
                      )})
                .catch((error) => {
                Alert.alert(error.message)
                })
                this.db.collection('users').doc(firebase.auth().currentUser.email).update({
                interests: firebase.firestore.FieldValue.arrayUnion(this.state.interest)
                })
                .catch((error) => {
                Alert.alert(error.message)
                })
              }
            );
          }
          });
        }
  render() {
    return (
    <View style={styles.body}>
      <View style= {styles.headerContainer}>
        <Text style={styles.addInterestText}>Add Interest</Text>
      </View>
      <View style= {styles.detailsContainer}>
        <Text style={styles.interestText}>What are you Interested In?</Text>
        <TextInput style={styles.interestInput} placeholder = {"Enter Interest Here"} placeholderTextColor = {'#5887f9'} onChangeText={(text) => { this.setState({interest: text}) }} />
      </View>
      <TouchableOpacity style= {styles.button} onPress = {this.onSearchPress}>
      <LinearGradient style = {styles.gradient} colors= {['#5574f7', '#60c3ff']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}  locations={[0.0, 0.99]}>
        <Text style={{color:'#ffffff', fontSize:16, fontFamily:'Gibson', }} > Search </Text>
      </LinearGradient>
      </TouchableOpacity>
    </View>
    );
  }
}
