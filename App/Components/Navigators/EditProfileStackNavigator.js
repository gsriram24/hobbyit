/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import EditProfile from '../EditProfile'
import Interests from '../Interests'

import { createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({

  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      header:null,
    }
  },
  Interests: {
    screen:Interests,
    navigationOptions: {
      header:null,
    }
  }
});

const EditProfileStackNavigator = createAppContainer(AppNavigator)
export default EditProfileStackNavigator;
