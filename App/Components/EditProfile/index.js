
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


  constructor(props) {
      super(props);
      this.state = {
          fullName: "",
          bio: "",
          dp: "Upload Profile Picture",
          loading:false,
          details: null,
      };
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

  }
  componentDidMount() {
    StatusBar.setHidden(true);

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
         this.setState({ details: { ...this.state.details, imgUrl: this.state.dp} });
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


    firebase.firestore().collection('users').doc(firebase.auth().currentUser.email).update({
      fullName: this.state.details.fullName,
      bio:this.state.details.bio,
      interests: this.state.details.interests,
      email: firebase.auth().currentUser.email,
      location: this.state.details.location,
      number: this.state.details.number,
      imgUrl: this.state.details.imgUrl,
    }).then(() => {Alert.alert('Profile details updated succesfully!');}, (error) => { Alert.alert(error.message); });
  }

  openInterests = () => {
    this.onSignupPress()
    this.props.navigation.navigate('Interests')
  }
  render() {
    this.fetchData
    if(this.state.details === null) return null;
    return (
    <View style = {styles.body}>
    <View style= {styles.headerContainer}>
      <Text style={styles.addInterestText}>My Profile</Text>
    </View>
      <View style = {styles.detailsContainer}>
        <Text style = {styles.inputName}>Full Name</Text>
        <TextInput style={styles.loginInput} value = {this.state.details.fullName} placeholderTextColor={'#ffffff'} onChangeText={(text) => { this.setState({details: {location: this.state.details.location, number:this.state.details.number, fullName: text, bio: this.state.details.bio, email: this.state.details.email, interests: this.state.details.interests, imgUrl: this.state.details.imgUrl}}) }}/>
        <Text style = {styles.inputName}>Bio</Text>
        <TextInput style={styles.loginInput} value = {this.state.details.bio} placeholderTextColor={'#ffffff'} multiline = {true} numberOfLines = {10} onChangeText={(text) => { this.setState({details: {location: this.state.details.location, number:this.state.details.number, fullName: this.state.details.fullName, bio: text, email: this.state.details.email, interests: this.state.details.interests, imgUrl: this.state.details.imgUrl}}) }}/>
        <Text style={styles.registerText} onPress = {_ => this.openPicker()}>Upload Profile Picture</Text>
        <Text style={styles.registerText} onPress = {_ => this.openInterests()}>Add Interest</Text>
        <TouchableOpacity style= {styles.button} onPress = {this.onSignupPress}>
        <LinearGradient style = {styles.gradient} colors= {['#5574f7', '#60c3ff']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}  locations={[0.0, 0.99]}>
          <Text style={{color:'#ffffff', fontSize:16, fontFamily:'Gibson', }} > Save Changes </Text>
        </LinearGradient>
        </TouchableOpacity>
      </View>

    </View>
    );

  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}
