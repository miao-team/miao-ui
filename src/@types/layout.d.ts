import { ComponentClass } from "react";
import { EType, bgColorType, iconType } from "./baseType";


import { EProps as EContetProps } from './content'
export interface EProps extends EContetProps {

    parentBgColor?: bgColorType;
    parentBgImage?: string;

    header?: React.ReactNode | string;
    footer?: React.ReactNode | string;
}

export interface ELayoutProps extends EProps { }
declare const MLayout: ComponentClass<ELayoutProps>;
export default MLayout;
