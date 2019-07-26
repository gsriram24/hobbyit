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
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from './style.js'
import firebase from 'react-native-firebase'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faSignOutAlt, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
export default class Interests extends Component {
  constructor() {
    super()
    this.state = {
      details: null,
      imgUrl: null,
      loaded: false
    }
    global.details = null;
  }

  fetchdata = () => {
    const docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.email);
    docRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            this.setState({ details: data });
            console.log("Document data:", data);
        } else {

            this.setState({ details: null });
            console.log("No such document!");
        }
    }).catch(function (error) {
        this.setState({ details: null });
        console.log("Error getting document:", error);
    });
    const imageRef = firebase.storage().ref(firebase.auth().currentUser.email).child("dp.jpg")
    imageRef.getDownloadURL().then(url => {
      this.setState({imgUrl: url})
    })

  }
  componentWillMount() {
    const docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.email);
    docRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            this.setState({ details: data });
            console.log("Document data:", data);
        } else {

            this.setState({ details: null });
            console.log("No such document!");
        }
    }).catch(function (error) {
        this.setState({ details: null });
        console.log("Error getting document:", error);
    });
    const imageRef = firebase.storage().ref(firebase.auth().currentUser.email).child("dp.jpg")
    imageRef.getDownloadURL().then(url => {
      this.setState({imgUrl: url})
    })

  }
  render() {
    this.fetchData
    console.log(this.state.details)
    console.log(this.state.imgUrl)
    if(this.state.details === null) return (<View>
      <Text style= {styles.optionText} onPress = {() => firebase.auth().signOut()}>Sign Out</Text>
      </View>
    );
    return (
    <View style={styles.body}>
      <View style= {styles.headerContainer}>
        <Text style={styles.addInterestText}>My Profile</Text>
      </View>
       <View style= {styles.profileContainer}>
        <Image source = {{uri: this.state.imgUrl}}  style={styles.profilePicture} />
        <Text style={styles.nameText}>{this.state.details.fullName}</Text>
        <Text style={styles.interestText}>{this.state.details.interests.join(', ')}</Text>
      </View>
      <View style = {styles.bioContainer}>
        <Text style={styles.bio} numberOfLines = {10} >{this.state.details.bio}</Text>

      </View>
      <View style = {styles.optionsContainer}>
      <View style = {styles.textContainer}>
      <FontAwesomeIcon icon={ faEdit } color={ '#4c5264' } />
      <Text style= {styles.optionText} onPress = {() => this.props.navigation.navigate('EditProfile')}>
      Edit Profile
      </Text>
      </View>
      <View style = {styles.textContainer}>
      <FontAwesomeIcon icon={ faKey } color={ '#4c5264' } />
      <Text style= {styles.optionText} onPress = {() => this.props.navigation.navigate('ForgotPassword')}>
      Change Password
      </Text>
      </View>
      <View style = {styles.textContainer}>
      <FontAwesomeIcon icon={ faSignOutAlt } color={ '#4c5264' } />
      <Text style= {styles.optionText} onPress = {() => firebase.auth().signOut()}>
      Sign Out
      </Text>
      </View>
      </View>
    </View>

    );
  }
}
