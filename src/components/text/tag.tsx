import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { BG_COLOR_LIST } from "../../utils/model";
import { EProps,bgColorType } from "../../../@types/tag";
import { classNames } from "../../utils";


export default class ETag extends Component<EProps> {
    static options = {
        addGlobalClass: true
    };
    static defaultProps = {
        shape: "normal",
        size: "normal",
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
            if (this.props.size === "normal") return "";
            else return "sm";
        };
        const badgeClassName = (badge: boolean | undefined) =>
            badge ? "badge" : "";
        let normalComponent;
        let capsuleComponent;
        if (this.props.tags.length > 0) {
            const tag = this.props.tags[0];
            normalComponent = (
                <View
                    className={classNames(
                        `Etag ${shapeClassName} ${
                        tag.plain ? plainClassName(tag.color) : colorClassName(tag.color)
                        } ${sizeClassName()} ${badgeClassName(this.props.badge)}`,
                        this.props.className
                    )}
                    style={Object.assign({ overflow: "hidden" }, this.props.style)}
                >
                    {tag.text}
                </View>
            );
            this.props.tags.length > 1 &&
                (capsuleComponent = (
                    <View
                        className={classNames(
                            `Ecapsule ${shapeClassName}  ${sizeClassName()}`,
                            this.props.className
                        )}
                        style={Object.assign({ overflow: "hidden" }, this.props.style)}
                    >
                        {this.props.tags.map((tag, index) => (
                            <View
                                key={tag.text}
                                className={`Etag ${
                                    tag.plain
                                        ? plainClassName(tag.color)
                                        : colorClassName(tag.color)
                                    }`}
                                onClick={this.onClick.bind(this, tag, index)}
                            >
                                {tag.text}
                            </View>
                        ))}
                    </View>
                ));
        }
        return this.props.tags.length > 1 ? capsuleComponent : normalComponent;
    }
}
