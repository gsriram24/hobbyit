/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Register from '../Register'
import MoreInformation from '../MoreInformation'
import Interests from '../Interests'
import Loading from '../Loading'
import { createSwitchNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createSwitchNavigator({

  Register: {
    screen: Register,
    navigationOptions: {
      header:null,
    }
  },
  MoreInformation: {
    screen:MoreInformation,
    navigationOptions: {
      header:null,
    }
  },
  Interests: {
    screen:Interests,
    navigationOptions: {
      header:null,
    }
  },
  LoadingScreen: {
    screen:Loading,
    navigationOptions: {
      header:null,
    }
  },
});

const MoreInfoSwitchNavigator = createAppContainer(AppNavigator)
export default MoreInfoSwitchNavigator;
