import { ComponentClass } from "react";

import { miaoType, bgColorType, iconType, lightBgColorType, bgColorMoreType } from "../miaoType";
import { IProps as ETitleBarProps } from './titlebar'
import { commonHeaderType } from './common'


export interface IProps extends miaoType {

    /**
     *   标题
     *   header 组件信息
     */

    title?: React.ReactNode | string | {
        componentType?: 'titlebar';
        config?: object;
    };
    /**
     *   副标题
     *   只有设置标题信息 此信息才有效
     */

    subTitle?: string;
    /**
         *   header
         */

    headerClassName?: string | string[] | { [key: string]: boolean };





    footer?: React.ReactNode | string | {
        componentType?: 'titlebar';
        config?: object;
    };
    footerClassName?: string | string[] | { [key: string]: boolean };


    /**
     *   间隔
     */


    clearFixTop?: boolean
    clearFixBottom?: boolean

    /**
     *   主体信息
     */

    bodyClassName?: string | string[] | { [key: string]: boolean };
    bodyColor?: bgColorType | lightBgColorType | bgColorMoreType



    right?:any;


    lineHeader?:boolean;
    lineFooter?:boolean;

}

export interface ETagProps extends IProps { }
declare const EPanel: ComponentClass<ETagProps>;

export default EPanel;
