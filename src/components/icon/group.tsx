import Nerv from "nervjs";
import Taro, { pxTransform } from "@tarojs/taro";
import { View } from "@tarojs/components";
import EIcon from './index'
import classNames from 'classnames'
import { EProps } from "../../../@types/icon-group";
import { isNumber } from '../../utils'
import { pxMap } from '../../utils/model'

import "../../../styles/icon.scss";
export default function EIconGroup(props: EProps) {


    return (
        <View className="">
            {props.items.map((item, key) => {
                return <EIcon size={item.size ? item.size : this.props.size} icon={item.icon} color={item.color} />
            })}
        </View>

    );
}

EIconGroup.options = {
    addGlobalClass: true,
    Version: 1.0
};
