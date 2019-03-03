import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Permissions } from 'expo-permissions';

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
  _handleBarCodeRead = () => this.props.navigation.navigate('Relimain');

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
          onBarCodeRead={this._handleBarCodeRead}
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