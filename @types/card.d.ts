import { ComponentClass } from "react";

import { EType, bgColorType, iconType } from "../miaoType";




export interface EProps extends EType {


    cardType?: boolean;

    // header 区
    headerView?: React.ReactNode
    title?: string
    subTitle?: string
    rightLink?: any
    //  footer 区
    footerView?: React.ReactNode
    // 全局区
    border?: boolean
    radius?: boolean
    shadow?: boolean
    bgColor?: bgColorType






}
export interface ECardProps extends EProps { }
declare const ECard: ComponentClass<ECardProps>;
export default ECard;
