/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MapScreen from '../MapScreen'
import MessagesScreen from '../MessagesScreen'
import MyProfile from '../MyProfile'
import ProfileStackNavigator from '../Navigators/ProfileStackNavigator'
import { createBottomTabNavigator, createAppContainer} from "react-navigation";
import { faMap, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
const AppNavigator = createBottomTabNavigator({

  Explore: {
    screen: MapScreen,
    navigationOptions: {
      header:null,
      tabBarIcon: ({ tintColor }) => <FontAwesomeIcon icon={ faMap } color={ tintColor } size={25}/>,
    }
  },

  MyProfile: {
    screen:ProfileStackNavigator,
    navigationOptions: {
      header:null,
      tabBarIcon: ({ tintColor }) => <FontAwesomeIcon icon={ faUserCircle } color={ tintColor } size={25} />,
    }
  },

},

{
    tabBarOptions: {
      activeTintColor: '#5574f7',  // Color of tab when pressed
      inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
      showIcon: 'true', // Shows an icon for both iOS and Android
      animationEnabled: true,
      labelStyle: {
        fontSize: 12,


      },
      style: {
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowRadius:2,
        shadowOpacity: 1.0,
        backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
      }
    },
});

const DashboardTabNavigator = createAppContainer(AppNavigator)
export default DashboardTabNavigator;
