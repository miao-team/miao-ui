
import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import PropTypes from 'prop-types';
import classNames from 'classnames'

import "../style/ECard.scss";
export default class ECard extends Component<ECardProps, ECardState> {


    static options = {
        addGlobalClass: true
    };

    constructor() {
        super(...arguments);
    }
    render() {
        const {
            style,
            className,
            /**
             * card 类型
             * full: 全屏
             * card: 卡片式
             */
            type,

            // header 区
            headerView,
            title,
            description,
            controller,
            //  footer 区
            footerView,
            // 全局区
            border,
            radius,
            boxshohw,
        } = this.props


        return <View style={style} className={
            classNames({
                'full': type == 'full',
                'card': type == 'card',
                'border': border,
                'boxshohw': boxshohw,
            }, 'fx-card-wrap', className)
        }>

            {headerView ? headerView : (
                title && <View className="card-header">
                    <View className="__body">
                        <View className="__title">{title}</View>
                        {controller && <View className="__ctrl">{controller}</View>}
                    </View>
                    {description && <View className="__description">{description}</View>}
                </View>
            )}

            <View className="card-main">
                {this.props.children}
            </View>
            {footerView && <View className="card-footer">{footerView}</View>}
        </View>
    }
}
