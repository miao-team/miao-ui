import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

export default class EHeader extends Component {

  static options = {
    addGlobalClass: true
  };

  componentDidMount() {
    this.countHeight();
  }

  componentDidUpdate() {
    this.countHeight();
  }

  countHeight() {
    const query = Taro.createSelectorQuery();
    {
      query.in(this);
    }
    query.select('.EHeader').boundingClientRect(rect => {
      if (rect) {
        Taro.eventCenter.trigger('ESetHeader', rect);
      }
    }).exec();
  }
  render() {
    return <View className="EHeader">
      {this.props.children}
      {this.props.headerFix && <View className="clearfix"></View>}
    </View>;
  }
}
EHeader.PropTypes = {
  headerFix: PropTypes.bool,
}