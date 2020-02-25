import Taro, { Component } from "@tarojs/taro";
import { View } from '@tarojs/components';
import { EProps } from "../../../@types/header"
import { throttle } from '../../utils'
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
            //    delete props.componentType;
            this.componentParams = props.children
        }





    }




    render() {
        let componentsView: any = "";

        switch (this.componentType) {
            case "navbar":
                componentsView = <ENavBar {...this.componentParams} />;
                break;

            default:
                componentsView = this.props.children;
                break;

        }

        return (
            <View className="EHeader">{componentsView}</View >
        );
    }

}
