import Nerv from "nervjs";
import Taro, { Component, setState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { EProps } from '../../../@types/grid'

import { classNames } from '../../utils'
import ESkeleton from './skeleton'
import "../../../styles/grid.scss";
export interface IState {
    skeletonLoading?: boolean
}

export default class MGrid extends Component<EProps, IState> {


    static options = {
        addGlobalClass: true,
        Version: 1.0,
    };


    static defaultProps: EProps = {
        skeleton: false
    }


    static onShowSkeleton: any;
    static onHideSkeleton: any;

    constructor(props: EProps) {
        super(props);
        this.state = { skeletonLoading: props.skeleton }
        /**
         *   相关方法暴露给外部
         *   @type {[type]}
         */
        MGrid.onShowSkeleton = this.showSKeleton.bind(this);
        MGrid.onHideSkeleton = this.hiddenSKeleton.bind(this);
    }




    showSKeleton = () => this.setState({ skeletonLoading: true })

    hiddenSKeleton = () => this.setState({ skeletonLoading: false })




    private getViewComponentStyle = () => {
        return {
            gridAutoFlow: this.props.flowType || 'row',
            gridTemplateRows: this.props.flowType != "column" ? "unset" : "",

        };
    }

    private createSKeletonDefaultProps = (props: EProps) => {
        return Object.assign(
            {
                className: classNames(
                    {
                        'miao-grid-warp': props.skeleton,
                        [`column-${this.props.column}`]: props.column,
                        [`gap-${this.props.gap}`]: props.gap && !props.gapX && !this.props.gapX,
                        [`row-gap-${this.props.gapX}`]: props.gapX,
                        [`column-gap-${this.props.gapY}`]: props.gapY,
                    }
                ),
                style: this.getViewComponentStyle(),
            },
            props.skeletonProps,
            {
                type: 'column',
                rows: Number(this.props.column) * 2,
            }
        );
    }

    /**
     *   子项目 加边框处
     *   @type {[type]}
     */

    private getGridListTypeComponent = () => {
        if (Array.isArray(this.props.children)) {
            const itemTotalNumber = this.props.children.length;
            const colNumber = Number(this.props.column);
            return this.props.children.map((item, key) => {
                if (Taro.isValidElement(item)) {
                    return Taro.cloneElement(item, {
                        className: classNames(
                            (key % colNumber != colNumber - 1) ?
                                ((itemTotalNumber - key > Math.ceil(itemTotalNumber / colNumber)) ?
                                    {
                                        'solid-right': this.props.lineY,
                                        'solid-bottom': this.props.lineX
                                    } :
                                    { 'solid-right': this.props.lineY, }
                                ) :
                                { 'solid-bottom': this.props.lineX }
                            , item.props.className
                        )
                    })
                }
                return item;
            });

        }
        return this.props.children;
    }
    /**
     *   接收上级组件 状态改变
     *   @method componentWillReceiveProps
     *   @param  {[type]}                  nextProps [description]
     *   @return {[type]}                  [description]
     */

    componentWillReceiveProps(nextProps) {
        if (nextProps.skeleton != this.state.skeletonLoading) {
            this.setState({
                skeletonLoading: nextProps.skeleton
            })
        }

    }

    render() {
        return <ESkeleton {...this.createSKeletonDefaultProps(this.props)} loading={this.state.skeletonLoading} key={`grid-${this.props.key}`}>
            <View style={
                Object.assign(this.getViewComponentStyle(), this.props.style)}
                className={
                    classNames(
                        {
                            [`column-${this.props.column}`]: this.props.column,
                            [`gap-${this.props.gap}`]: this.props.gap && !this.props.gapX && !this.props.gapX,
                            [`row-gap-${this.props.gapX}`]: this.props.gapX,
                            [`column-gap-${this.props.gapY}`]: this.props.gapY,
                            'scroll-x': this.props.scrollX,
                            'scroll-y': this.props.scrollY,
                            [`bg-${this.props.bgColor}`]: this.props.bgColor,
                        },
                        "miao-grid-warp",
                        `column-${this.props.column}`,
                        this.props.className
                    )
                }
                children={(this.props.lineX || this.props.lineY) ? this.getGridListTypeComponent() : this.props.children}
            />

        </ESkeleton>

    }
}
