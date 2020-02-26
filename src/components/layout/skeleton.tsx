import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { classNames } from '../../utils'
//import './index.scss'

export interface SkeletonProps {
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
    /**
     * @description 子组件内容
     * @type {JSX.Element}
     */
    children?: JSX.Element
}
/**
 * @description Row 属性的宽高
 * @author lentoo
 * @date 2019-08-16
 * @export
 * @interface RowProps
 */
export interface RowProps {
    width: string | number
    height: string | number
}
export type AnimateName = 'blink' | 'elastic'
export type AvatarShapeOptions = 'round' | 'square'
const DEFAULT_ROW_WIDTH = '100%';
export default function ESkeleton(props: SkeletonProps) {

    if (!props.loading) {
        return <View>{props.children}</View>
    }

    const getRowWidth = (index: number) => {

        if (props.rowProps) {
            if (Array.isArray(props.rowProps)) {
                return props.rowProps[index].width
            }
            return props.rowProps.width
        }

        if (props.rowWidth === DEFAULT_ROW_WIDTH) {
            return DEFAULT_ROW_WIDTH
        }
        if (Array.isArray(props.rowWidth)) {
            return props.rowWidth[index]
        }
        return props.rowWidth
    }

    const getRowHeight = (index: number) => {
        if (props.rowProps) {
            if (Array.isArray(props.rowProps)) {
                return props.rowProps[index].height
            }
            return props.rowProps.height
        }

        if (Array.isArray(props.rowHeight)) {
            return props.rowHeight[index]
        }
        return props.rowHeight
    }


    const addUnit = (value?: string | number) => {
        return typeof value === 'number' ? Taro.pxTransform(value) : value
    }

    const renderAvatar = (): JSX.Element | null => {
        if (props.avatar) {
            const avatarClass = classNames('skeleton-avatar', {
                'skeleton-avatar-round': props.avatarShape === 'round'
            })
            return <View className={avatarClass} style={` width: ${addUnit(props.avatarSize)};
        height: ${addUnit(props.avatarSize)} `} />
        }
        return null
    }

    const renderTitle = (): JSX.Element | null => {
        if (props.title) {
            return <View className='skeleton-title' style={`width: ${addUnit(props.titleWidth)};`}></View>
        }
        return null
    }
    const renderAction = (): JSX.Element | null => {
        if (props.action && props.type !== 'column') {
            return <View className='skeleton-action' />
        }
        return null
    }
    const renderRows = (): JSX.Element | null => {
        if (props.row) {
            const rowArray = Array.apply(null, Array(props.row)).map((item, index) => index)
            const Rows = rowArray.map((item, index) => {
                return <View key={item} className='skeleton-row' style={`width: ${addUnit(getRowWidth(index))};height: ${addUnit(getRowHeight(index))}`} />
            })
            return <View className='skeleton-rows'>{Rows}</View>
        }
        return null
    }

    const rootClass = classNames(['skeleton', {
        [`skeleton-type-${props.type}`]: true,
        'skeleton-animate-blink': props.animate && props.animateName === 'blink',
        'skeleton-animate-elastic': props.animate && props.animateName === 'elastic'
    }])
    return (
        <View className={rootClass}>
            {renderAvatar()}
            <View className='skeleton-content'>
                {renderTitle()}
                {renderRows()}
            </View>
            {renderAction()}
        </View>
    )
}
ESkeleton.options = {
    addGlobalClass: true,
    Version:1.0
}
ESkeleton.defaultProps = {
    avatarSize: 90,
    type: 'row',
    row: 0,
    loading: true,
    animate: true,
    rowWidth: '100%',
    rowHeight: 24,
    titleWidth: '40%',
    avatarShape: 'round',
    animateName: 'blink'
}
