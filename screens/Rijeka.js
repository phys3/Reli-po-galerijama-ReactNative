import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';


export default class RijekaScreen extends React.Component {
  static navigationOptions = {
    title: 'Galerije Rijeka',
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
      <ScrollView style={{paddingBottom: 30, }}>
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>1</Text></View>
          <Text style={styles.title}>Galerija Kortil</Text>
        </View>
        <Text style={styles.adresa}>Strossmayerova 1</Text>
        <Text style={styles.poc}>POČETNA POSTAJA </Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Izložba “Priče Roma” koju organizira FADE-IN Zagreb u suradnji s Romskim resurnim centrom iz Darde.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>2</Text></View>
          <Text style={styles.title}>Erste Club galerija</Text>
        </View>
        <Text style={styles.adresa}>Frana Supila 6</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Valent Hrvatin „Čudesni svijet spirala“ - radovi nastali tijekom 2018. i 2019. godine.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>3</Text></View>
          <Text style={styles.title}>Galerija Juraj Klović</Text>
        </View>
        <Text style={styles.adresa}>Verdijeva 19 b</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Samostalna izložba umjetnice Andree Staničić - radovi nastali u proteklih pet godina i najnoviji ciklus koji nastavlja istraživanje sinergija kompjutorske grafike s drugim medijima.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>4</Text></View>
          <Text style={styles.title}>Galerija Principij </Text>
        </View>
        <Text style={styles.adresa}>Pod Voltun 4</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Izložba Borislava Božića „Što biješe dosad?" povodom dobivanja nagrade Tošo Dabac za dosadašnji fotografski rad.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>5</Text></View>
          <Text style={styles.title}>Galerija RiArt</Text>
        </View>
        <Text style={styles.adresa}>Marka Marulića 10</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Druženje umjetnika i izložba djela pred galerijom.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>6</Text></View>
          <Text style={styles.title}>Klub mladih Rijeka</Text>
        </View>
        <Text style={styles.adresa}>Erazma Barčića 9a</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>"Što more moRi?" - Izložba fotografija, party, maškare, crtić i radionice.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>7</Text></View>
          <Text style={styles.title}>KIWI Creative Space</Text>
        </View>
        <Text style={styles.adresa}>Krešimirova 60G</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Druženje u ateljeu uz recentne mozaike i slike umjetnika.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>8</Text></View>
          <Text style={styles.title}>Mali salon</Text>
        </View>
        <Text style={styles.adresa}>Korzo 24</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Izložba „120 umjetnina na drugom katu“ rekonstruira prvi stalni postav kojim se Muzej moderne i suvremene umjetnosti, tada pod imenom Galerija likovnih umjetnosti, 1949. godine otvorio javnosti.</Text>
      </View>
      
      <View style={{ flex: 1, paddingBottom: 50, }}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>9</Text></View>
          <Text style={styles.title}>Galerija SKC</Text>
        </View>
        <Text style={styles.adresa}>Kružna 8</Text>
        <Text style={styles.poc}>ZADNJA POSTAJA I PODJELA DIPLOME</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Program „Ispod kože“, smješten unutar ciklusa Priča iz prakse Galerije SKC, obuhvaća brojne autore, izložbu skica, fotografija i objekata te razgovor o tetoviranju uz reviju tetovaža.</Text>
      </View>
      
     

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
  row: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    paddingLeft: 17,
  },
  postav: {
    fontSize: 18,
    fontWeight: '200',
    paddingTop: 5,
    paddingLeft: 40,
  },
  postext: {
    fontSize: 18,
    fontWeight: '100',
    paddingTop: 5,
    paddingLeft: 40,
  },
  adresa: {
    fontSize: 18,
    fontWeight: '100',
    paddingLeft: 60,
  },
  poc: {
    fontSize: 16,
    fontWeight: '100',
    paddingTop: 5,
    paddingLeft: 40,
  },
})