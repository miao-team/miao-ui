import { ComponentClass } from "react";
import {
    extendSizeType,
    bgColorType,
    iconType,
    miaoType
} from "../miaoType";

export interface EProps extends miaoType {
    size?: number | string;


    items?: {
        size?: number | string;
        icon?: iconType | string;
        color?: bgColorType;
        bgColor?: bgColorType;
        onClick?: () => void;
    }[]
}

export interface IconProps extends EProps { }
declare const EIconGroup: ComponentClass<IconProps>;

export default EIconGroup;
