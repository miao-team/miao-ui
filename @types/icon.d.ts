import { ComponentClass } from "react";
import { iconType, miaoType } from "../miaoType";

export interface IProps extends miaoType {
    size?: number | string;
    icon?: iconType | string;
    onClick?: () => void;
}

export interface IconProps extends IProps { }
declare const EIcon: ComponentClass<IconProps>;

export default EIcon;
