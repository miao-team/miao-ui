import { ComponentClass } from "react";

import { EType, bgColorType, iconType } from "./baseType";

export interface EProps extends EType {
    top?: number;
    disable?: boolean;
    bgColor?: bgColorType;

    isNoMore?: boolean;

    onScrollEnd?: (e) => void; // 滑动结束
    onTouchBottom?: () => void;
    onTouchTop?: () => void;
    onTouchLeft?: () => void;
    onTouchRight?: () => void;
    onScroll?: (e) => void;


}
export interface EContentProps extends EProps { }
declare const EContent: ComponentClass<EContentProps>;
export default EContent;
