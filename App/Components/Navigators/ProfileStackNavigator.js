/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MyProfile from '../MyProfile'
import EditProfile from '../EditProfile'
import ForgotPassword from '../ForgotPassword'
import EditProfileStackNavigator from '../Navigators/EditProfileStackNavigator'

import { createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
  MyProfile: {
    screen: MyProfile,
    navigationOptions: {
      header:null,
    }
  },
  EditProfile: {
    screen: EditProfileStackNavigator,
    navigationOptions: {
      header:null,
    }
  },
  ForgotPassword: {
    screen:ForgotPassword,
    navigationOptions: {
      header:null,
    }
  }
});

const ProfileStackNavigator = createAppContainer(AppNavigator)
export default ProfileStackNavigator;
