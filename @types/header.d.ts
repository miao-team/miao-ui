import { ComponentClass } from "react";

import { EType } from "../miaoType";

export interface EProps extends EType {

    children ?:any;
}

export interface EHeaderProps extends EProps { }
declare const EHeader: ComponentClass<EHeaderProps>;

export default EHeader;
