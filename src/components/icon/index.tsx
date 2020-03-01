import Taro, { Component, pxTransform } from "@tarojs/taro";
import { Text } from "@tarojs/components";
import { IProps } from "../../../@types/icon";
import { isNumber, classNames } from '../../utils'
import { pxMap } from '../../utils/model'

import "../../../styles/icon.scss";

export default class MIcon extends Component<IProps>{
    static options = {
        addGlobalClass: true
    }


    render(): JSX.Element {

        const sizeClassName = this.props.size || "md";
        return (
            <Text
                onClick={this.props.onClick && this.props.onClick.bind(this, ...arguments)}
                className={classNames({
                    [`text-${this.props.color}`]: this.props.color,
                    [`EIcon-${this.props.icon}`]: this.props.icon
                },
                    this.props.className
                )}
                style={Object.assign(
                    {
                        fontSize: `${
                            isNumber(sizeClassName)
                                ? pxTransform(sizeClassName as number)
                                : pxTransform(pxMap[sizeClassName])
                            }`
                    },
                    this.props.style
                )}
            />
        );
    }

}
