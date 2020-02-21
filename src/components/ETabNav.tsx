import { ScrollView, Text, View } from "@tarojs/components";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../utils/model";
import { EProps } from "../@types/tabnav";

import "../style/ETabs.scss";
import { classNames, getRectNumber, isAliPay, screenPercent } from "../utils";

export interface EState {
    activeTab?: number;
    scrollLeft?: number;
    contentScrollLeft?: number;
}

let move = 0;
let scrollLeftContent = 0;
let duration = 0.3;
let distance = 0;
export default class ETabs extends Component<EProps, EState> {
    static options = {
        addGlobalClass: true
    };
    static defaultProps: EProps = {
        type: "default",
        bgColor: undefined,
        activeColor: "black",
        active: 0,
        touchMove: false
    };
    state: EState = {
        activeTab: 0,
        scrollLeft: 0,
        contentScrollLeft: 0
    };

    componentDidMount(): void {
        this.onClickTab(this.props.active || 0);
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

        this.props.onClick && this.props.onClick(index);
    }

    renderDefaultComponent(paramters: {
        bgColorClassName: string;
        activeColor: string;
        tabs: any[];
        activeTab: number;
        scrollLeft: number;
    }) {
        const {
            bgColorClassName,
            activeColor,
            tabs,
            activeTab,
            scrollLeft
        } = paramters;
        return (
            <ScrollView
                scrollX
                className={`${bgColorClassName} nav`}
                scrollWithAnimation
                scrollLeft={scrollLeft}
            >
                {tabs.map((item, index) => (
                    <View
                        key={index}
                        className={classNames({
                            [`${activeColor} ${this.props.activeClass} cur`]: activeTab === index
                        }, "Eitem")}
                        onClick={this.onClickTab.bind(this, index)}
                    >
                        {item.icon ? (
                            <Text className={`EIcon-${item.icon} margin-right-xs`} />
                        ) : (
                                ""
                            )}
                        <Text>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        );
    }

    renderVerbComponent(paramters: {
        bgColorClassName: string;
        activeColor: string;
        tabs: any[];
        activeTab: number;
    }) {
        const { bgColorClassName, activeColor, tabs, activeTab } = paramters;
        return (
            <ScrollView scrollX className={`${bgColorClassName} nav`}>
                <View className="flex text-center">
                    {tabs.map((item, index) => (
                        <View
                            key={index}
                            className={classNames({
                                [`${activeColor} ${this.props.activeClass} cur`]: activeTab === index
                            }, "Eitem flex-sub")}
                            onClick={this.onClickTab.bind(this, index)}
                        >
                            {item.icon ? (
                                <Text className={`EIcon-${item.icon} margin-right-xs`} />
                            ) : (
                                    ""
                                )}
                            <Text>{item.text}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }

    renderCenterComponent(paramters: {
        bgColorClassName: string;
        activeColor: string;
        tabs: any[];
        activeTab: number;
    }) {
        const { bgColorClassName, activeColor, tabs, activeTab } = paramters;
        return (
            <ScrollView scrollX className={`${bgColorClassName} nav text-center`}>
                {tabs.map((item, index) => (
                    <View
                        key={index}
                        className={classNames({
                            [`${activeColor} ${this.props.activeClass} cur`]: activeTab === index
                        }, "Eitem")}
                       
                        onClick={this.onClickTab.bind(this, index)}
                    >
                        {item.icon ? (
                            <Text className={`EIcon-${item.icon} margin-right-xs`} />
                        ) : (
                                ""
                            )}
                        <Text>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        );
    }

    render(): any {
        const { contentScrollLeft } = this.state;
        const bgColorClassName: string = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : "";
        const activeColor: string = this.props.activeColor
            ? TEXT_COLOR_LIST[this.props.activeColor]
            : "";
        // 空组件镇压邪魔
        const centerComponent = <View />;
        const renderComponent = () => {
            const { type, tabs } = this.props;
            const { activeTab, scrollLeft } = this.state;
            const defaultParameter = {
                bgColorClassName,
                activeColor,
                tabs,
                activeTab,
                scrollLeft
            };
            if (type === "default")
                return this.renderDefaultComponent(defaultParameter);
            else if (type === "verb")
                return this.renderVerbComponent(defaultParameter);
            else if (type === "center")
                return this.renderCenterComponent(defaultParameter);
            else return <View />;
        };
        return (
            <View
                className={classNames(this.props.className, "ETabs")}
                style={Object.assign({ overflow: "hidden" }, this.props.style)}
            >
                {renderComponent()}
            </View>
        );
    }
}
