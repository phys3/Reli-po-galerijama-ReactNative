import React from 'react';
import { Font } from 'expo';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PulaScreen from '../screens/Pula';
import ZagrebScreen from '../screens/Zagreb';
import RijekaScreen from '../screens/Rijeka';



class DomaScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
            <Image
              source={require('../assets/images/relpogaldog2018.jpg')}
              style={styles.welcomeImage}
            />
            <View style={{ flex: 2,  justifyContent: 'space-evenly' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Pula')}>
                <Text style={styles.button}>Pula</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Rijeka')}>
                <Text style={styles.button}>Rijeka</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Zagreb')}>
                <Text style={styles.button}>Zagreb</Text>
              </TouchableOpacity>
                
            </View>
        </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Doma: DomaScreen,
    Pula: PulaScreen,
    Rijeka: RijekaScreen,
    Zagreb: ZagrebScreen,
  },
  {
    initialRouteName: 'Doma',
  }
);
const AppContainer = createAppContainer(RootStack);
export default class HomeScreen extends React.Component {
  
  
  static navigationOptions = {
    header: null,
  };
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignSelf: 'center',
    width: '70%',
    backgroundColor: '#8b66ac',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  },
  welcomeImage: {
    flex: 1,
    width: '100%',
    height: 180,
    resizeMode: 'stretch',
    marginTop: 23,
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  
});
