import { ComponentClass } from "react";
import {
    extendSizeType,
    bgColorType,
    iconType,
    EType
} from "./baseType";

export interface EProps extends EType {
    /**
     * 图标大小设置
     *
     * 默认值 `normal`
     *
     * 可选类型 `xsmall`, `small`, `normal`, `large`, `xlarge`, `xxlarge`, `slarge`, `xslarge` , 或者直接 Number 数值
     */
    size?: number | string;
    /**
     * 图标颜色，可选类型请查看 默认色-标准色
     */
    color?: bgColorType | string;
    /**
     * 图标名字，可选类型请查看 Icon-iconName
     */
    icon?: iconType | string;
    /**
     * 是否为第三方图标
     */
    other?: boolean;
    onClick?: () => void;
}

export interface IconProps extends EProps { }
declare const EIcon: ComponentClass<IconProps>;

export default EIcon;
