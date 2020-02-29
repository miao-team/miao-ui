import { ComponentClass } from "react";
import { miaoType } from "../miaoType";

export interface EProps extends miaoType {
    /**
     *   水平方向排列方式
     */

    justify?: "start" | "end" | "center" | "between" | "around";
    /**
     *   垂直方向排列方式
     */

    align?: "start" | "center" | "end" | "stretch";
    /**
     *   是否换行
     */

    wrap?: boolean;
    /**
     *   水平还是垂直布局
     */

    direction?: "row" | "column" | "row-reverse" | "column-reverse";
}

declare const EFlex: ComponentClass<EProps>;

export default EFlex;
