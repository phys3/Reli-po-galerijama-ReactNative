import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Barscreen from './Barscanner';


class GalScanned extends React.Component {
  constructor(props){
    super(props);
    this.state = { visible: 'none'};
  }
  componentDidMount() { 
    setInterval(() => (
    AsyncStorage.getItem(this.props.gal).then((value) => {
      if (value == 'flex') {
     this.setState({visible: 'flex'});}})), 1000);
    }
   
  
  render() {
    return (
      <View style={{display: this.state.visible, flexDirection: 'row', justifyContent: 'center', paddingTop: 20}}><View style={styles.circle}>
      <Text style={styles.number}>{this.props.number}</Text></View>
      <Text style={{display: this.state.visible, fontSize: 22, paddingLeft: 10, fontWeight: '500',}}>{this.props.title}</Text>
      </View>
    );
  }
}


class ReliScreenmain extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    
  }
  
  render() {
    
    return (
      <ScrollView>
      <View style={{paddingTop: 60, flex: 1, alignItems: 'center', }}>
      <Text style={{ width: '80%', textAlign: 'center', fontSize: 22, fontWeight: 'bold', color: '#8b66ac', borderColor: '#8b66ac', borderWidth: 3, borderRadius: 12,}}>
                PRAVILA IGRE
              </Text>
              <Text style={{ textAlign: 'center', fontSize: 22, color: '#8b66ac', borderRadius: 12,}}>
                Skeniraj QR Kod u Svakoj Galeriji koja sudjeluje u Tvom gradu i pokupi Diplomu na završnoj lokaciji!!
              </Text>
         <TouchableOpacity onPress={() => {this.props.navigation.navigate('Bar');
          }}>
                <Text style={styles.button}>SKENIRAJ KOD</Text>
              </TouchableOpacity>
              <Text style={{ width: '80%', textAlign: 'center', fontSize: 22, fontWeight: 'bold', color: '#8b66ac', borderColor: '#8b66ac', borderWidth: 3, borderRadius: 12, marginTop: 25, }}>
                POSJEĆENE GALERIJE
              </Text>
              <GalScanned gal='ri1' number='1' title='Galerija Kortil' />
              <GalScanned gal='ri2' number='2' title='Erste Club galerija' />
              <GalScanned gal='ri3' number='3' title='Galerija Juraj Klović' />
              <GalScanned gal='ri4' number='4' title='Galerija Principij' />
              <GalScanned gal='ri5' number='5' title='Galerija RiArt' />
              <GalScanned gal='ri6' number='6' title='Klub mladih Rijeka' />
              <GalScanned gal='ri7' number='7' title='KIWI Creative Space' />
              <GalScanned gal='ri8' number='8' title='Mali salon' />
              <GalScanned gal='ri9' number='9' title='Galerija SKC' />
              <GalScanned gal='pu1' number='1' title='HUiU' />
              <GalScanned gal='pu2' number='2' title='MMC Luka' />
              <GalScanned gal='pu3' number='3' title='Galerija Cvajner' />
              <GalScanned gal='pu4' number='4' title='Galerija Poola' />
              <GalScanned gal='pu5' number='5' title='Gradska galerija Pula' />
              <GalScanned gal='pu6' number='6' title='Galerija Makina' />
              <GalScanned gal='pu7' number='7' title='Galerija Amfiteatar' />
              <GalScanned gal='pu8' number='8' title='Galerija C8' />
              <GalScanned gal='pu9' number='9' title='Sveta Srca' />
              <GalScanned gal='pu10' number='10' title='Augustov hram' />
              <GalScanned gal='pu11' number='11' title='Galerija “Studentski” SC Pula' />
              <GalScanned gal='pu12' number='12' title='UCPIŽ' />
              <GalScanned gal='pu13' number='13' title='Dnevni Boravak DC Rojc' />
              <GalScanned gal='pu14' number='14' title='KarloBar' />
              <GalScanned gal='pu15' number='15' title='Kotač' />
              <GalScanned gal='zg1' number='1' title='HDLU - Bačva / PM / Prsten' />
              <GalScanned gal='zg2' number='2' title='Oris / Kuća arhtekture' />
              <GalScanned gal='zg3' number='3' title='Galerija Matice Hrvatske' />
              <GalScanned gal='zg4' number='4' title='Galerija SC' />
              <GalScanned gal='zg5' number='5' title='Galerija Kranjčar' />
              <GalScanned gal='zg6' number='6' title='Galerija Šira' />
              <GalScanned gal='zg7' number='7' title='Galerija ULUPUH' />
              <GalScanned gal='zg8' number='8' title='Studio Lapo Lapo' />
              <GalScanned gal='zg9' number='9' title='Galerija Greta' />
              <GalScanned gal='zg10' number='10' title='Galerija VN' />
              <GalScanned gal='zg11' number='11' title='Otvoreni studio keramike' />
              <GalScanned gal='zg12' number='12' title='PMS' />
              <GalScanned gal='zg13' number='13' title='Galerija Forum' />
              <GalScanned gal='zg14' number='14' title='Regeneracija' />
              <GalScanned gal='zg15' number='15' title='Galerija Događanja' />
              <GalScanned gal='zg16' number='16' title='Academia moderna' />
              <GalScanned gal='zg17' number='17' title='Galerija Garaža Kamba' />
            </View>
            </ScrollView>
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
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20, 
    backgroundColor: '#8b66ac',
  },
  number: {
    color: 'white',
    textAlign: 'center', 
    fontSize: 32, 
    fontFamily: 'Baloo',
  },
  button: {
    alignSelf: 'center',
    width: '40%',
    height: 100,
    marginTop: 50,
    fontFamily: 'Baloo',
    backgroundColor: '#8b66ac',
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