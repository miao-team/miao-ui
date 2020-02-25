import { ComponentClass, CSSProperties } from "react";
import { miaoType, bgColorType, iconType } from "../miaoType";


import { EProps as EContetProps } from './content'
export interface EProps extends EContetProps {

    contentBgColor?: bgColorType;
    contentBgImage?:string;

    bgImage?: string;

    header?: React.ReactNode | string;
    headerClassName?: string | string[] | { [key: string]: boolean };
    headerStyle?: CSSProperties;

    footer?: React.ReactNode | string;
    footerClassName?: string | string[] | { [key: string]: boolean };
    footerStyle?: CSSProperties;



}

export interface ELayoutProps extends EProps { }
declare const MLayout: ComponentClass<ELayoutProps>;
export default MLayout;
