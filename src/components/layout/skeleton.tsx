import { View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import { IProps } from '../../../@types/skeleton'
import { classNames } from '../../utils'
import '../../../styles/skeleton.scss'

const DEFAULT_ROW_WIDTH = '100%';

export default class ESkeleton extends Component<IProps>{

    static options = {
        addGlobalClass: true,
        Version: 1.0
    }


    static defaultProps = {
        avatarSize: 90,
        type: 'row',
        row: 3,
        loading: true,
        animate: true,
        rowWidth: '100%',
        rowHeight: 24,
        titleWidth: '60%',
        avatarShape: 'round',
        animateName: 'blink'
    }





    constructor(props: IProps) {
        super(props)
    }

    render() {

    
        if (!this.props.loading) {
            return this.props.children
        }
        const getRowWidth = (index: number) => {

            if (this.props.rowProps) {
                return Array.isArray(this.props.rowProps) ?
                    this.props.rowProps[index].width :
                    this.props.rowProps.width
            }

            if (this.props.rowWidth === DEFAULT_ROW_WIDTH) {
                return DEFAULT_ROW_WIDTH
            }
            if (Array.isArray(this.props.rowWidth)) {
                return this.props.rowWidth[index]
            }
            return this.props.rowWidth
        }

        const getRowHeight = (index: number) => {
            if (this.props.rowProps) {
                if (Array.isArray(this.props.rowProps)) {
                    return this.props.rowProps[index].height
                }
                return this.props.rowProps.height
            }

            if (Array.isArray(this.props.rowHeight)) {
                return this.props.rowHeight[index]
            }
            return this.props.rowHeight
        }


        const addUnit = (value?: string | number) => {
            return typeof value === 'number' ? Taro.pxTransform(value) : value
        }

        const renderAvatar = (): JSX.Element | null => {
            if (this.props.avatar) {
                const avatarClass = classNames('skeleton-avatar', {
                    'skeleton-avatar-round': this.props.avatarShape === 'round'
                })
                return <View className={avatarClass} style={` width: ${addUnit(this.props.avatarSize)};
            height: ${addUnit(this.props.avatarSize)} `} />
            }
            return null
        }

        const renderTitle = (): JSX.Element | null => {
            if (this.props.title) {
                return <View className='skeleton-title' style={`width: ${addUnit(this.props.titleWidth)};`} />
            }
            return null
        }
        const renderAction = (): JSX.Element | null => {
            if (this.props.action && this.props.type !== 'column') {
                return <View className='skeleton-action' />
            }
            return null
        }
        const renderRows = (): JSX.Element | null => {
            if (this.props.row) {
                const rowArray = Array.apply(null, Array(this.props.row)).map((item, index) => index)

                const Rows = rowArray.map((item, index) => {
                    return <View key={item} className='skeleton-row' style={`width: ${addUnit(getRowWidth(index))};height: ${addUnit(getRowHeight(index))}`} />
                })
                return <View className='skeleton-rows' children={Rows} />
            }
            return null
        }

        const rootClass = classNames(['skeleton', {
            [`skeleton-type-${this.props.type}`]: true,
            'skeleton-animate-blink': this.props.animate && this.props.animateName === 'blink',
            'skeleton-animate-elastic': this.props.animate && this.props.animateName === 'elastic'
        }])



        return (
            <View className={this.props.className} style={this.props.style}>
                {
                    [...Array(this.props.rows)].map(() => {
                        return <View className={rootClass}>
                            {renderAvatar()}
                            <View className='skeleton-content' children={[renderTitle(), renderRows()]} />
                            {renderAction()}
                        </View>
                    })
                }


            </View>
        )
    }
}
