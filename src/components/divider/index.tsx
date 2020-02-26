import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { EProps } from '../../../@types/divider'
import classNames from 'classnames'
import { TEXT_COLOR_LIST } from "../../utils/model";

import "../../../styles/divider.scss";

export default function EDivider(props: EProps) {
    const { color, size } = props;
    const colorClassName = TEXT_COLOR_LIST[color || "gray"];
    const sizeClassName = `text-${size || "md"}`;
    return (
        <View
            className={classNames(props.className)}
            style={Object.assign({}, props.style)}
        >
            <View className={`${colorClassName} ${sizeClassName} EDivider`}>
                {this.props.children}
            </View>
        </View>
    );
}

EDivider.options = {
    addGlobalClass: true,
    Version:1.0
};

EDivider.defaultProps = {
    color: "gray",
    size: 'md'
} as EProps;
