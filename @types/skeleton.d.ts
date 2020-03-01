import { ComponentClass } from "react";

import { miaoType } from "../miaoType";

export type AnimateName = 'blink' | 'elastic'
export type AvatarShapeOptions = 'round' | 'radius'

export type RowProps = {
    width: string | number
    height: string | number
}

export interface IProps extends miaoType {
    className?: any;
    style?: any;
    /**
     * @description 排列方向  横向 或者 纵向， 默认 row
     * @type {('row' | 'column')}
     * @memberof SkeletonProps
     */
    type?: 'row' | 'column'
    /**
     * @description 段落占位图行数
     * @type {number}
     */
    row?: number
    rows?: number;
    /**
     * @description 是否显示占位图，传 `false` 时会展示子组件内容
     * @type {boolean}
     */
    loading?: boolean
    /**
     * @description 是否显示标题占位图
     * @type {boolean}
     */
    title?: boolean
    /**
     * @description 标题占位图宽度
     * @type {(string | number)}
     */
    titleWidth?: string | number
    /**
     * @description 是否显示头像占位图
     * @type {boolean}
     */
    avatar?: boolean
    /**
     * @description avatar-size
     * @type {number}
     */
    avatarSize?: number
    /**
     * @description 头像占位图形状，可选值为 `square` 、`round` 默认值：round
     * @type {AvatarShapeOptions}
     */
    avatarShape?: AvatarShapeOptions
    /**
     * @description 是否显示右边操作按钮占位图
     * @type {boolean}
     */
    action?: boolean
    /**
     * @description 是否开启动画
     * @type {boolean}
     */
    animate?: boolean
    /**
     * @description 动画名称
     * @type {AnimateName}
     * @memberof SkeletonProps
     */
    animateName?: AnimateName
    /**
     * @description 段落占位图宽度，可传数组来设置每一行的宽度
     * @type {(number | string | (number | string)[])}
     */
    rowWidth?: number | string | (number | string)[]
    /**
     * @description 段落占位图高度，可传数组来设置每一行的高度
     * @type {(number | string | (number | string)[])}
     * @memberof SkeletonProps
     */
    rowHeight?: number | string | (number | string)[]
    /**
     * @description 用于定制 row 的宽跟高，可传数组来设置每一行的宽跟高，如果配置了该属性，则 rowWidth 配置无效
     * @type {(RowProps | RowProps[])}
     * @memberof SkeletonProps
     */
    rowProps?: RowProps | RowProps[]
}

export interface MSkeletonProps extends IProps { }
declare const MSkeleton: ComponentClass<MSkeletonProps>;

export default MSkeleton;
