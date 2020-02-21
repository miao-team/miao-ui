import { ComponentClass } from "react";

import { EType, bgColorType, iconType } from "./baseType";

import { EProps as ENavbarProps } from './navbar'

export interface EProps extends ENavbarProps {
  
    border?: boolean
}

export interface EHeaderProps extends EProps { }
declare const EHeader: ComponentClass<EHeaderProps>;

export default EHeader;
