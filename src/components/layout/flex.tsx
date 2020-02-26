import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { EProps } from "../../../@types/flex";
import classNames from "classnames";

import '../../../styles/flex.scss'
/**
 * flex 问题
 * 浮动比例
 * flex-sub==>1, flex-twice==>2, flex-treble==>3
 */
export default function EFlex(props: EProps) {
    const warpClassName = props.wrap ? "flex-wrap" : "";
    const justifyClassName = props.justify ? `justify-${props.justify}` : "";
    const alignClassName = props.align ? `align-${props.align}` : "";
    const directionClassName = props.direction
        ? `flex-direction-${props.direction}`
        : "";
    const flexComponent = (
        <View
            className={classNames(
                `flex ${warpClassName} ${justifyClassName} ${alignClassName} ${directionClassName}`,
                props.className
            )}
            style={Object.assign({}, props.style)}
        >
            {this.props.children}
        </View>
    );
    return flexComponent;
}

EFlex.options = {
    addGlobalClass: true,
    Version:1.0
};

EFlex.defaultProps = {
    justify: "start",
    align: "start",
    direction: "row",
    wrap: false
} as EProps;
