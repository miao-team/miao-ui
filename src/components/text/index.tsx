import { View, Text } from "@tarojs/components";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { pxMap } from "../../utils/model";
import { IProps } from "../../../@types/text";
import { classNames, isNumber, screenPercent } from "../../utils";

const SPECIAL_CLASS = {
    firstUpper: "text-Abc",
    upper: "text-ABC",
    lower: "text-abc"
};

const LINE_SPACING = {
    small: 95 * screenPercent,
    normal: 115 * screenPercent,
    large: 155 * screenPercent
};

const FONT_SPACING = {
    small: 5,
    normal: 10,
    large: 20
};

export default class MText extends Component<IProps>{
    static options = {
        addGlobalClass: true,
        Version: 1.0
    }

    static defaultProps: IProps = {
        size: "md",
        color: 'black',
        cut: false,
        align: undefined,
        special: undefined,
        lineSpacing: "none",
        fontSpacing: "none",
        fontWeight: "normal",
        wrap: true
    };



    constructor(props: IProps) {
        super(props)
    }


    render() {

        const lineSpacing = this.props.lineSpacing || "none";
        const fontSpacing = this.props.fontSpacing || "none";
        const size = isNumber(this.props.size) ? this.props.size : this.props.size || "md";
        const fontSize = isNumber(size)
            ? pxTransform(size as number)
            : pxTransform(pxMap[size || "md"] * screenPercent);

        const specialClassName = this.props.special ? SPECIAL_CLASS[this.props.special] : "";
        return (
            <View
                onClick={this.props.onClick && this.props.onClick.bind(this)}
                className={classNames(
                    {
                        [`text-${this.props.color}`]: this.props.color,
                        [`bg-${this.props.bgColor}`]: this.props.bgColor,
                        [`text-${this.props.align}`]: this.props.align,
                        'text-cut': this.props.cut,
                    },
                    this.props.className
                )}
                style={Object.assign(
                    {
                        lineHeight:
                            lineSpacing === "none"
                                ? "normal"
                                : pxTransform(
                                    isNumber(lineSpacing)
                                        ? lineSpacing
                                        : LINE_SPACING[lineSpacing]
                                ),
                        letterSpacing:
                            fontSpacing === "none"
                                ? "normal"
                                : pxTransform(
                                    isNumber(fontSpacing)
                                        ? fontSpacing
                                        : FONT_SPACING[fontSpacing]
                                ),
                        fontWeight: this.props.fontWeight,
                        fontSize
                    },
                    this.props.style
                )}

                children={<Text
                    className={classNames(
                        {
                            "miao-text__wrap": this.props.wrap || !this.props.cut,
                            "miao-text__nowrap": !this.props.wrap || this.props.cut
                        }
                        ,
                        `${specialClassName}`
                    )}
                    children={this.props.children}
                />}
            />
        );
    }

}
