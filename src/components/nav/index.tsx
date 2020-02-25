import { ScrollView, Text, View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { EProps } from "../../../@types/nav";
import "../../../styles/tabs.scss";
import { classNames } from "../../utils";

export interface EState {
    activeTab?: number;
    scrollLeft?: number;
    contentScrollLeft?: number;
}
export default class ENav extends Component<EProps, EState> {
    static options = {
        addGlobalClass: true
    };
    static defaultProps: EProps = {
        className: 'text-md',
        type: "default",
        bgColor: 'white',
        activeClassName: "black",
        active: 0,
        items: [],
        underline: true,
    };
    state: EState = {
        activeTab: 0,
        scrollLeft: 0,
        contentScrollLeft: 0
    };

    componentDidMount(): void {
        //this.onClickTab(this.props.active || 0);
    }


    componentWillReceiveProps(
        nextProps: Readonly<EProps>,
        nextContext: any
    ): void {
        const nextActive = nextProps.active;
        const thisActive = this.props.active;
        if (nextActive !== thisActive) {
            this.onClickTab(nextActive || 0);
        }
    }

    onClickTab(index: number) {
        let left = 0;
        this.setState({
            activeTab: index,
            scrollLeft: (index - 1) * 60,
            contentScrollLeft: left + Math.random() / 10
        });

        this.props.onClick && this.props.onClick(this.props.items[index], index);
    }


    render(): JSX.Element {

        return (
            <View
                className={classNames({
                    [`bg-${this.props.bgColor}`]: this.props.bgColor
                }, this.props.className, "ETabs")}
                style={Object.assign({ overflow: "hidden" }, this.props.style)}
            >


                <View className={classNames({
                    'flex': this.props.type == "default"
                }, this.props.itemClassName)}>

                    {this.props.title && this.props.type == 'default' && (
                        <View className={classNames(
                            `${this.props.titleClassName} flex-direction nav-title`
                        )}
                            style={this.props.titleStyle}
                        >
                            {this.props.title}
                        </View>
                    )}
                    <ScrollView
                        scrollX
                        className={classNames({
                            'text-center': this.props.type == "center",
                            'flex text-center': this.props.type == "full"
                        }, 'nav')}
                        style={{ flex: 1 }}
                        scrollWithAnimation={this.props.type == 'default'}
                        scrollLeft={this.state.scrollLeft}
                    >
                        {this.props.items.map((item, index) => (
                            <View
                                key={index}
                                className={classNames({
                                    [`${this.props.activeClassName}`]: this.state.activeTab === index,
                                    'cur': this.state.activeTab === index && this.props.underline,
                                    'flex-sub': this.props.type == 'full'
                                }, "Eitem")}
                                onClick={this.onClickTab.bind(this, index)}
                            >
                                {item.icon && (
                                    <Text className={`EIcon-${item.icon} margin-right-xs`} />
                                )}
                                {item.text && <Text>{item.text}</Text>}
                            </View>
                        ))}
                    </ScrollView>
                </View>

            </View>
        );
    }
}
