import { ComponentClass } from "react";

import { EType, bgColorType, iconType } from "./baseType";

export interface EProps extends EType {

    /**
     * 顶部 位子
     */

    top?: number;

    /**
    * 当而面距离低部 n 时 开始执行下拉方法
    */
    bottom?: number;

    /**
     * 禁止下拉
     */
    disableTop?: boolean;
    /**
     * 禁止加载列多
     */
    disableBottom?: boolean;
    /**
     * 全部禁止 
     */
    disable?: boolean;

    /**
     * 背景色
     */
    bgColor?: bgColorType;


    /**
     * 已加载完成
     */
    isOvering?: boolean;





    /**
     *  是否加载中
     */
    isLoading?: boolean;




    /**
     * 滑动方法
     */
    //onScrollStart?:()=>void; // 滑动开始
    onScroll?: (e) => void;// 滑动过程中
    onScrollEnd?: (e) => void; // 滑动结束

    /**
     * 下拉 
     * 上拉
     */
    onInitialize?: () => void;
    onLoadmore?: () => void;


}
export interface EContentProps extends EProps { }
declare const EContent: ComponentClass<EContentProps>;
export default EContent;
