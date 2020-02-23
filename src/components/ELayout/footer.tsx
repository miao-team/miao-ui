import Nerv from "nervjs";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { View } from '@tarojs/components';
import { EProps } from '../../../@types/footer'
import { EProps as ETabBarPrpos } from "../../../@types/tabbar"
import { classNames } from '../../utils'
import ETabBar from '../ETabBar'

export default class EFooter extends Component<EProps> {



    private componentType?: string;
    static options = {
        addGlobalClass: true
    };

    static defaultProps = {

    }

    constructor(props: EProps) {
        super(props)

        if (Object.keys(props.children).indexOf('componentType') >= 0) {
            this.componentType = props.children.componentType;
        }
    }
    componentDidMount() {

        this.countHeight();
    }

    componentDidUpdate() {
        this.countHeight();
    }


    componentWillMount() {

        if (this.componentType) {
            Taro.eventCenter.on(`broadcast.${this.componentType}.view.height`, height => {
                Taro.eventCenter.trigger('broadcast.footer.view.height', height);
            })
        }

    }
    render() {
        if (this.componentType) {
            const Views = {
                "tabbar": <ETabBar  {...this.props.children} />,
            };
            return <View className="EFooter" id="EFooter">
                {Views[this.componentType]}
            </View>;

        }
        return <View className="EFooter" id="EFooter">{this.props.children}</View>;




    }
    countHeight() {
        if (!this.componentType) {
            const query = Taro.createSelectorQuery().in(this.$scope);
            query.select('#EFooter').boundingClientRect(rect => {
                if (rect) {
                    Taro.eventCenter.trigger('broadcast.footer.view.height', rect.height);
                }
            }).exec();
        }

    }

}
