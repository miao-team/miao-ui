import { ComponentClass } from "react";
import { EType, bgColorType, extendSizeType } from "../miaoType";

export interface EProps extends EType {
    /**
     * 分割线颜色
     *
     * 默认 `grey`
     */
    color?: bgColorType;
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
