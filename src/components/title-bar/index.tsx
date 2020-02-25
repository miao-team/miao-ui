import Nerv from "nervjs";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classNames from 'classnames'

import { EProps } from '../../../@types/titlebar'
import { BG_COLOR_LIST } from "../../utils/model";
import "../../../styles/title-bar.scss";



export default class ETitleBar extends Component<EProps>{

    static options = {
        addGlobalClass: true
    };

    constructor(props: EProps) {
        super(props);

    }


    static defaultProps: EProps = {
        bgColor: "white",
        textColor: "black",
        type: "sub-title",
        borderLong: 20,
        borderColor: "black",
        icon: "title",
        iconColor: "grey",
        title: "",
        subTitle: "",
        subTitleColor: "gray",
        description: '',

    };


    toMoreURI(uri) {
        Taro.navigateTo({ url: uri })
    }

    render() {
        const textColorClassName = this.props.textColor
            ? `text-${this.props.textColor}`
            : ``;
        const borderColorClassName = this.props.borderColor
            ? BG_COLOR_LIST[this.props.borderColor]
            : "bg-green";
        const bgColorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : `bg-white`;
        const iconClassName = this.props.icon ? `EIcon-${this.props.icon}` : ``;
        const iconColorClassName = this.props.iconColor
            ? `text-${this.props.iconColor}`
            : ``;



        const rightLinkView = this.props.renderRight ? this.props.renderRight :
            (
                this.props.rightLink ?
                    (
                        (typeof this.props.rightLink === "object") ?
                            <View className="more link" onClick={this.toMoreURI.bind(this, this.props.rightLink.url || "#")}
                            >{this.props.rightLink.text || "更多"}</View> :
                            <View className="more">{this.props.rightLink || "..."}</View>
                    ) :
                    "")
        const borderComponent = (
            <View className="action border-title justify-between">
                <View>
                    <Text className={`${textColorClassName} text-bold text-xl`}>
                        {this.props.title}
                    </Text>
                    <Text
                        className={`${borderColorClassName}`}
                        style={{ width: `${pxTransform(this.props.borderLong || 20)}` }}
                    />
                </View>
                <View>{rightLinkView}</View>
            </View>
        );
        const subComponent = (
            <View className="action sub-title justify-between">
                <View>
                    <View className={`text-xl text-bold ${textColorClassName}`}>
                        {this.props.title}
                    </View>
                    {this.props.subTitle ? (
                        <View className={classNames({
                            [`text-${this.props.subTitleColor}`]: this.props.subTitleColor
                        }, 'text-sm')}>
                            {this.props.subTitle}
                        </View>
                    ) : (
                            <View className={`${borderColorClassName}`}>{}</View>
                        )}
                </View>
                <View>{rightLinkView}</View>
            </View>
        );




        const iconComponent = (
            <View className="action justify-between">
                <View>
                    <Text className={`${iconClassName} ${iconColorClassName}`} />
                    <Text className={`text-xl text-bold ${textColorClassName}`}>
                        {this.props.title}
                    </Text>
                </View>
                <View>{rightLinkView}</View>
            </View>
        );
        return (
            <View
                className={classNames(
                    `${bgColorClassName} Ebar`,
                    this.props.className
                )
                }
                style={Object.assign({}, this.props.style)}
            >
                {this.props.type === "border-title" ? borderComponent : ""}
                {this.props.type === "sub-title" ? subComponent : ""}
                {this.props.type === "icon" ? iconComponent : ""}
            </View >
        );
    }
}
