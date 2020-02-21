import { ComponentClass } from "react";
import { EType, bgColorType, iconType } from "./baseType";
import { EHeaderProps } from './header'
import { EProps as ETabBarProps } from './tabbar'
import { EProps as EContetProps } from './content'
export interface EProps extends EContetProps {
    parentBgColor?: bgColorType;
    bgImage?: string;
    headerConfig?: EHeaderProps;
    renderHeader?: React.ReactNode | string;
    renderFooter?: React.ReactNode | string;
}

export interface ELayoutProps extends EProps { }
declare const MLayout: ComponentClass<ELayoutProps>;
export default MLayout;
