import { ComponentClass, CSSProperties } from "react";
import { miaoType, bgColorType, iconType } from "../miaoType";


import { EProps as EContetProps } from './content'


import { EProps as EPropsNavbar } from './navbar'





export interface EProps extends EContetProps {

    /**
     * layout
     */

    bgImage?: string;
    disable?: boolean;
    topPosition?: number;
    /**
     * header
     */
    header?: React.ReactNode | string | {
        componentType?: string;
    };
    headerClassName?: string | string[] | { [key: string]: boolean };
    headerStyle?: CSSProperties;

    /**
     * footer
     */
    footer?: React.ReactNode | string;
    footerClassName?: string | string[] | { [key: string]: boolean };
    footerStyle?: CSSProperties;

    /**
     * content
     */
    contentBgColor?: bgColorType;
    contentBgImage?: string;

}

export interface ELayoutProps extends EProps { }
declare const MLayout: ComponentClass<ELayoutProps>;
export default MLayout;
