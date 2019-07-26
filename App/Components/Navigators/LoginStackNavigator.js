/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Login from '../Login'
import MoreInfoSwitchNavigator from '../Navigators/MoreInfoSwitchNavigator'
import ForgotPassword from '../ForgotPassword'
import { createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header:null,
    }
  },
  Register: {
    screen: MoreInfoSwitchNavigator,
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

const LoginStackNavigator = createAppContainer(AppNavigator)
export default LoginStackNavigator;
