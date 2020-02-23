import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { EProps } from '../@types/grid'
import { classNames } from '../utils'
import "../style/EGrid.scss";
export default class EGrid extends Component<EProps> {


    static options = {
        addGlobalClass: true
    };

    constructor(props: EProps) {
        super(props);
        console.log(props)
    }
    render() {
        return <View style={Object.assign({}, this.props.style)} className={
            classNames({
                [`col-${this.props.col}`]: this.props.col,
                [`gap-${this.props.gap}`]: this.props.gap,
                [`row-gap-${this.props.gapX}`]: this.props.gapX,
                [`col-gap-${this.props.gapY}`]: this.props.gapY,
                'scroll-x': this.props.scrollX,
                'scroll-y': this.props.scrollY,

            }, "EGrid", this.props.className)
        }>
            {this.props.children}
        </View>
    }
}
