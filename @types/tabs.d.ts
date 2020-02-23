import { ComponentClass } from "react";
import {
    EType,
    bgColorType,
    bgColorMoreType,
    lightBgColorType,
    iconType,
} from "../miaoType";
export interface EProps extends EType {
    type?: "center" | "verb" | "default";
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    activeColor?: bgColorType;
    activeClass?:string;
    active?: number;
    tabs: {
        text: string;
        icon?: iconType;
        id?: string;
    }[];
    onClick?: (index: number) => void;
    touchMove?: boolean;
    children?: any;
}
declare const ETabs: ComponentClass<EProps>;
export default ETabs;
