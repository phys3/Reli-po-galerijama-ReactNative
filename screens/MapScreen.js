import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
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
                        "visibility": "off"
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
            coordinate={{latitude: 45.814553 ,
            longitude: 15.995771}}
            title={"Galerija 1"}
            description={"Galerija 1 je dobra"}
         >
         <View style={{ width: 22, height: 22, borderRadius: 50, backgroundColor: '#9c4ddd', }}>
         <Text>1</Text>
         </View>
         </MapView.Marker>
         <MapView.Marker
            coordinate={{latitude: 45.809348 ,
            longitude: 15.979185}}
            title={"Galerija 2"}
            description={"Galerija 2 je bolja"}
         >
         <View style={{ width: 22, height: 22, borderRadius: 50, backgroundColor: '#9c4ddd', }} />
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
  