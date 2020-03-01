import { ComponentClass } from "react";

import { bgColorType, bgColorMoreType, lightBgColorType, iconType, fontSizeType, miaoType } from "../miaoType";


export type rightType = {
    color?: bgColorType;
    text?: string;
    size?: fontSizeType;
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    className?: string | string[] | { [key: string]: boolean };
}


export interface IProps extends miaoType {

    /**
     *   标题
     */

    title?: string;
    titleColor?: bgColorType;
    titleFontSize?: fontSizeType;
    titleClassName?: string | string[] | { [key: string]: boolean };

    /**
     *   副标题
     */

    subTitle?: string;
    subTitleColor?: bgColorType;
    subTitleFontSize?: fontSizeType;
    subTitleClassName?: string | string[] | { [key: string]: boolean };

    /**
     *   标题 iconF
     */

    icon?: iconType;
    iconColor?: bgColorType;
    iconSize?: fontSizeType;
    iconClassName?: string | string[] | { [key: string]: boolean };

    /**
     *   标题右侧
     */

    right?: React.ReactNode | rightType | string;
    /**
     *  标题 样式
     */

    shadow?: boolean;
}

export interface ETitleBarProps extends IProps { }
declare const ETitleBar: ComponentClass<ETitleBarProps>;

export default ETitleBar;
