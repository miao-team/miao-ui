import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { EProps } from '../../../@types/grid'
import { classNames } from '../../utils'
import "../../../styles/grid.scss";
export default class EGrid extends Component<EProps> {




    static options = {
        addGlobalClass: true,
        Version: 1.0,
    };

    constructor(props: EProps) {
        super(props);
    }
    render() {
        return <View style={Object.assign({}, {
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
    }
}
