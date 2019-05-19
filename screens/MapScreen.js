import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location, Permissions, Font } from 'expo';
export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

    state = {
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null
    };
  
    componentDidMount() {
      this._getLocationAsync();
    }
  
    _getLocationAsync = async () => {
     let { status } = await Permissions.askAsync(Permissions.LOCATION);
     if (status !== 'granted') {
       this.setState({
         locationResult: 'Permission to access location was denied',
       });
     } else {
       this.setState({ hasLocationPermissions: true });
     }
  
     let location = await Location.getCurrentPositionAsync({});
     this.setState({ locationResult: JSON.stringify(location) });
     
     // Center the map on the location we just fetched.
      this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
    };
  
    render() {
      return (
        <View style={styles.container}>
          
          
          {
            this.state.locationResult === null ?
            <Text>Finding your current location...</Text> :
            this.state.hasLocationPermissions === false ?
              <Text>Location permissions are not granted.</Text> :
              this.state.mapRegion === null ?
              <Text>Map region doesn't exist.</Text> :
              <MapView
              
                style={{ alignSelf: 'stretch', height: 1000 }}
                region={this.state.mapRegion}
                showsUserLocation={true}
                customMapStyle={[
                  {
                    "featureType": "administrative",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#dfc7e2"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural.landcover",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#dfc7e2"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#dfc7e2"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural.terrain",
                    "stylers": [
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#dfc7e2"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#dfc7e2"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.attraction",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.attraction",
                    "elementType": "labels",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#dfc7e2"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  }
                ]}
              >
          
        <MapView.Marker
            coordinate={{latitude: 45.8099598 ,
            longitude: 15.9871835}}
            title={"HDLU"}
            description={"Trg žrtava fašizma 16"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>1</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude: 45.8095729 ,
            longitude: 15.9712414}}
            title={"Oris / Kuća arhtekture"}
            description={"Kralja Držislava 3"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>2</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8109741 ,
            longitude: 15.9980399}}
            title={"Galerija Karas"}
            description={"Ul. kralja Zvonimira 58"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>3</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8084597 ,
            longitude: 15.9795912}}
            title={"Galerija Matice Hrvatske"}
            description={"Ulica Matice Hrvatske 2"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>4</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.816175 ,
            longitude: 15.9786028}}
            title={"Galerija Kranjčar"}
            description={"Kaptol 26"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>5</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8106318 ,
            longitude: 15.9744897}}
            title={"Galerija Šira"}
            description={"Preradovićeva 13"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>6</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8145779 ,
            longitude: 15.9763667}}
            title={"Galerija ULUPUH"}
            description={"Tkalčićeva 14"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>7</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8124829 ,
            longitude: 15.9641345}}
            title={"Galerija Greta"}
            description={"Ilica 92"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>8</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8125555 ,
            longitude: 15.9652085 }}
            title={"Radiona 69"}
            description={"Ilica 69"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>9</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.817742 ,
            longitude: 15.9760525 }}
            title={"PMS"}
            description={"Tkalčićeva 61"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>10</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8113601 ,
            longitude: 15.9747227 }}
            title={"Galerija Forum"}
            description={"Teslina 16"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>11</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8098056 ,
            longitude: 15.9812244 }}
            title={"Regeneracija"}
            description={"Boškovićeva 7b"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>12</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8064397 ,
            longitude: 15.9820992 }}
            title={"Academia Moderna"}
            description={"Ulica Augusta Šenoe 11"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>13</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8131559 ,
            longitude: 15.970327 }}
            title={"Galerija Garaža Kamba"}
            description={"Ilica 37"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>14</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8091324 ,
            longitude: 15.9775482 }}
            title={"Moderna Galerija"}
            description={" Ul. Andrije Hebranga 1"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>15</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 45.8063989 ,
            longitude: 15.9648377 }}
            title={"Galerija Siva"}
            description={"Ul. Luigija Pierottia 11"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>16</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.8685895 ,
            longitude: 13.8523373 }}
            title={"HUIU"}
            description={"Zagrebačka 27"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>1</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.8700754 ,
            longitude: 13.8424204 }}
            title={"Galerija Cvajner"}
            description={"Forum 2"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>2</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.871539 ,
            longitude: 13.8465455 }}
            title={"Galerija Poola"}
            description={"Kandlerova 14"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>3</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.867543 ,
            longitude: 13.8469819 }}
            title={"Gradska Galerija Antun Motika"}
            description={"Laginjina 5"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>4</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.8703767 ,
            longitude: 13.8423659 }}
            title={"Galerija Makina"}
            description={"Kapitolinski trg 1"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>5</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.87341 ,
            longitude: 13.849463 }}
            title={"Galerija Amfiteatar"}
            description={"Flavijevska Ulica"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>6</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.8708131 ,
            longitude: 13.8480637 }}
            title={"Galerija C8"}
            description={"Carrarina 8"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>7</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.8692719 ,
            longitude: 13.8450522 }}
            title={"Sveta Srca"}
            description={"De Villeov uspon 8"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>8</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.8699662 ,
            longitude: 13.8421835 }}
            title={"Augustov hram"}
            description={"Forum"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>9</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.8673793 ,
            longitude: 13.8531455 }}
            title={"Studentska Galerija"}
            description={"Sv. Mihovila 3"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>10</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.863223 ,
            longitude: 13.844179 }}
            title={"Udruga UCIPŽ"}
            description={"Ljudevita Gaja 3"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>11</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.863063 ,
            longitude: 13.844769 }}
            title={"Dnevni Boravak DC Rojc"}
            description={"Ljudevita Gaja 3"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>12</Text>
         </View>
         </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 44.863512 ,
            longitude: 13.844769 }}
            title={"Kotač"}
            description={"Ljudevita Gaja 3"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>13</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude: 45.3278641 ,
            longitude: 14.4401113 }}
            title={"Galerija Kortil"}
            description={"Kružna 8"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>1</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude: 45.3267418 ,
            longitude: 14.4423539 }}
            title={"Mali Salon"}
            description={"Korzo 24"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>2</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude: 45.3283201 ,
            longitude: 14.4417273 }}
            title={"Erste Club Galerija"}
            description={"Frana Supila 6"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>3</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude: 45.324851 ,
            longitude: 14.442585 }}
            title={"Galerija Juraj Klović"}
            description={"Verdijeva ul. 19 b"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>4</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude: 45.327179 ,
            longitude: 14.449395 }}
            title={"Atelje"}
            description={"Križanićeva 2a"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>5</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude: 45.327611 ,
            longitude: 14.44378 }}
            title={"Galerija Principij"}
            description={"Pod Voltun 4"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>6</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude: 45.327394 ,
            longitude: 14.443083 }}
            title={"Galerija RiArt"}
            description={"Marka Marulića 10"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>7</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude: 45.3289515 ,
            longitude: 14.4396146 }}
            title={"Klub mladih Rijeka"}
            description={"Erazma Barčića 9a"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>8</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker
            coordinate={{latitude:  45.333176 ,
            longitude: 14.423682 }}
            title={"KIWI – Creative space"}
            description={"Krešimirova 60g"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>9</Text>
         </View>
         </MapView.Marker>
         
         <MapView.Marker                                                                                                                                                              
            coordinate={{latitude:  45.327965 ,
            longitude: 14.439476 }}
            title={"Galerija SKC"}
            description={"Strossmayerova 1"}
         >
         <View style={{ flex: 1, width: 27, height: 27, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text style={{textAlign: 'center', color: '#ffffff', fontFamily: 'Baloo', fontSize: 19,}}>10</Text>
         </View>
         </MapView.Marker>

         
          </MapView>
          }
        </View>
          
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
  });
  