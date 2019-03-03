import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Barscreen from './Barscanner';

class ReliScreenmain extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View>
            
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Bar')}>
                <Text style={styles.button}>Scan</Text>
              </TouchableOpacity>
                
            </View>
    );
  }
}

const ReliStackmain = createStackNavigator(
  {
    Relimain: ReliScreenmain,
    Bar: Barscreen,
  },
  {
    initialRouteName: 'Relimain',
  }
);
const ReliContainer = createAppContainer(ReliStackmain);
export default class ReliScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <ReliContainer />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginTop: 50,
    backgroundColor: '#909296',
    borderRadius: 50,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    paddingTop: 30,
    textAlign:'center',
  },
});