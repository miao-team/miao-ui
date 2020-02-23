import { ComponentClass } from "react";

import { EType, bgColorType, iconType, fontSizeType } from "../miaoType";

export interface EProps extends EType {
    children?: any;
}

export interface EFooterProps extends EProps { }
declare const EFooter: ComponentClass<EFooterProps>;

export default EFooter;
