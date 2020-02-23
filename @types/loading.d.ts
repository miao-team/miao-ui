import { ComponentClass } from "react";

import {
    bgColorType,
    bgColorMoreType,
    lightBgColorType,
    EType
} from "./miaoType";

export interface EProps extends EType {
    /**
     * loading 类型
     *
     * 默认值 `bar`
     *
     * 可选类型 `modal`, `bar`, `line`
     */
    type?: "modal" | "bar" | "line" | "image";
    /**
     * 背景色，可选类型请查看 默认色
     *
     * 默认 `blue`
     */
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    /**
     * type 为 modal 时显示的文字
     */
    modalText?: string;
    /**
     * type 为 modal 或 image 时显示的图片
     */
    imgUrl?: string;
    /**
     * 是否显示
     *
     * 默认值 `false`
     *
     * 可选类型 `true`, `false`
     */
    show?: boolean;
    /**
     * type 为 line 时设置，是否加载失败
     *
     * 默认值 `false`
     *
     * 可选类型 `true`, `false`
     */
    loadingError?: boolean;
    /**
     * type 为 line 时设置，没有更多了
     *
     * 默认值 `false`
     *
     * 可选类型 `true`, `false`
     */
    noMore?: boolean;
}

export interface ELoadingProps extends EProps { }
declare const ELoading: ComponentClass<ELoadingProps>;

export default ELoading;
