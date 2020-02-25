import Taro, { Component } from "@tarojs/taro";
import { View } from '@tarojs/components';
import { EProps } from "../../../@types/header"
import { classNames, throttle } from '../../utils'
import ENavBar from '../ENavBar'

export default class EHeader extends Component<EProps> {


    private componentType?: 'navbar' | 'nav';
    private componentParams?: any;
    static options = {
        addGlobalClass: true
    };

    constructor(props: EProps) {
        super(props);

        if (typeof props.children === "string") {
            this.componentType = "navbar"
            this.componentParams = {
                title: props.children
            }
        } else if (Object.keys(props.children).indexOf('componentType') >= 0) {
            this.componentType = props.children.componentType;
            this.componentParams = props.children
        }
    }




    render() {
        let componentsView: any = "";

        switch (this.componentType) {
            case "navbar": componentsView = <ENavBar {...this.componentParams} />; break;
            default: componentsView = this.props.children; break;

        }
        return (
            <View className={classNames("EHeader", this.props.className)} style={this.props.style} >{componentsView}</View >
        );
    }



    componentDidMount() {
        this.onPageComponentOffset()
    }


    componentDidUpdate() {
        //this.onPageComponentOffset()
    }

    private onPageComponentOffset = () => {


        throttle({
            method: () => {
                Taro.createSelectorQuery().in(process.env.TARO_ENV== "h5" ? this : this.$scope).select('.EHeader').boundingClientRect((headerOffset) => {
                    headerOffset && Taro.eventCenter.trigger("page.content.header.height", headerOffset.height)
                }).exec();
            },
            //delay:1000,
            type: "page.content.header.height"
        })
    }
    componentWillUnmount() {

        Taro.eventCenter.off("page.content.header.height");
    }

}
