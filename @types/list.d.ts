import { ComponentClass } from "react";
import { miaoType, fontSizeType, bgColorType, bgColorMoreType, lightBgColorType } from "../miaoType";

import { EProps as EItemProps } from './item'

export interface EProps extends miaoType {

    itemType?: "row" | "column";
    itemColumn?:number;
    list?: EItemProps[];
    card?: boolean;
    border?: boolean;
    arrow?: boolean;
    checked?: boolean;
    checkbox?: boolean;

    itemPadding?: "md" | "xs" | "sm" | "xl" | "xxl";
    itemPaddingX?: "md" | "xs" | "sm" | "xl" | "xxl";
    itemPaddingY?: "md" | "xs" | "sm" | "xl" | "xxl";

    itemMargin?: "md" | "xs" | "sm" | "xl" | "xxl"
    itemMarginX?: "md" | "xs" | "sm" | "xl" | "xxl";
    itemMarginY?: "md" | "xs" | "sm" | "xl" | "xxl";
    /**
     *   覆盖参数
     */
    titleColor?: bgColorType | lightBgColorType;
    titleSize?: fontSizeType;
    titleRows?: number;
    subTitleColor?: bgColorType | lightBgColorType;
    subTitleSize?: fontSizeType;
    subTitleRows?: number;
    imagePosition?: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'auto'
    imageSize?: fontSizeType;
    imageType?: 'radius' | 'round';
    imageClassName?: string | string[] | { [key: string]: boolean };

    borderType?: "border-short" | 'border-center';

    imageWidth?: number;
    imageHeight?: number;

    onClick?: (index: number) => void;
    onClickImage?: (index: number, imageIndex: number) => void;
    onClickExtend?: (index: number, extendImage: number) => void;
    onClickControl?: (index: number, controlImage: number) => void;

}

export interface EListProps extends EProps { }
declare const EList: ComponentClass<EListProps>;
export default EList;
