import { View, Text } from "@tarojs/components";
import Taro, { pxTransform } from "@tarojs/taro";
import { BG_COLOR_LIST, pxMap, SIZE, TEXT_COLOR_LIST } from "../../utils/model";
import { EProps } from "../../../@types/text";

//import "./index.scss";
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

export default function EText(props: EProps) {


    const lineSpacing = props.lineSpacing || "none";
    const fontSpacing = props.fontSpacing || "none";
    const size = isNumber(props.size) ? props.size : props.size || "md";
    const fontSize = isNumber(size)
        ? pxTransform(size as number)
        : pxTransform(pxMap[size || "md"] * screenPercent);
    // const sizeClassName = `text-${SIZE[size === "normal" ? "df" : size]}`;
    const textColorClassName = props.color
        ? TEXT_COLOR_LIST[props.color || "black"]
        : "";
    const bgColorClassName = props.bgColor
        ? BG_COLOR_LIST[props.bgColor || "white"]
        : "";
    const cutClassName = props.cut ? "text-cut" : "";
    const alignClassName = props.align ? `text-${props.align}` : "";
    const specialClassName = props.special ? SPECIAL_CLASS[props.special] : "";
    return (
        <View
            className={classNames(
                ` ${textColorClassName} ${bgColorClassName} ${cutClassName} ${alignClassName}`,
                props.className
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
                    fontWeight: props.fontWeight,
                    fontSize
                },
                props.style
            )}
        >
            <Text
                className={classNames(
                    [
                        {
                            "cl-text__wrap": props.wrap || !cutClassName
                        },
                        {
                            "cl-text__nowrap": !props.wrap || cutClassName
                        }
                    ],
                    `${specialClassName}`
                )}
            >
                {props.text}
                {this.props.children}
            </Text>
        </View>
    );
}

EText.options = {
    addGlobalClass: true,
    Version:1.0
};

EText.defaultProps = {
    size: "md",
    cut: false,
    align: undefined,
    special: undefined,
    text: "",
    lineSpacing: "none",
    fontSpacing: "none",
    fontWeight: "normal",
    wrap: true
} as EProps;
