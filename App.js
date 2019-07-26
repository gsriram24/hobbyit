/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator} from "react-navigation";
import Login from './App/Components/Login'
import Register from './App/Components/Register'
import Loading from './App/Components/Loading'
import Interests from './App/Components/Interests'
import LoginStackNavigator from './App/Components/Navigators/LoginStackNavigator'
import DashboardTabNavigator from './App/Components/Navigators/DashboardTabNavigator'

import firebase from "react-native-firebase"

const config = {
  apiKey: "AIzaSyAYEVZogm0qv2ecKmlco782sOJnEquGj3Y",
  authDomain: "hoobyit.firebaseapp.com",
  databaseURL: "https://hoobyit.firebaseio.com",
  projectId: "hoobyit",
  storageBucket: "hoobyit.appspot.com",
  messagingSenderId: "303087753140",
  persistence: true,

 };

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: Loading,
  LoginScreen: LoginStackNavigator,
  DashboardScreen: DashboardTabNavigator,
}
)
const AppNavigator = createAppContainer(AppSwitchNavigator);

export default AppNavigator;
