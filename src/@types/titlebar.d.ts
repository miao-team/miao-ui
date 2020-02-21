import { ComponentClass } from "react";

import {
    bgColorType,
    bgColorMoreType,
    lightBgColorType,
    iconType,
    EType
} from "./baseType";

export interface EProps extends EType {

    renderRight?: any;
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    textColor?: bgColorType;
    type?: "border-title" | "sub-title" | "icon";
    subTitle?: string;
    subTitleColor?: bgColorType;
    borderColor?: bgColorType | bgColorMoreType | lightBgColorType;
    borderLong?: number;
    icon?: iconType;
    iconColor?: bgColorType;
    title?: string;
    description?: string;
    rightLink?: string | {
        url?: string;
        text?: string
        className?: string;
    };
}

export interface ETitleBarProps extends EProps { }
declare const ETitleBar: ComponentClass<ETitleBarProps>;

export default ETitleBar;
