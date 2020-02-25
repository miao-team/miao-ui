import { ComponentClass, CSSProperties } from "react";

import { miaoType, bgColorType, iconType } from "../miaoType";

import { EProps as ETitleBar } from './titlebar'


export interface EProps extends miaoType {


    card?: boolean;

    // header 区
    header?: React.ReactNode | ETitleBar;


    // title bar
    title?: string
    subTitle?: string
    subTitleColor?: bgColorType;
    rightLink?: any

    //  footer 区
    footer?: any


    // Content
    contentClassName?: string | string[] | { [key: string]: boolean };
    contentStyle?: CSSProperties;

    // 全局区
    border?: boolean
    radius?: boolean
    shadow?: boolean






}
export interface ECardProps extends EProps { }
declare const ECard: ComponentClass<ECardProps>;
export default ECard;
