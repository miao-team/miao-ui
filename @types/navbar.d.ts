import { ComponentClass } from "react";

import { EType, bgColorType, iconType, fontSizeType } from "../miaoType";
export interface EProps extends EType {

    /**
        * header 标题
        */
    title?: string;
    /**
     * 背景色
     */
    bgColor?: bgColorType;
    /**
     * 文字色
     */
    textColor?: string;
    /**
     * 文字大小
     */
    textSize?: string;
    /**
     *  是否显示 左
     */
    hiddenLeft?: boolean;

    /**
     * 是否显示 右
     */
    hiddenRight?: boolean;


    /**
     *  是否显示阴影
     */
    shadow?: boolean;

    /**
     * 左侧
     * 可为组件
     */

    left?: any;


    /**
     * 右侧
     * 可为组件
     */
    right?: any;


    /**
     * 右侧返回
     * 属性
     */
    backIcon?: iconType;
    backIconSize?: normalSizeType;
    backIconColor?: bgColorType;
    backText?: string;



    onClickLeft?: () => void;
    onClickRight?: (e) => void;
}

export interface ENavBarProps extends EProps { }
declare const ENavBar: ComponentClass<ENavBarProps>;

export default ENavBar;
