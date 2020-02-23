import { ComponentClass } from "react";

import {
    extendSizeType,
    bgColorType,
    bgColorMoreType,
    lightBgColorType,
    EType
} from "./baseType";

export interface EProps extends EType {
    size?: extendSizeType | number;
    lineSpacing?: "none" | "small" | "normal" | "large" | number;
    fontSpacing?: "none" | "small" | "normal" | "large" | number;
    color?: bgColorType;
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    cut?: boolean;
    align?: "left" | "center" | "right";
    special?: "firstUpper" | "upper" | "lower";
    text?: string;
    fontWeight?: "normal" | "bold" | "bolder" | "lighter" | number;
    wrap?: boolean;
    children?: any;
}

export interface ETextProps extends EProps { }
declare const EText: ComponentClass<ETextProps>;

export default EText;
