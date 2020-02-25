
import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { EProps } from '../../../@types/card'
import { classNames } from '../../utils'
import ETitleBar from '../title-bar'
import "../../../styles/card.scss";
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
                'card': this.props.card,
                [`bg-${this.props.bgColor}`]: this.props.bgColor,
                'border solid': this.props.border,
                'shadow': this.props.shadow,
            }, 'ECard', this.props.className)
        }>

            {this.props.header ? this.props.header : (
                this.props.title && <ETitleBar
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

            <View
                className={classNames("card-main", this.props.contentClassName)}
                style={{ ...this.props.contentStyle }}>
                {this.props.children}
            </View>
            {this.props.footer && <View className="card-footer">{this.props.footer}</View>}
        </View>
    }
}
