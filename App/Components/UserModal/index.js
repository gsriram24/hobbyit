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
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from './style.js'
import firebase from 'react-native-firebase'
import Modal from 'react-native-modalbox'
import { faEnvelope, faSms, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default class UserModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: {
        fullName: '',
        email: '',
        imgUrl: '',
        interests:[],
      },
    }

  }
  showUserModal = (details) => {
    this.refs.myModal.open();
    this.setState({details: details} )
  }
  render() {

    return (

    <Modal style={{justifyContent:'flex-start', shadowOffset: 10,shadowRadius: 10, borderRadius: 30, height: 500, width: 300}} position='center' backdrop= {true} ref = {'myModal'}
      onClosed = {() => Alert.alert('Modal Closed')}
      isOpen={this.state.modal}
      onClosed={() => this.setState({ modal: false })}
      onOpened={() => this.setState({ modal: true })}
      key={this.state.modal ? 1 : 2}>
      <Text style={styles.nameText}>{this.state.details.fullName}</Text>
      <Text style={styles.interestText}>{this.state.details.interests.join(', ')}</Text>
      <Image source = {{uri: this.state.details.imgUrl}}  style= {styles.profilePicture}/>
      <Text style={styles.bio}>{this.state.details.bio}</Text>
      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
      <TouchableOpacity style= {styles.button} onPress={() => Linking.openURL('mailto:' + this.state.details.email + '?subject=subject&body=body')}>
      <LinearGradient style = {styles.gradient} colors= {['#D44638', '#D44638']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}  locations={[0.0, 0.99]}>
        <FontAwesomeIcon icon={ faEnvelope } color={ 'white' } />
      </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.button} onPress={() => Linking.openURL('whatsapp://send?text=&phone=${ +91'+ this.state.details.number + '}')}>
      <LinearGradient style = {styles.gradient} colors= {['#25D366', '#25D366' ]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}  locations={[0.0, 0.99]}>
        <FontAwesomeIcon icon={ faWhatsapp } color={ 'white' } />
      </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.button} onPress={() => Linking.openURL('sms:'+ this.state.details.number +'?')}>
      <LinearGradient style = {styles.gradient} colors= {['#0078FF', '#0078FF']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}  locations={[0.0, 0.99]}>
        <FontAwesomeIcon icon={ faSms } color={ 'white' } />
      </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.button} onPress={() => Linking.openURL('tel:' + this.state.details.number)}>
      <LinearGradient style = {styles.gradient} colors= {['#0078FF', '#0078FF']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}  locations={[0.0, 0.99]}>
        <FontAwesomeIcon icon={ faPhone } color={ 'white' } />
      </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.button} onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + String(this.state.details.location.latitude) + ',' + String(this.state.details.location.longitude))}>
      <LinearGradient style = {styles.gradient} colors= {['#228B22', '#228B22']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}  locations={[0.0, 0.99]}>
        <FontAwesomeIcon icon={ faMapMarkerAlt } color={ 'white' } />
      </LinearGradient>
      </TouchableOpacity>
      </View>
    </Modal>

    );
  }
}
