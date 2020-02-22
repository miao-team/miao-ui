import { ComponentClass } from "react";
import { EType, bgColorType, iconType } from "./baseType";

import { EHeaderProps } from './header'
import { EFooterProps } from './footer'
import { EProps as EContetProps } from './content'
export interface EProps extends EContetProps {

    parentBgColor?: bgColorType;
    parentBgImage?: string;

    headerConfig?: EHeaderProps|string;
    renderHeader?: React.ReactNode | string;

    footerConfig?: EFooterProps;
    renderFooter?: React.ReactNode | string;
}

export interface ELayoutProps extends EProps { }
declare const MLayout: ComponentClass<ELayoutProps>;
export default MLayout;
