import Taro, { Component, pxTransform, useEffect, useState } from "@tarojs/taro";
import { Text, View, Image } from "@tarojs/components";
import { isNumber, generateId, classNames } from '../../utils'
import { EProps } from '../../../@types/list'


import EItem from '../item';

import "../../../styles/list/index.scss"
/**
 *   列表项目
 *   @type {Object}
 */

export default class EList extends Component<EProps> {

    static options = {
        addGlobalClass: true,
        Version: 1.0
    }

    private currentComponentView?: JSX.Element;

    constructor(props: EProps) {
        super(props)
    }

    static defaultProps: EProps = {
        list: [],
    }


    render(): JSX.Element {


        return (
            <View className={classNames('EList', {
                [`bg-${this.props.bgColor}`]: this.props.bgColor,
                [`text-${this.props.color}`]: this.props.color,
                'card': this.props.card,
                'solid': this.props.border,
                'column': this.props.itemType == 'column',
                [`gap-${this.props.itemMargin}`]: this.props.itemMargin && this.props.itemType == 'column',
                [`gap-x-${this.props.itemMarginX}`]: this.props.itemMarginX && this.props.itemType == 'column',
                [`gap-y-${this.props.itemMarginY}`]: this.props.itemMarginY && this.props.itemType == 'column',
                [`column-${this.props.itemColumn}`]: this.props.itemColumn && this.props.itemType == 'column',

                [`padding-${this.props.itemPadding}`]: this.props.itemPadding && this.props.itemType == 'column',
                [`padding-lr-${this.props.itemPaddingX}`]: this.props.itemPaddingX && this.props.itemType == 'column',
                [`padding-tb-${this.props.itemPaddingY}`]: this.props.itemPaddingY && this.props.itemType == 'column',
            },
                this.props.className
            )}

                children={
                    this.props.list.map(item => {
                        item = Object.assign({}, item, {
                            className: classNames(item.className, {
                                'solid-bottom': this.props.border,
                                [`${this.props.borderType}`]: this.props.borderType,
                            }),
                            type: this.props.itemType,
                            arrow: this.props.arrow,
                            checked: this.props.checked,
                            checkbox: this.props.checkbox,

                            titleColor: this.props.titleColor,
                            titleSize: this.props.titleSize,
                            titleRows: this.props.titleRows,
                            subTitleColor: this.props.subTitleColor,
                            subTitleSize: this.props.subTitleSize,
                            subTitleRows: this.props.subTitleRows,
                            imagePosition: this.props.imagePosition,
                            imageSize: this.props.imageSize,
                            imageType: this.props.imageType,
                            imageClassName: this.props.imageClassName,
                            itemPadding: this.props.itemPadding,
                            itemPaddingX: this.props.itemPaddingX,
                            itemPaddingY: this.props.itemPaddingY,
                            itemMargin: this.props.itemMargin,
                            itemMarginX: this.props.itemMarginX,
                            itemMarginY: this.props.itemMarginY,
                            imageWidth: this.props.imageWidth,
                            imageHeight: this.props.imageHeight,
                        })
                        return <EItem {...item} />
                    })
                } />
        )


    }


}
