/**
 * Created by tdzl2003 on 12/17/16.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
// const performanceNow = require('fbjs/lib/performanceNow');

// const isPureRender = true;
const isPureRender = false;
const CustomView = isPureRender ?
  require('./components/Pure').default : require('./components/Common').default;
const iterate = 100;

export default class Root extends Component {
  state = {
    dataSource: new Array(iterate).fill({ text: 1 })
  };
  start = iterate;
  render() {
    const { dataSource } = this.state;
    return (
      <View style={styles.root}>
        {
          dataSource.map((item, index) => <CustomView key={index} data={item} />)
        }
      </View>
    );
  }
  componentDidMount() {
    this.startTime = new Date();
    this.nextUpdate();
  }
  nextUpdate = () => {
    if(this.start > 0) {
      this.start -= 1;
      this.setState(({ dataSource }) => {
        if (isPureRender) {
          dataSource[this.start] = { text: 2 };
        } else {
          dataSource[this.start].text = 2;
        }
        return { dataSource };
      });
    } else {
      alert(new Date() - this.startTime);
    }
  };
  componentDidUpdate() {
    this.nextUpdate();
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
