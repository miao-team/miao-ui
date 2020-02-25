import { ComponentClass } from "react";

import {
    fontSizeType,
    bgColorType,
    bgColorMoreType,
    lightBgColorType,
    miaoType
} from "../miaoType";

export interface EProps extends miaoType {
    size?: fontSizeType | number;
    lineSpacing?: "none" | "small" | "normal" | "large" | number;
    fontSpacing?: "none" | "small" | "normal" | "large" | number;


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
