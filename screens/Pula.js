import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class PulaScreen extends React.Component {
  static navigationOptions = {
    title: 'Pula',
    headerTintColor: '#8b66ac',
    headerTitleStyle: {
      fontSize: 28,
    },
    headerStyle: {
      borderBottomWidth: 4,
      borderColor: '#8b66ac',
    },
  };
  render() {
    return (
      <View style={{ flex: 1,}}>
        <View>
          <View></View>
          <Text></Text>
        </View>
        <Text></Text>
      </View>
    );
  }
}