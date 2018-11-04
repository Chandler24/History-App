import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Foundation, Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import MapScreen from './map'
import ProfileScreen from './profile'
import FavoritesScreen from './favorites'

export default class Home extends Component {
  render() {
    return (
      <TabNavigator />
    )
  }
}

/* Adds bottom tab navigator to switch between Profile, Map, and Favorites pages */
const TabNavigator = createBottomTabNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="map-o" size={32} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="user" size={32} color={tintColor} />
      )
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="favorite" size={32} color={tintColor} />
      )
    }
  },
},{
  /* Settings and styles for bottom tab navigator */
  initialRouteName: 'Map',
  order: ['Profile', 'Map', 'Favorites'],
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    showIcon: true,
    labelStyle: {
      fontSize: 15
    },
    tabStyle: {
      height: 65
    },
    style: {
      backgroundColor: '#EFE8D5',
      height: 65,
      borderTopWidth: 0, 
      elevation: 8
    }
  },
});