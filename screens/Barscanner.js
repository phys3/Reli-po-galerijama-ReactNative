import React from 'react';
import { StyleSheet, Text, View, Alert, AsyncStorage } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Permissions } from 'expo-permissions';
const galerije = ["ri1", "ri2", "ri3", "ri4", "ri5", "ri6", "ri7", "ri8", "ri9", "zg1", "zg2", "zg3", "zg4", "zg5", "zg6", "zg7", "zg8", "zg9", "zg10", "zg11", "zg12", "zg13", "zg14", "zg15", "zg16", "zg17", "pu1", "pu2", "pu3", "pu4", "pu5", "pu6", "pu7", "pu8", "pu9", "pu10", "pu11", "pu12", "pu13", "pu14", "pu15",];


export default class Barscreen extends React.Component {
  state = {
    hasPermissionsGranted: null,
    type: BarCodeScanner.Constants.Type.back,
  };
  static navigationOptions = {
    header: null,
  };

  async componentDidMount() {
    let { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermissionsGranted: (status === 'granted') });
  }



  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeRead={(data) => {
            {
              for (let i in galerije) {
                if (galerije[i] == data.data) {
                  AsyncStorage.setItem(data.data , 'flex');
                  this.props.navigation.navigate('Relimain');
                }}
          }}}
          barCodeTypes={[
            BarCodeScanner.Constants.BarCodeType.qr,
            BarCodeScanner.Constants.BarCodeType.pdf417,
          ]}
          type={this.state.type}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
      </View>
    );
  }
}