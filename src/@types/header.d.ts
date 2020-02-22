import { ComponentClass } from "react";

import { EType, bgColorType, iconType } from "./baseType";

import { EProps as ENavbarProps } from './navbar'
import { EProps as ETabBarPrpos } from './tabbar'
import { EProps as ETitleBarProps } from './titlebar'

export interface EProps extends EType {

    type?: 'navbar' | 'tabbar' | 'titlebar';
    config?: ENavbarProps | ETabBarPrpos | ETitleBarProps

}

export interface EHeaderProps extends EProps { }
declare const EHeader: ComponentClass<EHeaderProps>;

export default EHeader;
