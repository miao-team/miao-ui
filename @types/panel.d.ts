import { ComponentClass } from "react";

import { miaoType, bgColorType, iconType, lightBgColorType, bgColorMoreType } from "../miaoType";
import { EProps as ETitleBarProps } from './titlebar'
import { commonHeaderType } from './common'


export interface EProps extends miaoType {

    /**
     *   layouet
     */

    title?: React.ReactNode | string | {
        componentType?: 'titlebar';
        config?: object;
    };
    subTitle?:string;
    titleClassName?: string | string[] | { [key: string]: boolean };


    headerClassName?: string | string[] | { [key: string]: boolean };

    footer?: React.ReactNode | string | {
        componentType?: 'titlebar';
        config?: object;
    };
    footerClassName?: string | string[] | { [key: string]: boolean };



    clearFixTop?: boolean
    clearFixBottom?: boolean

    bodyClassName?: string | string[] | { [key: string]: boolean };
    bodyColor?: bgColorType | lightBgColorType | bgColorMoreType

}

export interface ETagProps extends EProps { }
declare const EPanel: ComponentClass<ETagProps>;

export default EPanel;
