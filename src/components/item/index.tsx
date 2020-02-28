import Taro, { Component, pxTransform, useEffect, useState } from "@tarojs/taro";
import { Text, View, Image } from "@tarojs/components";
import { isNumber, generateId, classNames } from '../../utils'
import { EProps } from '../../../@types/item'
import "../../../styles/list/item.scss"
/**
 *   列表项目
 *   @type {Object}
 */

export default class EItem extends Component<EProps> {

    static options = {
        addGlobalClass: true,
        Version: 1.0
    }

    private currentComponentView?: JSX.Element;

    constructor(props: EProps) {
        super(props)
    }

    static defaultProps: EProps = {
        type: 'column',
        bgColor: 'white',
        imagePosition: 'auto'
    }

    private getImagePosition = (imageList: any[]): string => {

        if (this.props.type == "column") return 'top';
        if (this.props.imagePosition || this.props.imagePosition != "auto") {
            return this.props.imagePosition;
        } else {
            if (imageList.length == 1) {
                return "left";
            } else if (imageList.length >= 1) {
                return "center";
            }
        };
    }




    private getImage = () => {
        return (!this.props.image ? [] : (Array.isArray(this.props.image) ? this.props.image : [this.props.image])).map(function(item) {
            return typeof item == 'string' ? { url: item } : item;
        })
    }
    private getExtends = () => {
        return (!this.props.extends ? [] : (Array.isArray(this.props.extends) ? this.props.extends : [this.props.extends])).map(function(item) {
            return typeof item == 'string' ? { text: item } : item;
        })
    }
    private getControls = () => {
        return (!this.props.controls ? [] : (Array.isArray(this.props.controls) ? this.props.controls : [this.props.controls])).map(function(item) {
            return typeof item == 'string' ? { text: item } : item;
        })
    }



    private getExtendsViews = (): JSX.Element => {
        return <View
            className="extends"
            children={
                this.getExtends().map(item => {
                    return <Text className={classNames(`text-${item.size || 'sm'}`, `text-${item.color || "gray"}`, item.className
                    )} children={item.text} />
                })
            }
        />
    }


    private getControlsViews = () => {
        return <View
            className=""
            children={
                this.getControls().map(item => {
                    return <Text className={classNames(
                        `text-${item.size || 'sm'}`,
                        `text-${item.color || "gray"}`,
                        item.className
                    )} children={item.text} />
                })
            }
        />
    }



    private getImageListView = (index?: number): JSX.Element[] => {



    }



    private getSubTitleClassName = (): string => {
        return classNames(
            'item-sub-title',
            `text-cut-${this.props.subTitleRows || 1}`,
            `text-${this.props.subTitleColor || "gray"}`,
            `text-${this.props.subTitleSize || "md"}`,
        );
    }



    private getTitleClssName = (): string => {
        return classNames(
            'item-title',
            `text-cut-${this.props.titleRows || 1}`,
            `text-${this.props.titleSize || "xl"}`,
            {
                [`text-${this.props.titleColor}`]: this.props.titleColor
            }
        );
    }

    /**
     *   横向排列 布局
     *   @type {[type]}
     */

    private renderRowsComponent = () => {

        const imageList = this.getImage();
        const imagePosition = this.getImagePosition(imageList);

        const listNumbers = {
            left: 1,
            right: 1,
            center: 6,
            top: 6,
            bottom: 6
        }


        const imageListView = imageList.slice(0, listNumbers[imagePosition]).map(imageItem => {
            return <Image
                className={classNames(
                    `image-${imageItem.size || this.props.imageSize || 'xl'}`,
                    `${imageItem.type || this.props.imageType || 'radius'}`,
                    imageItem.className || this.props.imageClassName,

                )}
                style={{
                    width: `${this.props.imageWidth}px`,
                    height: `${this.props.imageHeight}px`,
                }}
                src={imageItem.url}
            />
        })


        const imagePositionView = <View className={classNames(
            `thumb-${imagePosition}`,
            `image-${imageListView.length > 3 ? 'more' : imageListView.length}`
        )} children={imageListView}
        />

        this.currentComponentView = <View className={classNames('item-body flex justify-between', {
            'arrow': this.props.arrow,
            'checked': this.props.checked,
            'check-box': this.props.checkbox,
            [`bg-${this.props.bgColor}`]: this.props.bgColor,
            [`padding-${this.props.itemPadding}`]: this.props.itemPadding,
            [`padding-lr-${this.props.itemPaddingX}`]: this.props.itemPaddingX,
            [`padding-tb-${this.props.itemPaddingY}`]: this.props.itemPaddingY,
            [`margin-${this.props.itemMargin}`]: this.props.itemMargin,
            [`margin-lr-${this.props.itemMarginX}`]: this.props.itemMarginX,
            [`margin-tb-${this.props.itemMarginY}`]: this.props.itemMarginY,
        }, this.props.className)} children={
            [
                imagePosition == "left" && this.props.image && <View className={
                    classNames(
                        'thumb-left margin-right-xs',
                        `margin-right-${this.props.itemPadding || this.props.itemPaddingX}`
                    )}

                    children={imageListView} />,
                <View
                    className={classNames('item-content')}
                    children={
                        [
                            imagePosition == "top" && this.props.image && imagePositionView,
                            <View className={this.getTitleClssName()} children={this.props.title} />,
                            imagePosition == "center" && this.props.image && imagePositionView,
                            this.props.subTitle && <View className={this.getSubTitleClassName()} children={this.props.subTitle} />,
                            imagePosition == "bottom" && this.props.image && imagePositionView,
                            (this.props.extends || this.props.controls) && <View className={
                                classNames(
                                    'item-footer flex justify-between',
                                    `margin-top-sm`
                                )}
                                children={[this.getExtendsViews(), this.getControlsViews()]} />
                        ]} />,
                imagePosition == "right" && <View className={
                    classNames(
                        'thumb-right',
                        `margin-left-${this.props.itemPadding || this.props.itemPaddingX}`
                    )}
                    children={imageListView}
                />,
            ]
        } />
    }

    /**
     *   纵向排列 布局
     *   @type {[type]}
     */

    private renderColumnComponent = () => {


        const imageList = this.getImage();
        const imagePosition = this.getImagePosition(imageList);


        const imageListView = imageList.slice(0, 1).map(imageItem => {
            return <Image
                className={classNames(
                    `image-${imageItem.size || this.props.imageSize || 'xl'}`,
                    `${imageItem.type || this.props.imageType || 'radius'}`,
                    imageItem.className || this.props.imageClassName,

                )}
                style={{
                    width: `${this.props.imageWidth}px`,
                    height: `${this.props.imageHeight}px`,
                }}
                src={imageItem.url}
            />
        })


        const imagePositionView = <View className={classNames(
            `thumb-${imagePosition}`,
            `image-${imageListView.length > 3 ? 'more' : imageListView.length}`
        )} children={imageListView}
        />





        this.currentComponentView = <View className={classNames('item-column')} children={
            <View className={classNames({
                [`bg-${this.props.bgColor}`]:this.props.bgColor,
            })} children={[
                <View className={classNames('column-image')} children={imagePositionView} />,
                <View className={classNames('column-title')} children={
                    <Text className={this.getTitleClssName()} children={this.props.title} />
                } />,
                <View className={classNames('column-sub-title')} children={
                    <Text className={this.getSubTitleClassName()} children={this.props.subTitle} />
                } />,
                <View className={classNames('column-extends')} children={this.getExtendsViews()} />,
            ]} />
        } />
    }

    render(): JSX.Element {

        this.props.type == "row" && this.renderRowsComponent()
        this.props.type == "column" && this.renderColumnComponent()

        return this.currentComponentView

    }


}
