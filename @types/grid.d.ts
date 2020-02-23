import { ComponentClass } from "react";

import {
    bgColorType,

    EType
} from "../miaoType";



export interface EProps extends EType {
    bgColor?: bgColorType;
    col?: string | number;
    gap?: string | number;
    gapX?: string | number;
    gapY?: string | number;
    scrollX?: boolean;
    scrollY?: boolean;
    height?: string | number;
    width?: string | number;
}

declare const EGrid: ComponentClass<EProps>;

export default EGrid;
