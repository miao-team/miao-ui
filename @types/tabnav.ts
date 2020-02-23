import { ComponentClass } from "react";
import {
    EType,
    bgColorType,
    bgColorMoreType,
    lightBgColorType
} from "../miaoType";
export interface EProps extends EType {
    type?: "center" | "verb" | "default";
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    activeColor?: bgColorType;
    activeClass?: string;
    active?: number;
    onClick?: (index: number) => void;
    touchMove?: boolean;
}
declare const ETabNav: ComponentClass<EProps>;
export default ETabNav;
