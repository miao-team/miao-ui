import { ComponentClass } from "react";
import {
    extendSizeType,
    bgColorType,
    iconType,
    EType
} from "../miaoType";

export interface EProps extends EType {
    size?: number | string;
    color?: bgColorType | string;
    icon?: iconType | string;
    onClick?: () => void;
}

export interface IconProps extends EProps { }
declare const EIcon: ComponentClass<IconProps>;

export default EIcon;
