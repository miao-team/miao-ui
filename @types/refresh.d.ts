import { ComponentClass } from "react";
import { miaoType, bgColorType } from "../miaoType";

export interface EProps extends miaoType {
    size?: number;
    bgColor?: bgColorType;

}

declare const ERefresh: ComponentClass<EProps>;

export default ERefresh;
