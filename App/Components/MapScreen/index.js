/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './style.js'
import {List, ListItem} from 'react-native-elements'
import firebase from 'react-native-firebase'
import UserModal from '../UserModal'
export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      details: [],
      details1:  null,
      error: null,
      refreshing: false,
      location:null,
    }
  }
	  distanceFromMe = (lat1, lon1, lat2, lon2, unit)  => {
		if ((lat1 == lat2) && (lon1 == lon2)) {
			return 0;
		}
		else {
			var radlat1 = Math.PI * lat1/180;
			var radlat2 = Math.PI * lat2/180;
			var theta = lon1-lon2;
			var radtheta = Math.PI * theta/180;
			var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
				dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180/Math.PI;
			dist = dist * 60 * 1.1515;
			if (unit=="K") { dist = dist * 1.609344 }
			if (unit=="N") { dist = dist * 0.8684 }
			return dist;
		}
	}
  fetchdata = () => {
    const docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.email);
    docRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            this.setState({ details1: data });
            console.log("Document data:", data);
        } else {

            this.setState({ details1: null });
            console.log("No such document!");
        }
    }).catch(function (error) {
        this.setState({ details1: null });
        console.log("Error getting document:", error);
    });
  }
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ location:position });
      },
      error => Alert.alert(error.message),
      {     enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 10000}
    );
  };
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        this.setState({ location: {latitude: position.coords.latitude, longitude: position.coords.longitude} });
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.email).update({
              location: new firebase.firestore.GeoPoint(latitude, longitude)
          })
          .then(function() {
              console.log("Document successfully updated!");
          });

      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 10000 }
    );
    const docRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.email);
    docRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            this.setState({ details1: data });
            console.log("Document data:", data);
        } else {

            this.setState({ details1: null });
            console.log("No such document!");
        }
    }).catch(function (error) {
        this.setState({ details1: null });
        console.log("Error getting document:", error);
    });
    setTimeout(() => {
    this.setState({details: []})
    let d=[]
    this.setState({loading:true})
    db=firebase.firestore()
    db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if(doc.data().email != firebase.auth().currentUser.email && doc.data().interests.some(r=> this.state.details1.interests.indexOf(r) >= 0)) {
      this.setState(prevState => ({
          details: [...prevState.details, doc.data()]
      }))
      }
    });

    this.setState({loading:false, refreshing:false})
    });
  }, 1000)
  }
  getImage = () => {
  const imageRef = firebase.storage().ref(firebase.auth().currentUser.email).child("dp.jpg")
  imageRef.getDownloadURL().then(url => {
    return url
  })
  }
  handleRefresh = () => {
    this.setState({
      refreshing: true,
      }, () => {
        this.componentWillMount()
        })
  }
  render() {
    this.makeRemoteRequest
    if(this.state.details.length===0) {
      this.fetchData
      return (
      <View style= {styles.body}>
        <ActivityIndicator size = "large" />
      </View>

    );
  }
    console.log(this.state.data)
    return (
      <View style= {styles.body}>
      <View style= {styles.headerContainer}>
        <Text style={styles.addInterestText}>Find People</Text>
      </View>
      <View style={styles.flatListContainer}>
      <FlatList
          data={this.state.details}
          renderItem={({ item }) => (
            <TouchableOpacity onPress  = {_ => this.refs.userModal.showUserModal(item)}>
            <View style= {[{flexDirection: "row"}, styles.flatListItem]}>
            <Image source = {{uri: item.imgUrl}}  style={styles.profilePicture} />
            <View style={{flexDirection: "column"}}>
            <Text style = {styles.flatListName}>{item.fullName}</Text>
            <Text style = {styles.flatListInterests}>{item.interests.join(', ')}</Text>
						<Text style = {styles.flatListDistance}>{String(this.distanceFromMe(this.state.details1.location.latitude, this.state.details1.location.longitude,  item.location.latitude, item.location.longitude, 'K').toFixed(2)) + " KM Away"}</Text>
            </View>
            </View>
            </TouchableOpacity>
          )}
        keyExtractor={item => item.email}
        refreshing={this.state.refreshing}
        onRefresh = {this.handleRefresh}/>
      </View>
      <UserModal ref = {'userModal'} parentFlatList = {this}>
      </UserModal>
      </View>

    );
  }
}
