import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { BG_COLOR_LIST } from "../../utils/model";
import { EProps, bgColorType } from "../../../@types/tag";
import { classNames } from "../../utils";

import "../../../styles/tag.scss";
export default class ETag extends Component<EProps> {
    static options = {
        addGlobalClass: true,
        Version:1.0
    };
    static defaultProps = {
        shape: "radius",
        size: "md",
        tags: []
    } as EProps;
    onClick(item: object, index: number) {
        this.props.onClick && this.props.onClick(item, index);
    }
    render() {
        const shapeClassName = this.props.shape
            ? this.props.shape === "normal"
                ? ""
                : this.props.shape
            : "";
        const colorClassName = (color: bgColorType | undefined) => {
            return BG_COLOR_LIST[color || "blue"];
        };
        const plainClassName = (color: bgColorType | undefined) => {
            return `line-${color}`;
        };
        const sizeClassName = () => {
            if (this.props.size === "md") return "";
            else return "sm";
        };
        const badgeClassName = (badge: boolean | undefined) =>
            badge ? "badge" : "";


        if (typeof this.props.item == "string" || typeof this.props.item.length == "undefined") {
            const singleItem: {
                text: string;
                color: string;
                plain: boolean
            } = typeof this.props.item == "string" ? {
                text: this.props.item,
                color: "red",
                plain: false,
            } : this.props.item;

            return <View
                className={
                    classNames(
                        `Etag ${shapeClassName} ${
                        singleItem.plain ? plainClassName(singleItem.color) : colorClassName(singleItem.color)
                        }  ${badgeClassName(this.props.badge)}`,
                        this.props.className,
                        { [`${this.props.size}`]: this.props.size }
                    )}
                style={Object.assign({ overflow: "hidden" }, this.props.style)}
            >
                {singleItem.text}
            </View>;

        } else {
            return <View
                className={classNames(
                    `Ecapsule ${shapeClassName}  ${sizeClassName()}`,
                    this.props.className
                )}
                style={Object.assign({ overflow: "hidden" }, this.props.style)}
            >
                {this.props.item.map((tag, index) => (
                    <View
                        key={tag.text}
                        className={
                            classNames(
                                "Etag",
                                tag.plain
                                    ? plainClassName(tag.color)
                                    : colorClassName(tag.color),
                                {
                                    [`${this.props.size}`]: this.props.size
                                }}
                        onClick={this.onClick.bind(this, tag, index)}
                    >
                        {tag.text}
                    </View>
                ))
                }
            </View >;
        }
    }
}
