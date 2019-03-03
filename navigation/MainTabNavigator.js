import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ReliScreen from '../screens/ReliScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: '#9c4ddd',
    inactiveTintColor: '#d9aaff'},
  tabBarLabel: 'Galerije',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'home'
      }
    />
  ),
};

const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: '#9c4ddd',
    inactiveTintColor: '#d9aaff'},
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'map-o'}
    />
  ),
};

const ReliStack = createStackNavigator({
  Reli: ReliScreen,
});

ReliStack.navigationOptions = {
  header: null,
  tabBarOptions: {
    activeTintColor: '#9c4ddd',
    inactiveTintColor: '#d9aaff'},
  tabBarLabel: 'Reli',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'flag-checkered'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MapStack,
  ReliStack,
});
