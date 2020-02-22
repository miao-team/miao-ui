import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import PropTypes from 'prop-types';
import classNames from 'classnames'

import "../style/EGrid.scss";
export default class EGrid extends Component<EGridState, EGridProps> {


  static options = {
    addGlobalClass: true
  };

  constructor() {
    super(...arguments);
  }
  render() {
    const {
      style,
      className,
      col,
      gap,
      gapX,
      gapY,
      scrollX,
      scrollY,
      height,
      width
    } = this.props

   // col = col > 99 ? 100 : col;

    return <View style={style} className={
      classNames({
        'fx-grid-wrap': true,
        ['col-' + col]: col,
        ['gap-' + gap]: gap,
        ['row-gap-' + gapX]: gapX,
        ['col-gap-' + gapY]: gapY,
        'scroll-x': scrollX,
        'scroll-y': scrollY,

      }, className)
    }>
      {this.props.children}
    </View>
  }
}
