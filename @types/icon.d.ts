import { ComponentClass } from "react";
import {
    extendSizeType,
    bgColorType,
    iconType,
    miaoType
} from "../miaoType";

export interface EProps extends miaoType {
    size?: number | string;
    icon?: iconType | string;
    onClick?: () => void;
}

export interface IconProps extends EProps { }
declare const EIcon: ComponentClass<IconProps>;

export default EIcon;
