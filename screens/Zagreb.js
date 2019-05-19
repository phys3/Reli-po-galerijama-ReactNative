import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

export default class ZagrebScreen extends React.Component {
    
  static navigationOptions = {
    title: 'Galerije Zagreb',
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
          <Text style={styles.title}>HDLU - Bačva / PM / Prsten</Text>
        </View>
        <Text style={styles.adresa}>Trg žrtava fašizma 16</Text>
        <Text style={styles.poc}>POČETNA POSTAJA I SVEČANO OTVORENJE</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postitle}>Galerija Bačva:</Text>
        <Text style={styles.postext}>Renata Poljak „Yet Another Departure“</Text>
        <Text style={styles.postitle}>Galerija PM:</Text>
        <Text style={styles.postext}>Erotika i Snovi Edo Perioda – Shunga</Text>
        <Text style={styles.postitle}>Galerija Prsten:</Text>
        <Text style={styles.postext}>CreArt europska izložba „The Third Space „All That We Have In Common“</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>2</Text></View>
          <Text style={styles.title}>Oris / Kuća arhtekture</Text>
        </View>
        <Text style={styles.adresa}>Kralja Držislava 3</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Izložba arhitekta Bože Benića - “Tanzanija u srcu”.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>3</Text></View>
          <Text style={styles.title}>Galerija Matice Hrvatske</Text>
        </View>
        <Text style={styles.adresa}>Ulica Matice hrvatske 2</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Otvorenje izložbe "Vrijeme trenutka" Melite Sorole (službeno otvorenje i govor u 19h).</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>4</Text></View>
          <Text style={styles.title}>Galerija SC </Text>
        </View>
        <Text style={styles.adresa}>Savska 25</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Dean Jokanović Toumin – „Linija kao dimenzija prostora“ (Galerija SC i Francuski paviljon).</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>5</Text></View>
          <Text style={styles.title}>Galerija Kranjčar</Text>
        </View>
        <Text style={styles.adresa}>Kaptol 26</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Kolekcija umjetničkih radova Galerije Kranjčar.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>6</Text></View>
          <Text style={styles.title}>Galerija Šira</Text>
        </View>
        <Text style={styles.adresa}>Preradovićeva 13</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Skupna izložba „Grafička mapa Suha akvatinta“</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>7</Text></View>
          <Text style={styles.title}>Galerija ULUPUH</Text>
        </View>
        <Text style={styles.adresa}>Tkalčićeva 14</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Multidisciplinarni izložbeni projekt Mirande Herceg objedinjuje dizajn, fotografiju i film.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>8</Text></View>
          <Text style={styles.title}>Studio Lapo Lapo</Text>
        </View>
        <Text style={styles.adresa}>Ilica 50</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Program ART za odrasle – okušajte se u izradi umjetničkog djela ili u ulozi modela pod vodstvom Melite Omeragić.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>9</Text></View>
          <Text style={styles.title}>Galerija Greta</Text>
        </View>
        <Text style={styles.adresa}>Ilica 92</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Samostalna izložba "Floresvirent / Flowers are blooming" akademske umjetnice Nikoline Knežević-Pike.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>10</Text></View>
          <Text style={styles.title}>Galerija VN</Text>
        </View>
        <Text style={styles.adresa}>Ilica 163 a</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Izložba Svena Klobučara „Razgovor s duhom“ kroz crteže i priče tematizira smrt.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>11</Text></View>
          <Text style={styles.title}>Otvoreni studio keramike </Text>
        </View>
        <Text style={styles.adresa}>Ilica 69</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Predstavljanje radova članova udruge i polaznika radionica udruge.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>12</Text></View>
          <Text style={styles.title}>PMS</Text>
        </View>
        <Text style={styles.adresa}>Tkalčićeva 61</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Predstavljanje djelovanja prostora PLANET koji se bavi isključivo recikliranjem i prenamjenom odbačenih stvari.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>13</Text></View>
          <Text style={styles.title}>Galerija Forum</Text>
        </View>
        <Text style={styles.adresa}>Teslina 16 </Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Otvorenje izložbe Ivice Plaveca „Čovjek iz Železnog“.</Text>
      </View>
      
      <View style={{ flex: 1,}}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>14</Text></View>
          <Text style={styles.title}>Regeneracija</Text>
        </View>
        <Text style={styles.adresa}>Boškovićeva 7b</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Prezentacija dizajnerske instalacije „Tekstilni objekti“ Marije Gradečak.</Text>
      </View>
      
      <View style={{ flex: 1, }}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>15</Text></View>
          <Text style={styles.title}>Galerija Događanja</Text>
        </View >
        <Text style={styles.adresa}>Ivanićgradska 41a</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Izložba „Bubnjar“ Andreja Beštaka - audiovizualna prostorna instalacija koja se može doživjeti svim osjetilima.</Text>
      </View>

      <View style={{ flex: 1, }}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>16</Text></View>
          <Text style={styles.title}>Academia moderna</Text>
        </View >
        <Text style={styles.adresa}>Šenoina 11 (dvorište)</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Otvorenje samostalne izložbe Mateja Pašalića.</Text>
      </View>

      <View style={{ flex: 1, paddingBottom: 50, }}>
        <View style={styles.row}>
          <View style={styles.circle}>
          <Text style={styles.number}>17</Text></View>
          <Text style={styles.title}>Galerija Garaža Kamba</Text>
        </View >
        <Text style={styles.adresa}>Ilica 37</Text>
        <Text style={styles.poc}>ZADNJA POSTAJA I PODJELA DIPLOME</Text>
        <Text style={styles.postav}>POSTAV</Text>
        <Text style={styles.postext}>Prezentacija umjetničkih rezidencija britanske umjetnice Gemme Riggs i austrijskog umjetnika Matthiasa Krinzingera u formi izložbe / performansa / happeninga / instalacije.</Text>
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
  postitle: {
    fontSize: 20,
    fontWeight: '200',
    paddingLeft: 40,
  },
})