import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import ERefresher from "../ERefresher";
import { throttle, vibrateShort, classNames } from "../../utils";


import { EProps } from '../../@types/content'
export interface EState {
    isRefreshing?: boolean
    isUprefreshing?: boolean
    dragComplete?: number
    dragState?: number
    textStatus?: number
    downDragStyle?: object
    dragStyle?: object
    scrollY?: boolean
    headerHeight?: number
    footerHeight?: number
    focus?: boolean
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

    /**
     * 开始点击或触摸
     * 时的位置值
     */
    private start_p;
    /**
     * 是否为最顶部
     */
    private isTop: boolean;
    /**
     * 下拉参数
     */
    private refresherConfig: {
        threshold: number
        maxHeight: number
    };

    private needPrevent: boolean;
    private scrollTop: number;
    private cacheHeader: number
    private cacheFooter?: number
    constructor(props: EProps) {
        super(props);

        this.state = {
            /**
             * 下拉状态
             * true:下拉中
             * false:下拉结束
             */
            isRefreshing: false,
            isUprefreshing: false,
            //下拉框的样式
            dragStyle: { top: "0px" },
            //下拉图标的样式
            downDragStyle: { height: "0px" },
            textStatus: 0,
            dragState: 0, //刷新状态 0不做操作 1刷新
            dragComplete: 0, // 拖拽状态的完成度
            scrollY: true,
            footerHeight: 0,
            headerHeight: 0,
            focus: false
        };
        this.isTop = true;
        /**
        * 参数
         */
        this.refresherConfig = {
            recoverTime: 300, // 回弹动画的时间时间 ms
            refreshTime: 500, // 刷新动画至少显示的时间 ms （用来展示刷新动画）
            threshold: 70, // 刷新的阈值 px  拉动长度（低于这个值的时候不执行）
            maxHeight: 200, // 可拉动的最大高度 px
            height: 80, // 刷新动画占的高度 px
            showText: true, // 显示文字
            refreshText: ["", "", ""], // 刷新文字 ["下拉刷新", "释放刷新", "加载中"]
            //  ...this.props.refresherConfig
        };
        this.needPrevent = false;
        this.scrollTop = this.props.top || 0;
    }




    /**
     * 开始下拉
     */
    private onPageComponentTouchMoveing = e => {

        /**
         * 检测 否禁止
         */
        if (this.props.disable || this.props.disableTop) return;
        /**
         * 检测是否下拉中
         */
        if (this.state.isRefreshing) {
            e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
            e.stopPropagation();
            return;
        }
        /**
         * 如果页面不在顶部 则禁止
         */
        if (!this.isTop) {
            this.start_p = e.touches[0];
            return;
        }


        const start_x = this.start_p.clientX;
        const start_y = this.start_p.clientY;
        const move_p = e.touches[0]; // 移动时的位置

        const move_x = move_p.clientX;
        const move_y = move_p.clientY;
        const deviationX = 0.3; // 左右偏移量(超过这个偏移量不执行下拉操作)

        //得到偏移数值
        let dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);


        if (dev < deviationX) {
            // 当偏移数值大于设置的偏移数值时则不执行操作
            let pY = move_y - start_y;
            pY = Math.pow(10, Math.log10(Math.abs(pY)) / 1.3); // 拖动倍率
            // let dragComplete = parseInt((pY / this.refresherConfig.threshold) * 100); 原
            let dragComplete = (pY / this.refresherConfig.threshold) * 100;
            if (dragComplete > 100) {
                dragComplete = 100;
            }


            this.setState({ dragComplete });
            if (move_y - start_y > 0) {
                // 下拉操作

                if (this.needPrevent) {
                    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
                    e.stopPropagation();
                }

                if (pY >= this.refresherConfig.threshold) {

                    // 设置状 正在加载中...
                    if (this.state.dragState === 0) {
                        vibrateShort();
                        this.setState({ dragState: 1, textStatus: 1 });
                    }
                } else {
                    // 加载完全成
                    this.setState({ dragState: 0, textStatus: 0 });
                }
                if (pY >= this.refresherConfig.maxHeight) {
                    pY = this.refresherConfig.maxHeight;
                }
                this.setState({
                    /**
                     * 下拉时 EContent TOP 值也随之变化
                     * 注释后 同不变化
                     */
                    // dragStyle: {top: pY + "px"},
                    downDragStyle: {
                        height: pY + "px"
                    },
                    scrollY: false //拖动的时候禁用
                });
            }
        }
    };

    /**
        * 下拉/触摸
        * 结束
        */

    private touchEnd = e => {
        this.needPrevent = this.isTop;
        if (this.state.dragState === 1) {
            // 触发下拉刷新
            this.onShowingLoadingRefreshingComponent();
            this.props.onInitialize && this.props.onInitialize();
        } else {
            this.onShowingLoadingRefreshingComponent(false);
        }

    };
    /**
     * 滚动到顶部事件
     */
    private onScrollToUpper = () => {
        //滚动到顶部事件
    };

    /**
     * 触发加载更多
     * 滑动:到底部
     *
     * @memberof Content
     */
    private onScrollToLower = () => {
        if (this.props.disable || this.props.disableBottom || this.props.isOvering) return;
        throttle({
            method: () => {

                this.state.isUprefreshing == false && this.props.onLoadmore &&
                    this.props.onLoadmore();
                this.setState({ isUprefreshing: true })
            },
            ahead: true
        });
    };

    render() {


        const { isUprefreshing, dragStyle, downDragStyle, dragComplete, textStatus, footerHeight, headerHeight, isRefreshing, focus } = this.state;

        const {
            isLoading,
            bottom,
            onLoadmore,
            children,
            isOvering,


            hasMoreText,
            noMoreText,
            removeHeight,
            topStart
        } = this.props;


        const bottomNoMore = <View className="no-more">
            <View className="divider" style="">
                <View className="divider__content">
                    {noMoreText || "我也是有底线的"}
                </View>
                <View className="divider__line"></View>
            </View>
        </View>
        const bottomLoading = <View className="load-more">
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
            height: `${windowHeight -
                footerHeight -
                headerHeight -
                tabBarBottom -
                (removeHeight || 0)}px`
        };


        // if (topStart === true) {
        //     EContentStyle.position = "static";
        // }

        return (

            [
                <View className="refresher" style={downDragStyle}>
                    <View className="refresher-holder">
                        <ERefresher complete={dragComplete} isRefreshing={isRefreshing} />
                        {this.refresherConfig.showText ? (
                            <View className="down-text">
                                {this.refresherConfig.refreshText[textStatus]}
                            </View>
                        ) : null}
                    </View>
                </View>,
                <View className={classNames({

                }, 'EContent', this.props.className)}
                    style={EContentStyle}
                >

                    <ScrollView
                        className="scroll-content"
                        style={dragStyle}
                        onTouchMove={this.onPageComponentTouchMoveing}
                        onTouchEnd={this.touchEnd}
                        onTouchStart={this.onPageComponentTouchStarting}
                        onScrollToUpper={this.onScrollToUpper}
                        onScrollToLower={this.onScrollToLower}
                        onScroll={this.onScroll}
                        scrollTop={this.scrollTop}

                        scrollY //允许纵向滚动
                        enableBackToTop //iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
                        scrollWithAnimation //在设置滚动条位置时使用动画过渡
                        //距底部/右边多远时（单位px），触发 scrolltolower 事件
                        lowerThreshold={bottom >= 0 ? bottom : 100}
                    >
                        {children}
                        {isLoading && isUprefreshing && bottomLoading}
                        {isOvering && bottomNoMore}
                        {focus ? <View className="keyboard"></View> : ""}
                    </ScrollView>
                </View>
            ]


        );
    }



    componentWillMount() {
        Taro.eventCenter.on("EventSetHeaderStyle", (rect) => {
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
        Taro.eventCenter.on("EventSetFooterStyle", rect => {
            // 优化 Content 渲染频率
            throttle({
                method: () => {
                    if (this.cacheFooter !== rect.height) {
                        windowHeight = Taro.getSystemInfoSync().windowHeight;
                        this.cacheFooter = rect.height;
                        this.setState({
                            footerHeight: rect.height
                        });
                    }
                },
                type: "footer"
            });
        });
        Taro.eventCenter.on("ERefreshStart", this.onShowingLoadingRefreshingComponent);
        Taro.eventCenter.on("ERefreshEnd", () => this.onShowingLoadingRefreshingComponent);
        Taro.eventCenter.on("focus", () => { this.setState({ focus: true }) });
        Taro.eventCenter.on("blur", () => { this.setState({ focus: false }) });
        //
        (typeof this.props.onInitialize !== "function") && (this.disabled = true);



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

        if (nextProps.isLoading === false) {
            this.state.isRefreshing && this.onShowingLoadingRefreshingComponent(false);
            this.state.isUprefreshing && this.onShowingLoadingUprefreshingComponent(false);
        }


        if (this.scrollTop != nextProps.scrollTop) {
            this.scrollTop = nextProps.scrollTop;
        }
        // if (nextProps.refreshStatus === 2) {
        //     this.onShowingLoadingRefreshingComponent(false);
        // }
        // if (nextProps.refreshStatus === 1) {
        //     this.onShowingLoadingRefreshingComponent();
        // }
    }





    //static


    onScroll = e => {
        const { scrollTop } = e.detail;
        {
            this.scrollTop = scrollTop; // 修复滚动不流畅的问题
        }
        const { onScrollUp, onScrollDown, onScroll, onScrollEnd } = this.props;
        this.isTop = scrollTop <= 60; // 滚动到了顶部
        // deltaY在微信小程序适用
        if (scrollTop > 200) {
            onScrollUp && onScrollUp();
        } else {
            onScrollDown && onScrollDown();
        }

        throttle({
            method: () => {
                onScrollEnd && onScrollEnd(e);
            },
            delay: 100,
            type: "scrollEnd"
        });

        onScroll && onScroll(e);

        // throttle({
        //   method: () => {
        //     Taro.eventCenter.trigger('scrollStart', {})
        //   },
        //   ahead: true,
        //   delay: 1000
        // })
        // throttle({
        //   method: () => {
        //     Taro.eventCenter.trigger('scrollEnd', {})
        //   },
        //   delay: 500
        // })
    };

    /**
     * 开始展示
     * loading 加载
     *
     */

    private onShowingLoadingUprefreshingComponent = (iShowinng?: boolean | any) => {
        throttle({
            method: () => {
                this.setState({
                    isUprefreshing: false,
                })
            },
            ahead: true,
            type: "hideLoading"
        });
    }

    private onShowingLoadingRefreshingComponent = (iShowinng?: boolean | any) => {
        const hiddenHandler = () => throttle({
            method: () => {
                this.setState({
                    dragState: 0,
                    //对应于下拉放开后
                    dragStyle: { top: "0px", transition: `all 300ms` },
                    downDragStyle: { height: "0px", transition: `all 300ms` },
                    scrollY: true,
                    isRefreshing: false,
                    textStatus: 0,
                })
            },
            ahead: true,
            type: "hideRefresh"
        });
        const showHandler = () => throttle({
            method: () => {
                const time = 0.2;
                this.setState({
                    // dragStyle: {
                    //     top: this.refresherConfig.height + "px",
                    //     transition: `all ${time}s`
                    // },
                    downDragStyle: {
                        height: this.refresherConfig.height + "px",
                        transition: `all ${time}s`
                    },
                    dragComplete: 100,
                    isRefreshing: true,
                    textStatus: 2
                });
            },
            ahead: true,
            type: "showRefresh"
        });
        (iShowinng === false) ? hiddenHandler() : showHandler()
    };


    /**
         * 开始触摸
         * 可以理解为用户手指与设备接触
         */
    private onPageComponentTouchStarting = e => {
        this.start_p = e.touches[0];
    };

}


// EContent.getDerivedStateFromProps = (currProps, currState) => {
//     if (currProps.isLoading === false && currState.isRefreshing == true) {
//         return
//     }
//     return null
// }
