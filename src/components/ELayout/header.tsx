import Taro, { Component } from "@tarojs/taro";
import { View } from '@tarojs/components';
import { EProps } from "../../@types/header"
import ENavbar from './navbar'



export default class EHeader extends Component<EProps> {

    static options = {
        addGlobalClass: true
    };
    constructor(props: EProps) {
        super(props);
    }
    static defaultProps = {
        //   type: 'config',
        shadow: true,
        border: true,
        title: '',
    }

    render() {
        return <View className="EHeader" >
            {Object.keys(this.props.children).length ? this.props.children :
                <ENavbar
                    title={this.props.title}
                    bgColor={this.props.bgColor}
                    textColor={this.props.textColor}
                    textSize={this.props.textSize}
                    hiddenLeft={this.props.hiddenLeft}
                    hiddenRight={this.props.hiddenLeft}
                    left={this.props.left}
                    right={this.props.right}
                    shadow={this.props.shadow}
                    backIcon={this.props.backIcon}
                    backIconSize={this.props.backIconSize}
                    backIconColor={this.props.backIconColor}
                    backText={this.props.backText}
                    onClickLeft={this.props.onClickLeft}
                    onClickRight={this.props.onClickRight}

                />
            }
        </View >;
    }

    componentDidMount() {
        this.countHeight();
    }

    componentDidUpdate() {
        this.countHeight();
    }

    countHeight() {
        const query = Taro.createSelectorQuery().in(this.$scope);
        query.select('.EHeader').boundingClientRect(rect => {
            if (rect) {
                Taro.eventCenter.trigger('EventSetHeaderStyle', rect)
            }
        }).exec();
    }
}
