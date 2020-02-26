import Nerv from "nervjs";
import Taro, { Component, nextTick } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import { throttle, vibrateShort, classNames, TouchEvent } from "../../utils";
import { EProps } from '../../../@types/content'

import ELoading from '../loading'

import '../../../styles/content.scss'

export interface EState {
    dragState?: number // 下拉状态
    scrollY?: boolean
    headerHeight?: number
    footerHeight?: number
    ContentStyleTop?: number
    ContentStyleTransition?: number
    ContentStyleBottom?: number
    config?: {
        animationReturnTime?: number
        animationMaxHeight?: number
        deviationX?: number, //有效偏移量
        deviationY?: number,
        effectiveX?: number, // 有效移动距离
        effectiveY?: number,
        animationText?: string
    }

}
let windowHeight = Taro.getSystemInfoSync().windowHeight;


let topPositionValue = 0;



const bottomNoMore = <View className="no-more">
    <View className="divider" style="">
        <View className="divider__content">
            {"我也是有底线的"}
        </View>
        <View className="divider__line"></View>
    </View>
</View>

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



    constructor(props: EProps) {
        super(props);
        this.state = {
            dragState: 0, //刷新状态 0不做操作 1刷新
            scrollY: true,
            footerHeight: 0,
            headerHeight: 0,

            ContentStyleTop: 0,
            ContentStyleBottom: 0,
            ContentStyleTransition: 0,
            config: {
                animationReturnTime: 300,  //回弹动画的时间时间 ms
                animationMaxHeight: 100, //可拉动的最大高度 px
                deviationX: 50, //有效偏移量
                deviationY: 50,
                effectiveX: 60, // 有效移动距离
                effectiveY: 60,
                animationText: '加载中...', //显示文字
            }

        };
        this.isTop = true;
        this.scrollTop = this.props.topPosition || 0;
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
        // topPositionValue = Math.abs(this._touchStart.screenY - e.touches[0].screenY);
        //
        //
        // console.log(topPositionValue)
        //
        // return ;

        if (this.props.disable) {
            e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
            e.stopPropagation();
            return;
        }

        const activePosition = e.touches[0]; // 移动时的位置
        //const moveX = this._touchStart.screenX - activePosition.screenX;
        const moveY = this._touchStart.screenY - activePosition.screenY;
        const absMoveY = Math.abs(moveY);

        const viewMoveYPX = (absMoveY < (this.state.config.animationMaxHeight || 100)) ?
            absMoveY :
            (this.state.config.animationMaxHeight || 100);

        this.isTop && moveY < 0 && this.props.onTouchBottom && this.setState({
            ContentStyleTop: viewMoveYPX,
            ContentStyleTransition: 0,
            dragState: 1, scrollY: false
        })

        this.isBottom && moveY > 0 && this.props.onTouchTop && this.setState({
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

    private onPageComponentTouchEnd = e => {
        this._touchEnd = e.changedTouches[0];
        const ETouchEvent = new TouchEvent(this._touchStart, this._touchEnd, this.state.config)
        //console.log('onTouch', ETouchEvent.getTouthType())
        switch (ETouchEvent.getTouthType()) {
            case "left": this.state.dragState && this.props.onTouchLeft && this.props.onTouchLeft(); break;
            case "right": this.state.dragState && this.props.onTouchRight && this.props.onTouchRight(); break;
            case "top": this.state.dragState === 1 && this.isBottom && this.props.onTouchTop && this.props.onTouchTop(); break;
            case "bottom": this.state.dragState === 1 && this.isTop && this.props.onTouchBottom && this.props.onTouchBottom(); break;
            default:
                this.isTop && this.state.dragState && this._onCloseComponentScrollTypeTop();
                this.isBottom && this.state.dragState && this._onCloseComponentScrollTypeBottom();
                break;
        }
    };


    private _onCloseComponentScrollTypeTop = () => {
        this.setState({
            ContentStyleTop: 0,
            ContentStyleTransition: this.state.config.animationReturnTime || 300,
            dragState: 0,
            scrollY: true,
        })
    }
    private _onCloseComponentScrollTypeBottom = () => {
        this.setState({
            ContentStyleBottom: 0,
            ContentStyleTransition: this.state.config.animationReturnTime || 300,
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


    render(): JSX.Element {
        const bottomLoading =
            <View className="load-more" style={{
                height: `${this.state.ContentStyleBottom}px`,
                transition: `all ${this.state.ContentStyleTransition}ms`
            }}>
                <ELoading type="icon" iconColor="red" iconSize="md" icon="three-dots" show={this.isBottom && this.state.dragState} />
            </View>
        let tabBarBottom = 0;
        {
            if (document.querySelector(".taro-tabbar__tabbar-bottom")) {
                tabBarBottom = document.querySelector(".taro-tabbar__tabbar-bottom")
                    .clientHeight;
            }
        }
        return (

            <View className={classNames({

            }, 'EContent', this.props.className)}
                style={Object.assign(
                    {
                        height: `${windowHeight - this.state.footerHeight - this.state.headerHeight - tabBarBottom}px`
                    },
                    this.props.style
                )}
            >
                {this.props.onTouchBottom && <View
                    className="refresher"
                    style={{
                        height: `${this.state.ContentStyleTop}px`,
                        transition: `all ${this.state.ContentStyleTransition}ms`
                    }}>
                    <ELoading type="icon" iconColor="red" iconSize="md" icon="triangle" show={this.isTop && this.state.dragState} />
                </View>}
                <ScrollView
                    className="scroll-content"
                    style={{
                        //top:`${topPositionValue}px`,
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
                    onTouchEnd={this.onPageComponentTouchEnd}
                    onScrollToUpper={this.onScrollToUpper}
                    onScrollToLower={this.onScrollToLower}
                    scrollY //允许纵向滚动
                    enableBackToTop //iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
                    scrollWithAnimation //在设置滚动条位置时使用动画过渡
                //距底部/右边多远时（单位px），触发 scrolltolower 事件
                //lowerThreshold={100}
                >
                    {this.props.children}
                    {this.props.isNoMore && bottomNoMore}
                </ScrollView>
                {this.props.onTouchTop && bottomLoading}
            </View >
        );
    }





    componentWillMount() {
        /**
         * 监听来自 header 的高度
         * @type {[type]}
         */
        Taro.eventCenter.on("page.content.header.height", height => {
            console.log(height, "header")
            this.setState({ headerHeight: height })
        });
        Taro.eventCenter.on("page.content.footer.height", height => {
            console.log(height, "footer")
            this.setState({ footerHeight: height });
        });
    }

    componentWillUnmount() {

        Taro.eventCenter.off("page.content.header.height");
        Taro.eventCenter.off("page.content.footer.height");
        Taro.eventCenter.off("ERefreshStart");
        Taro.eventCenter.off("ERefreshEnd");
    }

    componentWillReceiveProps(nextProps) {
        this.state.ContentStyleTop && this._onCloseComponentScrollTypeTop();
        this.state.ContentStyleBottom && this._onCloseComponentScrollTypeBottom();
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
