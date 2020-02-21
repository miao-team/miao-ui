import { ComponentClass } from "react";

import { EType, bgColorType, iconType, normalSizeType } from "./baseType";

import { EProps as ETabBarProps } from './tabbar'

export interface EProps extends EType {

}

export interface EFooterProps extends EProps { }
declare const EFooter: ComponentClass<EFooterProps>;

export default EFooter;
