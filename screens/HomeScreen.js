import React from 'react';
import { Font } from 'expo';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
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
      <ScrollView style={styles.container}>

            <View style={{flex: 1, paddingTop: 58, paddingLeft: 25, paddingRight: 25, }}>
              <Text style={{ textAlign: 'center', fontSize: 28, fontWeight: 'bold', color: '#8b66ac', borderColor: '#8b66ac', borderWidth: 3, borderRadius: 12,}}>
                RELI PO GALERIJAMA
              </Text>
              <Text style={{paddingTop: 20, paddingBottom: 20, fontSize: 16, textAlign: 'center', }}>
              Reli po galerijama je prva kulturno-umjetnička manifestacija koja okuplja i mapira galerije u hrvatskim gradovima kako bi umjetnicima i umjetničkim prostorima pružila veću vidljivost. Manifestacija umrežuje čak 50 galerija u tri grada, Zagrebu, Rijeci i Puli, a posjetiteljima u jednom danu pruža priliku vidjeti više izložbi nego bilo koji drugi dan u godini.
              </Text>
              <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', color: '#8b66ac', borderColor: '#8b66ac', borderWidth: 3, borderRadius: 12,}}>
                PRAVILA IGRE
              </Text>
              <Text style={{paddingTop: 20, paddingBottom: 20, fontSize: 16, textAlign: 'center', }}>
              Pozivamo vas da obilazite galerije, razgledavate izložbe i družite se na završnoj lokaciji. Ako uspiješ posjetiti sve galerije označene na mapi, osvajaš Povelju časti za poseban doprinos u kulturi. 
              </Text>
            </View>
            
            <View style={{ flex: 2,  justifyContent: 'space-evenly', height: 300, }}>
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
        </ScrollView>
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
    borderColor: '#8b66ac',
    borderWidth: 3,
    borderRadius: 12,
    color: '#8b66ac',
    fontSize: 28,
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
