import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import { throttle, vibrateShort, classNames, TouchEvent } from "../../utils";
import { EProps } from '../../@types/content'

import '../../style/EContent.scss'

export interface EState {
    dragComplete?: number
    dragState?: number
    textStatus?: number
    scrollY?: boolean
    headerHeight?: number
    footerHeight?: number
    focus?: boolean


    ContentStyleTop?: number
    ContentStyleTransition?: number
    ContentStyleBottom?: number

}
let windowHeight = Taro.getSystemInfoSync().windowHeight;

/**
 * 监听 EContent 的事件
 * 针对刷新、内容高度、加载状态的控制
 * ESetHeader、ESetFooter、ERefreshStart、ERefreshEnd、
 */
export default class EContent extends Component<EProps, EState> {
    static options = {
        addGlobalClass: true
    };


    private _touchStart?: object;
    private _touchEnd?: object;


    /**
     * 是否为最顶部
     */
    private isTop: boolean;
    private isBottom?: boolean;
    /**
     * 下拉参数
     */


    private scrollTop: number;
    private cacheHeader: number
    private cacheFooter?: number



    constructor(props: EProps) {
        super(props);

        this.state = {
            dragState: 0, //刷新状态 0不做操作 1刷新
            textStatus: 0,

            scrollY: true,
            footerHeight: 0,
            headerHeight: 0,
            focus: false,

            ContentStyleTop: 0,
            ContentStyleTransition: 0
            // 回弹动画的时间时间 ms
            // 刷新动画至少显示的时间 ms （用来展示刷新动画）
            // 刷新的阈值 px  拉动长度（低于这个值的时候不执行）
            // 可拉动的最大高度 px
            // 刷新动画占的高度 px
            // 显示文字
        };
        this.isTop = true;
        this.scrollTop = this.props.top || 0;
    }



    /**
     * 开始触摸 可以理解为用户手指与设备接触
     * @type {[type]}
     */

    private onPageComponentTouchStarting = e => {
        this._touchStart = e.touches[0];
    };
    /**
     * 开始滑动 过程中
     * 执行相关ui变化
     */
    private onPageComponentTouchMoveing = e => {

        if (this.props.disable) return;
        /**
         * 检测是否下拉中
         */
        // e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
        // e.stopPropagation();

        const activePosition = e.touches[0]; // 移动时的位置
        const moveX = this._touchStart.screenX - activePosition.screenX;
        const moveY = this._touchStart.screenY - activePosition.screenY;
        const absMoveY = Math.abs(moveY);
        const viewMoveYPX = absMoveY;
        this.isTop && moveY < 0 && this.setState({
            ContentStyleTop: viewMoveYPX,
            ContentStyleTransition: 0,
            dragState: 1,
            scrollY: false,

        })

        this.isBottom && moveY > 0 && this.setState({
            ContentStyleBottom: viewMoveYPX,
            ContentStyleTransition: 0,
            dragState: 1,
            scrollY: false,
        })
    };

    /**
     * 滑动结束 执行相关方法
     * @type {[type]}
     */

    private touchEnd = e => {
        this._touchEnd = e.changedTouches[0];
        const ETouchEvent = new TouchEvent(this._touchStart, this._touchEnd)
        switch (ETouchEvent.getTouthType()) {
            case "left": this.props.onTouchLeft && this.props.onTouchLeft(); break;
            case "right": this.props.onTouchRight && this.props.onTouchRight(); break;
            case "top":

                if (this.state.dragState === 1 && this.isBottom) {
                    this.props.onTouchTop && this.props.onTouchTop();
                } else {

                }
                //    this._onCloseBottom();
                break;
            case "bottom":
                //this._onCloseTop();
                if (this.state.dragState === 1 && this.isTop) {
                    this.props.onTouchBottom && this.props.onTouchBottom();
                } else {

                }
                break;
            default:
                this._onCloseTop();
                this._onCloseBottom();
                break;
        }
    };


    private _onCloseTop = () => {
        this.setState({
            ContentStyleTop: 0,
            ContentStyleTransition: 300,
            dragState: 0,
            scrollY: true,
        })
    }
    private _onCloseBottom = () => {
        this.setState({
            ContentStyleBottom: 0,
            ContentStyleTransition: 300,
            dragState: 0,
            scrollY: true,
        })
    }

    /**
     * 滚动
     * 到顶部事件
     * 底部事件
     */
    private onScrollToUpper = () => this.isTop = true;
    private onScrollToLower = () => this.isBottom = true;

    render() {


        const { textStatus, footerHeight, headerHeight, focus } = this.state;
        const { bottom, children, isOvering } = this.props;


        const bottomNoMore = <View className="no-more">
            <View className="divider" style="">
                <View className="divider__content">
                    {"我也是有底线的"}
                </View>
                <View className="divider__line"></View>
            </View>
        </View>





        const bottomLoading = <View className="load-more" style={{
            height: `${this.state.ContentStyleBottom}px`,
            transition: `all ${this.state.ContentStyleTransition}ms`
        }}>
            <View className="loader-inner ball-pulse">
                <View></View>
                <View></View>
                <View></View>
            </View>
        </View>
        let tabBarBottom = 0;
        {
            if (document.querySelector(".taro-tabbar__tabbar-bottom")) {
                tabBarBottom = document.querySelector(".taro-tabbar__tabbar-bottom")
                    .clientHeight;
            }
        }

        const EContentStyle = {
            height: `${windowHeight - footerHeight - headerHeight - tabBarBottom}px`
        };
        return (

            <View className={classNames({

            }, 'EContent', this.props.className)}
                style={Object.assign(
                    {},
                    //{ top: `${this.state.ContentStyleTop}px` },
                    EContentStyle
                )}
            >
                <View className="refresher" style={Object.assign(
                    {},
                    {
                        height: `${this.state.ContentStyleTop}px`,
                        transition: `all ${this.state.ContentStyleTransition}ms`
                    }
                )}>
                    <View className="refresher-holder">

                        <View className="ball-spin-fade-loader">
                            <View></View>
                            <View></View>
                            <View></View>
                            <View></View>
                            <View></View>
                            <View></View>
                            <View></View>
                            <View></View>
                        </View>

                        <View className="down-text">
                            加载中...
                        </View>
                    </View>
                </View>
                <ScrollView
                    className="scroll-content"
                    style={{
                        top: `${this.isBottom ? -this.state.ContentStyleBottom : this.state.ContentStyleTop}px`,
                        transition: `all ${this.state.ContentStyleTransition}ms`
                    }}

                    // 顶部位置
                    scrollTop={this.scrollTop}
                    // 而页滑动中
                    onScroll={this.onPageScrollIngEvent}

                    // 组件滑动中
                    onTouchStart={this.onPageComponentTouchStarting}
                    onTouchMove={this.onPageComponentTouchMoveing}
                    onTouchEnd={this.touchEnd}


                    onScrollToUpper={this.onScrollToUpper}
                    onScrollToLower={this.onScrollToLower}
                    scrollY //允许纵向滚动
                    enableBackToTop //iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
                    scrollWithAnimation //在设置滚动条位置时使用动画过渡
                    //距底部/右边多远时（单位px），触发 scrolltolower 事件
                    lowerThreshold={bottom >= 0 ? bottom : 100}
                >
                    {children}
                    {this.props.isNoMore && bottomNoMore}
                    {focus ? <View className="keyboard"></View> : ""}
                </ScrollView>
                {bottomLoading}
            </View >
        );
    }



    componentWillMount() {
        Taro.eventCenter.on("broadcast.header.view", (rect) => {
            throttle({
                method: () => {
                    if (this.cacheHeader !== rect.height) {
                        windowHeight = Taro.getSystemInfoSync().windowHeight;
                        this.cacheHeader = rect.height;
                        this.setState({ headerHeight: rect.height });
                    }
                },
                type: "header"
            });
        });




        Taro.eventCenter.on("broadcast.footer.view", rect => {

            console.log('footer',rect)
            // 优化 Content 渲染频率
            throttle({
                method: () => {
                    if (this.cacheFooter !== rect.height) {
                        windowHeight = Taro.getSystemInfoSync().windowHeight;
                        this.cacheFooter = rect.height;
                        this.setState({footerHeight: rect.height});
                    }
                },
                type: "footer"
            });
        });
        Taro.eventCenter.on("focus", () => { this.setState({ focus: true }) });
        Taro.eventCenter.on("blur", () => { this.setState({ focus: false }) });
    }

    componentWillUnmount() {

        Taro.eventCenter.off("EventSetHeaderStyle");
        Taro.eventCenter.off("EventSetFooterStyle");
        Taro.eventCenter.off("ERefreshStart");
        Taro.eventCenter.off("ERefreshEnd");
        Taro.eventCenter.off("focus");
        Taro.eventCenter.off("blur");
    }

    componentWillReceiveProps(nextProps) {
        this.state.ContentStyleTop && this._onCloseTop();
        this.state.ContentStyleBottom && this._onCloseBottom();
    }
    //static


    onPageScrollIngEvent = e => {

        const { scrollTop } = e.detail;
        const { scrollHeight, clientHeight } = e.target;
        this.isTop = scrollTop <= 60; // 滚动到了顶部
        this.isBottom = scrollHeight - clientHeight - scrollTop < 60;
        // 修复滚动不流畅的问题
        this.scrollTop = scrollTop;
        this.props.onScroll && this.props.onScroll(e.detail);
    };






}
