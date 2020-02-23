import { ComponentClass } from "react";

import { EType } from "./baseType";

export interface EProps extends EType {


}

export interface EHeaderProps extends EProps { }
declare const EHeader: ComponentClass<EHeaderProps>;

export default EHeader;
