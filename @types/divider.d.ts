import { ComponentClass } from "react";
import { miaoType, bgColorType, extendSizeType } from "../miaoType";

export interface EProps extends miaoType {

    /**
     * 文字大小
     *
     * 默认 `normal`
     */
    size?: number | string;
    children?: any;
}

declare const EDivider: ComponentClass<EProps>;

export default EDivider;
