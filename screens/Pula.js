import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

export default class PulaScreen extends React.Component {
  static navigationOptions = {
    title: 'Galerije Pula',
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
      <ScrollView>
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>1</Text></View>
          <Text style={styles.title}>HUiU</Text>
        </View>
        <Text style={styles.adresa}>Zagrebačka 27</Text>
        <Text style={styles.poc}>POČETNA POSTAJA </Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Vjeran Juhas - INSTANTIABLE</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>2</Text></View>
          <Text style={styles.title}>MMC Luka</Text>
        </View>
        <Text style={styles.adresa}>Istarska 30</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Izložba učenika Škole za primijenjenu umjetnost i dizajn iz Pule.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>3</Text></View>
          <Text style={styles.title}>Galerija Cvajner </Text>
        </View>
        <Text style={styles.adresa}>Forum 2</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Alma Drnovac, Lorina Duić i Dora Ramljak - AME</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>4</Text></View>
          <Text style={styles.title}>Galerija Poola </Text>
        </View>
        <Text style={styles.adresa}>Kandlerova 14</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Selma Selman – Evropa boss super light</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>5</Text></View>
          <Text style={styles.title}>Gradska galerija Pula</Text>
        </View>
        <Text style={styles.adresa}>Kandlerova 8</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Fulvio Juričić – Retrospektiva (1979.-2019.)</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>6</Text></View>
          <Text style={styles.title}>Galerija Makina</Text>
        </View>
        <Text style={styles.adresa}>Kapitolinski trg 1</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Petra Fohringer i Stefan Mittlboeck-Jungwirth-Fohringer – Is this the real life?</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>7</Text></View>
          <Text style={styles.title}>Galerija Amfiteatar</Text>
        </View>
        <Text style={styles.adresa}>Flavijevska Ulica</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Meštrović: Otisci duše</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>8</Text></View>
          <Text style={styles.title}>Galerija C8</Text>
        </View>
        <Text style={styles.adresa}>Carrarina 8</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Kasnoantički brodolom kod hridi Piruzi</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>9</Text></View>
          <Text style={styles.title}>Muzejsko-galerijski prostor Sveta Srca</Text>
        </View>
        <Text style={styles.adresa}>De Villeov uspon 8</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Meštrović: Otisci duše</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>10</Text></View>
          <Text style={styles.title}>Augustov hram</Text>
        </View>
        <Text style={styles.adresa}>Forum</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Meštrović: Otisci duše</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>11</Text></View>
          <Text style={styles.title}>Galerija “Studentski” SC Pula </Text>
        </View>
        <Text style={styles.adresa}>Preradovićeva 28A</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Rino Banko – Naseljena skulptura</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>12</Text></View>
          <Text style={styles.title}>UCPIŽ </Text>
        </View>
        <Text style={styles.adresa}>Ljudevita Gaja 3</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Izložba radova polaznika likovnih radionica Udruge cerebralne paralize Istarske županije.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>13</Text></View>
          <Text style={styles.title}>Dnevni Boravak DC Rojc</Text>
        </View>
        <Text style={styles.adresa}>Ljudevita Gaja 3</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Penny Rimbaud - CRASS</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>14</Text></View>
          <Text style={styles.title}>KarloBar</Text>
        </View>
        <Text style={styles.adresa}>Ljudevita Gaja 3</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Lea Komel - Careless</Text>
      </View>
      
      <View style={{ flex: 1, paddingBottom: 50, }}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>15</Text></View>
          <Text style={styles.title}>Kotač</Text>
        </View >
        <Text style={styles.adresa}>Ljudevita Gaja 3</Text>
        <Text style={styles.poc}>ZADNJA POSTAJA I PODJELA DIPLOME</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Polaznici edukacija „Osnove digitalne fotografije“ i „Foto blic“ Edusplash platforme 2019 – Ok(n)o</Text>
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