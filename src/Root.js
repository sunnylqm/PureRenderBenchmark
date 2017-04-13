import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
// const performanceNow = require('fbjs/lib/performanceNow');

const isPureRender = true;
// const isPureRender = false;  // 切换两种组件的开关
const CustomView = isPureRender ?
  require('./components/Pure').default : require('./components/Common').default;
const iterate = 100;  // 遍历次数

export default class Root extends Component {
  state = {
    // 生成长为100的数组，填充简单的对象，作为数据源
    dataSource: new Array(iterate).fill({ text: 1 })
  };
  // 设定遍历的起始值，从100递减到0结束
  start = iterate;
  render() {
    const { dataSource } = this.state;
    // 生成100个子组件
    return (
      <View style={styles.root}>
        {
          dataSource.map((item, index) => <CustomView key={index} data={item} />)
        }
      </View>
    );
  }
  componentDidMount() {
    this.startTime = new Date(); // 初次渲染完成后开始计时
    this.nextUpdate(); // 开始100次对state的修改
  }
  nextUpdate = () => {
    if(this.start > 0) {
      this.start -= 1;
      this.setState(({ dataSource }) => { // 取出state中的dataSource
        if (isPureRender) {
          // Pure组件遵循immutable原则，给予新的对象，以便浅比较能返回false
          dataSource[this.start] = { text: 2 };
        } else {
          // Common组件可以直接修改原值
          dataSource[this.start].text = 2;
        }
        return { dataSource }; // 返回修改后的state值
      });
    } else {
      alert(new Date() - this.startTime);  // 100次修改结束后查看消耗的时长
    }
  };
  componentDidUpdate() {
    this.nextUpdate();  // 父组件重渲染完成后进行下一次对state的修改
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
