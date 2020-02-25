import Nerv from "nervjs";
import Taro, { pxTransform } from "@tarojs/taro";
import { Text } from "@tarojs/components";
import classNames from 'classnames'
import { EProps } from "../../../@types/icon";
import {isNumber} from '../../utils'
import {pxMap} from '../../utils/model'

import "../../../styles/icon.scss";
export default function EIcon(props: EProps) {

    const iconName = props.icon || "";
    let iconNameClass = `EIcon-${props.icon}`;
    if (props.other) {
        iconNameClass = iconName;
    }
    const sizeClassName = props.size || "md";
    const bgColorClassName = props.color ? `text-${props.color}` : "";
    return (
        <Text
            onClick={props.onClick && props.onClick.bind(this, ...arguments)}
            className={classNames(
                iconNameClass,
                bgColorClassName,
                props.className
            )}
            style={Object.assign(
                {
                    fontSize: `${
                        isNumber(sizeClassName)
                          ? pxTransform(sizeClassName as number)
                          : pxTransform(pxMap[sizeClassName])
                      }`
                },
                props.style
            )}
        />
    );
}

EIcon.options = {
    addGlobalClass: true
};
