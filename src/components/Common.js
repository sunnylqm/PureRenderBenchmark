import React, { Component } from 'react';
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

export default class Common extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>C{this.props.data.text}</Text>
      </View>
    );
  }
}
