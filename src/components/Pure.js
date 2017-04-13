import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width / 10,
    height: height / 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Pure extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>P{this.props.data.text}</Text>
      </View>
    );
  }
}
