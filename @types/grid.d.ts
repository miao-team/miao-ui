import { ComponentClass } from "react";

import { bgColorType, miaoType } from "../miaoType";



export interface EProps extends miaoType {

    /**
     *   列数
     */

    column?: string | number;
    /**
     *   间距
     */

    gap?: string | number;
    /**
     *   行 间距
     */

    gapX?: string | number;
    /**
     *   列 间距
     */

    gapY?: string | number;
    /**
     *   是否可横向滑动
     */

    scrollX?: boolean;
    /**
     *   是否可纵向滑动
     */

    scrollY?: boolean;

    /**
     *   是否显示 行边框
     */

    lineX?: boolean;
    /**
     *   是否显示 列 边框
     */

    lineY?: boolean;

    /**
     *   排列方式
     */

    flowType?: "row" | "column";

    /**
     *     是否显示 骨架屏
     */

    skeleton?: boolean;

}

declare const EGrid: ComponentClass<EProps>;

export default EGrid;
