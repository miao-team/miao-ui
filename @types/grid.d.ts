import { ComponentClass } from "react";

import {
    bgColorType,

    miaoType
} from "../miaoType";



export interface EProps extends miaoType {


    col?: string | number;
    gap?: string | number;
    gapX?: string | number;
    gapY?: string | number;
    scrollX?: boolean;
    scrollY?: boolean;


    flowType?: "row" | "column";

    skeleton?:boolean;

}

declare const EGrid: ComponentClass<EProps>;

export default EGrid;
