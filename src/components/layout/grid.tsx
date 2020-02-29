import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { EProps } from '../../../@types/grid'
import { classNames } from '../../utils'
import ESkeleton from './skeleton'
import "../../../styles/grid.scss";


export default class MGrid extends Component<EProps> {


    static options = {
        addGlobalClass: true,
        Version: 1.0,
    };

    constructor(props: EProps) {
        super(props);

    }

    static defaultProps: EProps = {
        skeleton: false
    }

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

    render() {

        const rowsValue = Number(this.props.column) * 2

        /**
         *   处理边框问题 后期需优化
         *   @type {Object}
         */


        return <ESkeleton
            className={classNames(
                {
                    'miao-grid-warp': this.props.skeleton,
                    [`column-${this.props.column}`]: this.props.column,
                    [`gap-${this.props.gap}`]: this.props.gap && !this.props.gapX && !this.props.gapX,
                    [`row-gap-${this.props.gapX}`]: this.props.gapX,
                    [`column-gap-${this.props.gapY}`]: this.props.gapY,
                }
            )}
            style={
                Object.assign({}, {
                    gridAutoFlow: this.props.flowType || 'row',
                    gridTemplateRows: this.props.flowType != "column" ? "unset" : "",

                })}
            loading={this.props.skeleton}
            type={'column'}
            title
            avatar
            row={0}
            rows={rowsValue}
            children={<View style={
                Object.assign({}, {
                    gridAutoFlow: this.props.flowType || 'row',
                    gridTemplateRows: this.props.flowType != "column" ? "unset" : "",

                },
                    this.props.style
                )}
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
            />}
        />

    }
}
