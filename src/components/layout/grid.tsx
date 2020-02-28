import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { EProps } from '../../../@types/grid'
import { classNames } from '../../utils'
import ESkeleton from './skeleton'

import "../../../styles/grid.scss";
export default class EGrid extends Component<EProps> {

    // skeleton?:boolean;
    // skeletonRow?:number;
    // skeletonType?:"row"|"column"
    //

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

    render() {

        const rowsValue = Number(this.props.col) * 2

        return <ESkeleton
            className={classNames(
                {
                    'EGrid': this.props.skeleton,
                    [`col-${this.props.col}`]: this.props.col,
                    [`gap-${this.props.gap}`]: this.props.gap && !this.props.gapX && !this.props.gapX,
                    [`row-gap-${this.props.gapX}`]: this.props.gapX,
                    [`col-gap-${this.props.gapY}`]: this.props.gapY,
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
        >
            <View style={Object.assign({}, {
                gridAutoFlow: this.props.flowType || 'row',
                gridTemplateRows: this.props.flowType != "column" ? "unset" : "",

            }, this.props.style)} className={
                classNames({
                    [`col-${this.props.col}`]: this.props.col,
                    [`gap-${this.props.gap}`]: this.props.gap && !this.props.gapX && !this.props.gapX,
                    [`row-gap-${this.props.gapX}`]: this.props.gapX,
                    [`col-gap-${this.props.gapY}`]: this.props.gapY,
                    'scroll-x': this.props.scrollX,
                    'scroll-y': this.props.scrollY,
                    [`bg-${this.props.bgColor}`]: this.props.bgColor,
                }, "EGrid", this.props.className)
            }
            >

                {this.props.children}
            </View>
        </ESkeleton>



    }
}
