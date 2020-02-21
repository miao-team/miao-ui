import Nerv from "nervjs";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { View } from '@tarojs/components';
import { EProps } from '../../@types/footer'
import { classNames } from '../../utils'
import { ETabBar } from '../ETabBar'
export default class EFooter extends Component<EProps> {

    static options = {
        addGlobalClass: true
    };

    componentDidMount() {
        this.countHeight();
    }

    componentDidUpdate() {
        this.countHeight();
    }



    render() {

        return <View
            id="EFooter"
            className={classNames('EFooter', this.props.className)}
            style={Object.assign(
                {},
                (this.props.children && this.props.children.name == "ETabBar") ? { height: '55px' } : {}, this.props.style)}
        >
            {this.props.children}
        </View>;
    }

    countHeight() {


        const query = Taro.createSelectorQuery().in(this.$scope);
        query.select('.EFooter').boundingClientRect(rect => {
            if (rect) {
                Taro.eventCenter.trigger('EventSetFooterStyle', rect);
            }
        }).exec();
    }

}
