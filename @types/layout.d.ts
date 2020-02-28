import { ComponentClass, CSSProperties } from "react";
import { miaoType, bgColorType, iconType } from "../miaoType";

import { EProps as EContetProps } from './content'
import { EProps as EPropsNavbar } from './navbar'


export interface EProps extends EContetProps {

    /**
     * layout
     */
    bgImage?: string;
    /**
     * header
     */
    header?: React.ReactNode | string | {
        componentType?: string;
    };


    /**
     * footer
     */
    footer?: React.ReactNode | string | {
        componentType?: string;
    };


    /**
     * content
     */

    disable?: boolean;
    topPosition?: number;
    contentStyle?: CSSProperties;
    contentBgColor?: bgColorType;
    contentBgImage?: string;
    contentClassName?: string | string[] | { [key: string]: boolean };

}

export interface ELayoutProps extends EProps { }
declare const ELayout: ComponentClass<ELayoutProps>;
export default ELayout;
