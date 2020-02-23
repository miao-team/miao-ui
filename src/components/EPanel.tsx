import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import { EProps } from '../../@types/panel'
export interface EState { }
import ETitleBar from './ETitleBar'
import { classNames } from '../utils'
import "../style/EPanel.scss";

export default class EPanel extends Component<EProps, EState> {
    static options = {
        addGlobalClass: true
    };
    constructor(props: EProps) {
        super(props);
    }

    render() {
        const {
            title,
            description,
            className,
            rightLink,
            headerClassName,
            bodyClassName,
            footerClassName,
            headerBorder,
            footerBorder,
            footer,
            clearFixTop,
            clearFixBottom
        } = this.props



        return (
            <View

                className={
                    classNames({
                        'fx-panel-wrap': true,
                        //'padding-15': !className || className.toString().indexOf('padding-') == -1,
                        'clear-fix-top': clearFixTop,
                        'clear-fix-bottom': clearFixBottom
                    }, className)
                }>

                {title ? (
                    <View
                        className={
                            classNames({
                                'panel-header': true,
                                'solid-bottom': headerBorder
                            }, headerClassName)
                        }>

                        <ETitleBar
                            title={title}
                            subTitle={description}
                            type="sub-title"
                            className="padding-b-0"
                            rightLink={this.props.rightLink}
                        />
                    </View>
                ) : null}



                <View className={
                    classNames({
                        'panel-body': true,
                    }, bodyClassName)
                }>
                    {this.props.children}
                </View>

                {footer && <View className={
                    classNames({
                        'panel-footer': true,
                        'footer-border': footerBorder
                    }, footerClassName)
                }>
                    Footer
                                        </View>}





            </View>
        )
    }
}
