import { ComponentClass } from "react";
import { miaoType, fontSizeType, bgColorType, bgColorMoreType, lightBgColorType } from "../miaoType";

export type imageType = {
    url?: string;
    size?: fontSizeType;
    type?: 'radius' | 'round';
    className?: string | string[] | { [key: string]: boolean };
}


export type extendsType = {
    text?: string;
    color?: string;
    size?: string;
    className?: string | string[] | { [key: string]: boolean };
}

export type controlsType = {
    text?: string;
    color?: string;
    size?: string;
    className?: string | string[] | { [key: string]: boolean };
}

export interface EProps extends miaoType {
    /**
     *   项目标题
     *   row
     *   column
     */

    type?: "row" | "column";
    /**
     *   项目标题
     *   可直接传入 ReactNode
     */

    title?: React.ReactNode | string;
    /**
     *   项目副标题
     *    可直接传入 ReactNode
     */
    titleColor?: bgColorType | lightBgColorType;
    titleSize?: fontSizeType;
    /**
     *   标题行数
     *   指定 n 行后自动隐藏并显示省略号
     */

    titleRows?: number;
    subTitle?: React.ReactNode | string;
    subTitleColor?: bgColorType | lightBgColorType;
    subTitleSize?: fontSizeType;
    /**
     *   副标题 行数
     *   效果 同上
     */

    subTitleRows?: number;


    image?: string | imageType | imageType[];
    imagePosition?: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'auto'
    imageSize?: fontSizeType;
    imageType?: 'radius' | 'round';
    imageClassName?: string | string[] | { [key: string]: boolean };

    imageWidth?: number;
    imageHeight?: number;


    itemPadding?: "md" | "xs" | "sm" | "xl" | "xxl";
    itemPaddingX?: "md" | "xs" | "sm" | "xl" | "xxl";
    itemPaddingY?: "md" | "xs" | "sm" | "xl" | "xxl";

    itemMargin?: "md" | "xs" | "sm" | "xl" | "xxl";
    itemMarginX?: "md" | "xs" | "sm" | "xl" | "xxl";
    itemMarginY?: "md" | "xs" | "sm" | "xl" | "xxl";




    extends?: React.ReactNode | extendsType | extendsType[];
    controls?: React.ReactNode | controlsType | controlsType[];

    arrow?: boolean;
    checked?: boolean;
    checkbox?: boolean;



    /**
     *   点击标题
     *
     */

    onClick?: (index: number) => void;
    onClickImage?: (index: number, imageIndex: number) => void;
    onClickExtend?: (index: number, extendImage: number) => void;
    onClickControl?: (index: number, controlImage: number) => void;
}


export interface EItemProps extends EProps { }
declare const EItem: ComponentClass<EItemProps>;
export default EItem;
