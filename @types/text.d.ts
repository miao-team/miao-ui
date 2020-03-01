import { ComponentClass } from "react";

import { fontSizeType, bgColorType, bgColorMoreType, lightBgColorType, miaoType } from "../miaoType";

export interface IProps extends miaoType {
    /**
     *   字体大小
     */

    size?: fontSizeType | number;
    /**
     *   行距
     */

    lineSpacing?: "none" | "small" | "normal" | "large" | number;
    /**
     *   列距
     */

    fontSpacing?: "none" | "small" | "normal" | "large" | number;

    /**
     *   自动bbqad
     */
    cut?: boolean;

    align?: "left" | "center" | "right";
    special?: "firstUpper" | "upper" | "lower";
    fontWeight?: "normal" | "bold" | "bolder" | "lighter" | number;
    wrap?: boolean;
    children?: any;
}

export interface ETextProps extends IProps { }
declare const EText: ComponentClass<ETextProps>;

export default EText;
