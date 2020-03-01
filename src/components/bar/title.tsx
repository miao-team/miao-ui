import Nerv from "nervjs";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classNames from 'classnames'
import { IProps } from '../../../@types/titlebar'
import "../../../styles/title-bar.scss";



export default class MTitleBar extends Component<IProps>{

    static options = {
        addGlobalClass: true,
        Version: 1.1
    };

    constructor(props: IProps) {
        super(props);

    }


    static defaultProps: IProps = {
        color: "black",
        subTitleColor: "gray",
    };


    toMoreURI(uri: string) {
        Taro.navigateTo({ url: uri })
    }



    /**
     *   获取标题 Element
     *   @type {[type]}
     */

    private getTitltComponentElement = (): JSX.Element => {
        return (
            <View className={classNames(
                "text-bold",
                {
                    [`text-${this.props.titleColor}`]: this.props.titleColor,
                },
                this.props.titleFontSize ? `text-${this.props.titleFontSize}` : `text-xl`,
                this.props.titleClassName)}
                children={this.props.title}
            />
        )
    }

    /**
     *   获取副标题  Element
     *   @type {[type]}
     */

    private getSubTitltComponentElement = (): JSX.Element => {
        return (
            <View className={classNames(
                'sub-title',
                {
                    [`text-${this.props.subTitleColor}`]: this.props.subTitleColor
                },
                this.props.subTitleFontSize ? `text-${this.props.subTitleFontSize}` : `text-sm`,
                this.props.subTitleClassName)}
                children={this.props.subTitle}
            />
        )
    }


    /**
     *   获取 icon Element
     *   @type {[type]}
     */

    private getIconComponentElement = (): JSX.Element => {
        return (
            <View className={classNames({
                [`text-${this.props.iconColor}`]: this.props.iconColor,
            }, "tilte-icon")}
                children={<Text className={`EIcon-${this.props.icon}`} style={{
                    fontSize: `${this.props.iconSize || '32'}px`,
                }} />}
            />
        )
    }

    /**
     *   获取右侧标题 Element
     *   @type {[type]}
     */

    private getRightComponentElement = () => {


        if (Taro.isValidElement(this.props.right)) {
            return this.props.right;
        }
        if (typeof this.props.right == "string") {

            return <Text className="flex justify-center align-center text-md text-gray" children={this.props.right} />
        }
        return (
            <Text
                onClick={() => {
                    this.props.right.uri && Taro.navigateTo(this.props.right.uri);
                    this.props.right.url && window.open(this.props.right.url)
                }}
                className={
                    classNames(
                        'flex justify-center align-center',
                        {
                            [`text-${this.props.right.color}`]: this.props.right.color,
                            [`bg-${this.props.right.bgColor}`]: this.props.right.bgColor,
                            [`text-${this.props.right.size}`]: this.props.right.size,
                        }
                    )}
                children={this.props.right.text}
            />
        )
    }



    /**
     *   生成
     *   @method render
     *   @return {[type]} [description]
     */

    render(): JSX.Element {
        return (
            <View className={classNames(
                'title-bar border',
                {
                    'shadow': this.props.shadow,
                    [`bg-${this.props.bgColor}`]: this.props.bgColor,
                    [`text-${this.props.color}`]: this.props.color,
                },
                this.props.className)}
                style={Object.assign({}, this.props.style)}
            >
                <View className="flex action justify-between"
                    children={[
                        this.props.icon && this.getIconComponentElement(),
                        <View className={classNames({
                            //border:this.props.border
                        }, "title")} children={[
                            this.getTitltComponentElement(),
                            this.props.subTitle && this.getSubTitltComponentElement()
                        ]}

                        />,
                        <View children={this.props.right && this.getRightComponentElement()} />
                    ]}
                />
            </View >
        );
    }
}
