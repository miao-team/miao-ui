import { ComponentClass } from "react";

import {
    bgColorType,
    bgColorMoreType,
    lightBgColorType,
    iconType,
    fontSizeType,
    miaoType
} from "../miaoType";

export interface EProps extends miaoType {

    shadow?: boolean;


    title?: string;
    titleCustomClassName?: string | string[] | { [key: string]: boolean };
    titleColor?: bgColorType;
    titleFontSize?: fontSizeType;


    subTitle?: string;
    subTitleColor?: bgColorType;
    subTitleFontSize?: fontSizeType;
    subTitleCustomClassName?: string | string[] | { [key: string]: boolean };

    icon?: iconType;
    iconColor?: bgColorType;
    iconSize?: fontSizeType;
    iconCustomClassName?: string | string[] | { [key: string]: boolean };



    right?: React.ReactNode | any;
}

export interface ETitleBarProps extends EProps { }
declare const ETitleBar: ComponentClass<ETitleBarProps>;

export default ETitleBar;
