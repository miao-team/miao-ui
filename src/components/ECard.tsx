
import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import PropTypes from 'prop-types';
import { EProps } from '../utils'
import { classNames } from '../utils'
import ETitleBar from './ETitleBar'
import "../style/ECard.scss";
export default class ECard extends Component<EProps> {


    static options = {
        addGlobalClass: true
    };

    constructor(props: EProps) {
        super(props);
    }
    render() {


        return <View style={{ ...this.props.style }} className={
            classNames({
                [`${this.props.cardType}`]: this.props.cardType,
                [`bg-${this.props.bgColor}`]: this.props.bgColor,
                'border solid': this.props.border,
                'shadow': this.props.shadow,

            }, 'ECard', this.props.className)
        }>

            {this.props.header ? this.props.header : (
                <ETitleBar
                    className={classNames({
                        [`solid-bottom`]: this.props.border
                    })}
                    title={this.props.title}
                    subTitle={this.props.subTitle}
                    subTitleColor={this.props.subTitleColor}
                    rightLink={this.props.rightLink}
                    bgColor={this.props.bgColor}
                />
            )}

            <View className="card-main">
                {this.props.children}
            </View>
            {this.props.footer && <View className="card-footer">{this.props.footer}</View>}
        </View>
    }
}
