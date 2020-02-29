import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { EProps } from "../../../@types/flex";
import { classNames } from "../../utils";
import '../../../styles/flex.scss'
export default class MFlex extends Component<EProps>{

    static options = {
        addGlobalClass: true,
        Version: 1.1
    }

    static defaultProps: EProps = {
        justify: "start",
        align: "start",
        direction: "row",
        wrap: false
    }

    constructor(props: EProps) {
        super(props)
    }

    render(): JSX.Element {
        const warpClassName = this.props.wrap ? "flex-wrap" : "";
        const justifyClassName = this.props.justify ? `justify-${this.props.justify}` : "";
        const alignClassName = this.props.align ? `align-${this.props.align}` : "";
        const directionClassName = this.props.direction
            ? `flex-direction-${this.props.direction}`
            : "";
        return (
            <View
                className={classNames(
                    `flex ${warpClassName} ${justifyClassName} ${alignClassName} ${directionClassName}`,
                    this.props.className
                )}
                style={Object.assign({}, this.props.style)}
                children={this.props.children}
            />
        );
    }


}
