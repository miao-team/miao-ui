import { ComponentClass } from "react";

import { EType } from "../miaoType";

export interface EProps extends EType {


}

export interface EHeaderProps extends EProps { }
declare const EHeader: ComponentClass<EHeaderProps>;

export default EHeader;
