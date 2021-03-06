import { ScrollView, Text, View } from "@tarojs/components";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../../utils/model";
import { EProps } from "../../../@types/tabs";

import EIconGroup from '../icon/group'

import "../../../styles/tabs.scss";
import { classNames, getRectNumber, isAliPay, screenPercent, generateId } from "../../utils";

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
        addGlobalClass: true,
        Version: 1.0,
    };


    constructor(props: EProps) {

        super(props)
        //const componentWarppers = Object.keys(props.children).length == props.items.length?props.children:
        props.items.map((item) => {
            item.id = generateId();

        })




    }

    static defaultProps: EProps = {
        type: "default",
        underline: true,
        //bgColor: "",
        //activeColor: "",
        active: 0,
        items: [],
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


        const id = this.props.items[index].id;
        const id0 = this.props.items[0].id;
        const query = Taro.createSelectorQuery();
        const view = query.select(`#${id}`);
        const view0 = query.select(`#${id0}`);
        let left = 0;
        const promise = new Promise(resolve => {

            new Promise(resolve1 => {

                view0.boundingClientRect().exec(res => {
                    const data = res[0];
                    console.log(data,111)
                    left = data.left;
                    resolve1();
                });
            }).then(() => {
                view.boundingClientRect().exec(res => {
                    const data = res[getRectNumber()];

                    if (isAliPay) {
                        left = data.width * index;
                    } else {
                        left = Math.abs(left - data.left);
                    }
                    resolve(left);
                });
            });
        });
        promise.then(() => {
            this.setState({
                activeTab: index,
                scrollLeft: (index - 1) * 60,
                contentScrollLeft: left + Math.random() / 10
            });
        });
        this.props.onClick && this.props.onClick(index);
    }

    renderDefaultComponent() {
        console.log((this.props.activeColor && this.state.activeTab === 0))
        return (

            <View />
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
        // const bgColorClassName: string = this.props.bgColor
        //     ? BG_COLOR_LIST[this.props.bgColor]
        //     : "";
        // const activeColor: string = this.props.activeColor
        //     ? TEXT_COLOR_LIST[this.props.activeColor]
        //     : "";
        // // 空组件镇压邪魔
        // const centerComponent = <View />;
        // const renderComponent = () => {
        //     const { type, tabs } = this.props;
        //     const { activeTab, scrollLeft } = this.state;
        //     const defaultParameter = {
        //         bgColorClassName,
        //         activeColor,
        //         tabs,
        //         activeTab,
        //         scrollLeft
        //     };
        //     if (type === "default")
        //         return this.renderDefaultComponent(defaultParameter);
        //     else if (type === "verb")
        //         return this.renderVerbComponent(defaultParameter);
        //     else if (type === "center")
        //         return this.renderCenterComponent(defaultParameter);
        //     else return <View />;
        // };



        return (
            <View
                className={classNames(this.props.className, "ETabs")}
                style={Object.assign({ overflow: "hidden" }, this.props.style)}
            >
                <View className={classNames({
                    'header-fixed': this.props.headerFixed
                }, this.props.headerClassName, "flex")}
                    style={this.props.headerStyle}
                >
                    {this.props.headerRenderStart && <View className="flex-direction">
                        {this.props.headerRenderStart}
                    </View>}
                    <ScrollView
                        scrollX
                        className={classNames(`nav flex-direction`)}
                        scrollWithAnimation
                        scrollLeft={this.state.scrollLeft}
                    >
                        {this.props.items.map((item, index) => (
                            <View
                                key={index}
                                className={classNames({
                                    'cur': this.props.underline && this.state.activeTab === index,
                                }, "Eitem", (this.props.activeClassName && this.state.activeTab === index) ? this.props.activeClassName : this.props.itemClassName)}
                                onClick={this.onClickTab.bind(this, index)}
                            >
                                {item.icon && (
                                    <Text className={`EIcon-${item.icon} margin-right-xs`} />
                                )}
                                {item.text && <Text>{item.text}</Text>}
                            </View>
                        ))}
                    </ScrollView>
                    {this.props.headerRenderEnd && <View className="flex-direction">
                        {this.props.headerRenderEnd}
                    </View>}

                </View>


                <ScrollView
                    scrollY
                    className="scrollx"
                    style={{
                        width: "auto",
                        transform: `translateX(-${pxTransform(
                            contentScrollLeft / screenPercent
                        )})`,
                        transitionDuration: `${duration}s`
                    }}

                    onTouchStart={e => {

                        if (!this.props.touchMove) return;
                        scrollLeftContent = 0;
                        duration = 0;
                        move = e.touches[0].pageX;
                    }}
                    onTouchMove={e => {
                    //    console.log(e)
                        if (!this.props.touchMove) return;
                        if (scrollLeftContent === 0)
                            scrollLeftContent = e.touches[0].pageX;
                        distance = e.touches[0].pageX - scrollLeftContent;
                        this.setState({
                            contentScrollLeft: contentScrollLeft - distance
                        });
                        scrollLeftContent = e.touches[0].pageX;
                    }}
                    onTouchEnd={e => {
                        if (!this.props.touchMove) return;
                        duration = 0.3;
                        move = e.changedTouches[0].pageX - move;
                        const maxIndex = this.props.items.length - 1;
                        if (move < -50)
                            this.onClickTab(
                                this.state.activeTab + 1 > maxIndex
                                    ? maxIndex
                                    : this.state.activeTab + 1
                            );
                        else if (move > 50) this.onClickTab(this.state.activeTab - 1);
                        else this.onClickTab(this.state.activeTab);
                    }}
                >

                    {this.props.items.map((item, key) => {
                        return <View className={classNames({
                            'current': key === this.state.activeTab
                        }, "tab-item")} id={item.id}>{typeof this.props.children[key] != 'undefined' ? this.props.children[key] : item.component}</View>
                    })}


                </ScrollView>
            </View>
        );
    }
}
//        {this.props.children}
