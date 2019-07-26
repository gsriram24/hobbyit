
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
import RNFetchBlob from 'rn-fetch-blob'
import ImagePicker from 'react-native-image-crop-picker';


export default class Register extends Component {
  _isMounted = false;

  constructor(props) {
      super(props);
      this.state = {
          fullName: "",
          bio: "",
          number:"",
          interests: [],
          dp: "Upload Profile Picture",
          loading:false,
          position: null,
      };
  }
  componentDidMount() {

    StatusBar.setHidden(true);
    this._isMounted = true;
  
  }

  openPicker = () => {
   this.setState({ loading: true })
   const Blob = RNFetchBlob.polyfill.Blob
   const fs = RNFetchBlob.fs
   window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
   window.Blob = Blob
   //const { uid } = this.state.user
   const uid = firebase.auth().currentUser.email
   ImagePicker.openPicker({
     width: 300,
     height: 300,
     cropping: true,
     mediaType: 'photo'
   }).then(image => {

     const imagePath = image.path

     let uploadBlob = null

     const imageRef = firebase.storage().ref(uid).child("dp.jpg")
     let mime = 'image/jpg'
     fs.readFile(imagePath, 'base64')
       .then((data) => {
         //console.log(data);
         return Blob.build(data, { type: `${mime};BASE64` })
     })
     .then((blob) => {
         uploadBlob = blob
         return imageRef.put(imagePath, { contentType: mime })
       })
       .then(() => {
         uploadBlob.close()
         return imageRef.getDownloadURL()
       })
       .then((url) => {

         let userData = {}
         //userData[dpNo] = url
         //firebase.database().ref('users').child(uid).update({ ...userData})
         this.setState({loading: false, dp:url})
         Alert.alert("Picture Uploaded!")
       })
       .catch((error) => {
         Alert.alert(error.message)
       })
   })
   .catch((error) => {
     Alert.alert(error.message)
   })
  }
  onSignupPress = () => {

    if (this.state.fullName === '' || this.state.bio==='' || this.state.number === '') {
        Alert.alert("Field Empty!");

    }
    if (this.state.number.length != 10) {
        Alert.alert("Enter Valid Phone Number!");
    }
    else {
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.email).set({
      fullName: this.state.fullName,
      bio:this.state.bio,
      number:this.state.number,
      interests: [],
      location: new firebase.firestore.GeoPoint(0,0),
      imgUrl:this.state.dp,
      email:firebase.auth().currentUser.email,
    }).then(() => {this.props.navigation.navigate('Interests')}, (error) => { Alert.alert(error.message); });
    }
  }


  render() {
    return (
    <LinearGradient style = {styles.body} colors= {['#60c3ff','#5574f7']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}  locations={[0.0, 0.99]}>
      <View style={styles.signInContainer}>
        <Text style = {styles.signInText}>More Information</Text>
      </View>
      <View style = {styles.detailsContainer}>
        <Text style = {styles.inputName}>Full Name</Text>
        <TextInput style={styles.loginInput} placeholder = {'Full Name'} placeholderTextColor={'#ffffff'} onChangeText={(text) => { this.setState({fullName: text}) }}/>
        <Text style = {styles.inputName}>Bio</Text>
        <TextInput style={[styles.loginInput,]} placeholder = {'Bio'} placeholderTextColor={'#ffffff'} multiline = {true} numberOfLines = {10} onChangeText={(text) => { this.setState({bio: text}) }}/>
        <Text style = {styles.inputName}>Phone Number</Text>
        <TextInput style={styles.loginInput} keyboardType = {"phone-pad"} placeholder = {'Phone Number'} placeholderTextColor={'#ffffff'} onChangeText={(text) => { this.setState({number: text}) }}/>
        <Text style={styles.registerText} onPress = {_ => this.openPicker()}>Upload Profile Picture</Text>
        <TouchableOpacity style= {styles.button} onPress = {this.onSignupPress}>
        <Text style={{color:'#5887f9', fontSize:12, fontFamily:'Gibson',}} > ADD INFO </Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
    );

  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}
