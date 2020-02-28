import Taro, { Component, pxTransform, useEffect, useState } from "@tarojs/taro";
import { Text, View, Image } from "@tarojs/components";
import { EProps, EHeaderArray } from '../../../@types/avatar'
import { isNumber, generateId, classNames } from '../../utils'

/**
 *   列表项目
 *   @type {Object}
 */

export default class EItem extends Component {

    static options = {
        addGlobalClass: true,
        Version: 1.0
    }

    static defaultProps = {

    }



    render(): JSX.Element {
        return (
            <View />
        )
    }


}
