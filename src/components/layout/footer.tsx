import Nerv from "nervjs";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { View } from '@tarojs/components';
import { EProps } from '../../../@types/footer'
import { EProps as ETabBarPrpos } from "../../../@types/tabbar"
import { classNames, throttle } from '../../utils'
import ETabBar from '../tab-bar'

export default class EFooter extends Component<EProps> {

    private componentType?: string;
    private componentParams?: any;

    static options = {
        addGlobalClass: true
    };
    constructor(props: EProps) {
        super(props)

        this.state = {
            footerHeight: 0
        }

        if (Object.keys(props.children).indexOf('componentType') >= 0) {
            this.componentType = props.children.componentType;
            this.componentParams = props.children
        }
    }
    render() {

        let componentsView: any = "";
        switch (this.componentType) {
            case "tabbar":
                componentsView = <ETabBar {...this.componentParams} />;
                break;
            default:
                componentsView = this.props.children;
                break;
        }
        return <View
            className={classNames("EFooter", this.props.className)}

        >{componentsView}</View>;
    }


    componentDidMount() {
        this.onPageComponentOffset()
    }


    componentDidUpdate() {
        this.onPageComponentOffset()
    }

    private onPageComponentOffset = () => {

        Taro.createSelectorQuery().in(process.env.TARO_ENV == "h5" ? this : this.$scope).select('.EFooter').boundingClientRect((footerOffset) => {
            footerOffset && Taro.eventCenter.trigger("page.content.footer.height", footerOffset.height)
        }).exec();
        // throttle({
        //     method: () => {
        //
        //
        //     },
        //     //delay:10000,
        //     type: "page.content.footer.height"
        // })
    }

    componentWillUnmount() {

        Taro.eventCenter.off("page.content.footer.height");
    }


}
