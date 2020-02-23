import { ComponentClass } from "react";

import { EProps as iconProps } from "./icon";
import { EType, bgColorType } from "../miaoType";

export type EIcon = iconProps;
export type ETitle = string;
export type EShortLine = boolean;
export type EArrow = boolean;
export type ECard = boolean;
export type ETitleColor = bgColorType;
export type EOnClick = (index: number) => void;

export type ESubTitle = {
    title?: string;
    textColro?: string;
    onClick?: () => void;
}

export type EImage = {
    url?: string;
    type?: 'round' | 'radius';
    className?: string;
    onClick?: () => void;
}


export type ETist = {
    /**
     * 是否禁止点击
     */
    disabled?: Boolean;
    /**
     * 列表图标，可选类型请查看 Icon 组件
     */
    icon?: EIcon;
    /**
     * 标题颜色，可选类型请查看 默认色-标准色
     */
    titleColor?: ETitleColor;
    /**
     * 是否显示箭头
     *
     * 默认值 `false`
     *
     * 可选类型 `true`, `false`
     */
    arrow?: EArrow;
    /**
     * 标题
     */
    title?: ETitle;
    titleSize?: number;
    /**
     * 图片地址
     */
    image?: EImage | string;
    divider?: boolean;
    subTitle?: ESubTitle | any;
}[];

export interface EProps extends EType {
    /**
     * 是否为短分割线
     *
     * 默认值 `false`
     *
     * 可选类型 `true`, `false`
     */
    shortBorder?: EShortLine;
    /**
     * 是否是卡片形式
     *
     * 默认值 `false`
     *
     * 可选类型 `true`, `false`
     */
    card?: ECard;
    /**
     * 列表每一项
     *
     * 可设置参数 `icon`, `titleColor`, `arrow`, `title`, `imgUrl`
     */
    list?: ETist;
    /**
     * 点击事件，参数 index 为第几个
     */
    onClick?: EOnClick;

    border?: boolean;
}

export interface EMenuListProps extends EProps { }
declare const EMenuList: ComponentClass<EMenuListProps>;

export default EMenuList;
