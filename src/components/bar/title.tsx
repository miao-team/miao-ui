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
        //bgColor: "white",
        color: "black",
        //className: 'solid-bottom',
        subTitleColor: "gray",
    };


    toMoreURI(uri) {
        Taro.navigateTo({ url: uri })
    }

    render() {



        return (
            <View
                className={classNames(
                    'title-bar border',
                    {
                        'shadow':this.props.shadow,
                        [`bg-${this.props.bgColor}`]: this.props.bgColor,
                        [`text-${this.props.color}`]: this.props.color,
                    },
                    this.props.className)}
                style={Object.assign({}, this.props.style)}
            >
                <View className="flex action justify-between">


                    {this.props.icon && <View className={classNames({
                        [`text-${this.props.iconColor}`]: this.props.iconColor,
                    }, "tilte-icon")}>
                        <Text className={`EIcon-${this.props.icon}`} style={{
                            fontSize: `${this.props.iconSize || '32'}px`,
                        }} />
                    </View>}

                    <View className={classNames({
                        //border:this.props.border
                    }, "title")}>


                        <View className={classNames(
                            "text-bold",
                            {
                                [`text-${this.props.titleColor}`]: this.props.titleColor,
                            },
                            this.props.titleFontSize ? `text-${this.props.titleFontSize}` : `text-xl`,
                            this.props.titleCustomClassName)}>
                            {this.props.title}
                        </View>
                        {this.props.subTitle && (
                            <View className={classNames(
                                'sub-title',
                                {
                                    [`text-${this.props.subTitleColor}`]: this.props.subTitleColor
                                },
                                this.props.subTitleFontSize ? `text-${this.props.subTitleFontSize}` : `text-sm`,
                                this.props.subTitleCustomClassName)}>
                                {this.props.subTitle}
                            </View>
                        )}



                    </View>
                    <View>{this.props.right}</View>
                </View>
            </View >
        );
    }
}
