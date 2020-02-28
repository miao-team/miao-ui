import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import { EProps } from '../../../@types/panel'
export interface EState { }
import ETitleBar from '../bar/title'
import EText from '../text'
import { classNames } from '../../utils'



import "../../../styles/panel.scss";



const headerType = {
    titlebar: ETitleBar,
    text: EText,

}


let headerReactDomComponentView, footerReactDomComponentView;

export default class EPanel extends Component<EProps, EState> {
    static options = {
        addGlobalClass: true,
        Version: 1.2
    };

    static defaultProps: EProps = {
    }

    constructor(props: EProps) {
        super(props);



        if (props.title) {
            if (!Taro.isValidElement(props.title)) {
                (typeof props.title == 'object') ?
                    (!props.title.hasOwnProperty('componentType') && (props.title['componentType'] = "titlebar")) :
                    ((props.title = { componentType: 'titlebar', title: props.title }));
                props.titleClassName && (props.title['className'] = props.titleClassName);
                props.subTitle && (props.title['subTitle'] = props.subTitle);
                headerReactDomComponentView = Taro.createElement(headerType[props.title['componentType']], props.title);
            }
        }


    }



    render() {
        return (
            <View
                className={classNames(
                    "fx-panel-wrap",
                    {
                        'clear-fix-top': this.props.clearFixTop,
                        'clear-fix-bottom': this.props.clearFixBottom,
                        [`text-${this.props.color}`]: this.props.color,
                        [`bg-${this.props.bgColor}`]: this.props.bgColor
                    },
                    this.props.className)
                }>

                <View className={classNames('panel-header',this.props.headerClassName)} children={headerReactDomComponentView}/>
                <View className={classNames('panel-body', this.props.bodyClassName)} children={this.props.children}/>
                <View className={classNames('panel-footer',this.props.footerClassName)}>{this.props.footer && this.props.footer}</View>
            </View>
        )
    }
}
