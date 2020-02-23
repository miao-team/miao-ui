import { ComponentClass } from "react";

import {
    bgColorType,
    bgColorMoreType,
    lightBgColorType,
    iconType,
    normalSizeType,
    EType
} from "./baseType";

export interface EProps extends EType {
    /**
     * 背景色，可选类型请查看 默认色
     */
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    /**
     * 激活的颜色，可选类型请查看 默认色-标准色
     */
    activeColor?: bgColorType;
    /**
     * 激活的下标
     *
     * 默认值 0
     */
    active?: boolean | number;
    /**
     * 是否固定在底部
     *
     * 默认值 `false`
     */
    fix?: boolean;
    /**
     * 每一项 tab 内容
     *
     * 每一项可设置参数 `badge`, `icon`, `img`, `title`, `action`
     */
    tabs: {
        /**
         * 右上角提示
         */
        badge?: number | boolean;
        /**
         * 图标，可选类型请查看 Icon-iconName
         */
        icon?: iconType;
        iconSize?: normalSizeType | number,
        /**
         * 图片 url
         */
        img?: string;
        imgSize?: normalSizeType | number,
        /**
         * 标题
         */
        title?: string;
        titleSize?: string | number;
        titleColor?: string;
        /**
         * 是否为突出操作
         *
         * 默认值 `false`
         */
        action?: boolean;



    }[];
    /**
     * 是否显示手机下方安全区域
     *
     * 默认 `true`
     */
    safeArea?: boolean;
    /**
     * 每一项的点击事件
     */
    onClick?: (item: object, index: number) => void;
}

export interface ETabBarProps extends EProps { }
declare const ETabBar: ComponentClass<ETabBarProps>;

export default ETabBar;
