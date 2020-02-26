import { ComponentClass } from "react";

import { miaoType, bgColorType, iconType } from "../miaoType";


export type tagType = {
    /**
     * 标签颜色，可选类型请查看 默认色-标准色
     */
    color?: bgColorType;
    /**
     * 是否镂空
     *
     * 默认值 `false`
     */
    plain?: boolean;
    /**
     * 图标，可选类型请查看 Icon-iconName
     */
    icon?: iconType;
    /**
     * 标题
     */
    text?: string;
    /**
     * 是否禁止点击
     *
     * 默认值 `false`
     */
    disabled?: boolean;
}

export interface EProps extends miaoType {
    /**
     * tag 形状
     *
     * 默认值 `normal`
     *
     * 可选参数 `normal`, `round`, `radius`
     */
    shape?: "normal" | "round" | "radius";
    /**
     * tag 大小设置
     *
     * 默认值 `normal`
     *
     * 可选参数 `small`, `normla`
     */
    size?: "sm" | "md" | "lg" | "xl" | "xxl" | "sl" | "xsl";
    /**
     * 点击事件
     */
    onClick?: (item: object, index: number) => void;
    /**
     * 该标签是否显示为角标位置
     *
     * 默认值 `false`
     */
    badge?: boolean;
    /**
     * tag 数组
     *
     * 每一项可以设置以下参数 `color`, `plain`, `icon`, `text`, `disabled`
     */
    item?: string | tagType | tagType[];
}

export interface ETagProps extends EProps { }
declare const ETag: ComponentClass<ETagProps>;

export default ETag;
