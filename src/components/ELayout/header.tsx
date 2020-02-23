import Taro, { Component } from "@tarojs/taro";
import { View } from '@tarojs/components';
import { EProps } from "../../@types/header"
import { throttle } from '../../utils'
import ENavBar from '../ENavBar'

export default class EHeader extends Component<EProps> {
    static options = {
        addGlobalClass: true
    };
    constructor(props: EProps) {
        super(props);
    }






    componentDidMount() {
        this.countHeight();
    }

    /**
     * 开始监听
     * @return {[type]} [description]
     */
    componentWillMount() {
        if (typeof this.props.children === "string")
            Taro.eventCenter.on('broadcast.navbar.view.height', (height) => {
                Taro.eventCenter.trigger('broadcast.header.view.height', height)
            })
    }

    componentDidUpdate() {
        this.countHeight();
    }

    countHeight() {
        if (typeof this.props.children !== "string") {
            const query = Taro.createSelectorQuery().in(this.$scope);
            query.select('.EHeader').boundingClientRect(rect => {
                rect && Taro.eventCenter.trigger('broadcast.header.view.height', rect.height);
            }).exec();

        }
    }


    render() {
        let componentsView: any = "";

        if (typeof this.props.children === "string") {
            componentsView = <ENavBar title={this.props.children} />;
        }
        return (
            <View className="EHeader" id="EHeader">
                {typeof this.props.children === "string"?componentsView:this.props.children}
            </View >
        );
    }

}
