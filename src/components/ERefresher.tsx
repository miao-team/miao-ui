import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

class Refresher extends Component {
  static options = {
    addGlobalClass: true
  };

  constructor() {
    super(...arguments);
    this.state = {
      baseSize: 0.4
    };
  }

  render() {
    const { baseSize } = this.state;
    const start = 70;
    const centerSize = {
      transform:
        this.props.complete > start
          ? `scale(${(this.props.complete - start) * 0.045 + 0.25})`
          : `scale(0.25)`,
      "-webkit-transform":
        this.props.complete > start
          ? `scale(${(this.props.complete - start) * 0.045 + 0.25})`
          : `scale(0.25)`
    };
    return (
      <View className="Refresher">
        <View className="ball-spin-fade-loader">
          <View></View>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
        </View>
        {/* <View className="spot" style={{
        transform: `translate3d(${this.props.complete * baseSize}px,0,0) scale(0.25)`,
        "-webkit-transform": `translate3d(${this.props.complete * baseSize}px,0,0) scale(0.25)`
      }}></View>
      <View className="spot center" style={centerSize}>
        {this.props.complete == 100 ? <View className={this.props.isRefreshing ? 'exe active' : 'exe'}>
          <View className="loader-spot"></View>
        </View> : null}
      </View>
      <View className="spot" style={{
        transform: `translate3d(${-this.props.complete * baseSize}px,0,0) scale(0.25)`,
        "-webkit-transform": `translate3d(${-this.props.complete * baseSize}px,0,0) scale(0.25)`
      }}></View> */}
      </View>
    );
  }
}
export default Refresher;
