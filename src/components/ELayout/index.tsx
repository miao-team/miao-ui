import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import EHeader from "./header";
import EFooter from "./footer";
import EContent from "./content";
import ETabBar from '../ETabBar'
import { EProps } from '../../@types/layout'
import { EProps as EHeaderProps } from './header'
import { EProps as EFooterProps } from './footer'
import { classNames } from "../../utils";

export default class ELayout extends Component<EProps> {

    private header?: EHeaderProps;
    private footer?: EFooterProps;
    static options = {
        addGlobalClass: true
    };




    constructor(props: EProps) {
        super(props);

        /**
         * 初始定义 header 如传入 headerConfig 为字符串 则 navbar
         * @type {[type]}
         */
        this.header = (typeof props.headerConfig == 'string') ? {
            title: props.headerConfig,
            type: 'navbar'
        } : props.headerConfig;


        this.footer = props.footerConfig


    }


    static defaultProps: EProps = {
        top: 0,
        parentBgColor: 'gray',
        disable: false,
        isNoMore: false,
    }


    /**
     * 生成 背景图 style 方法
     * @type {[type]}
     */
    private createPageBackgroundImageStyle = () => {
        let customStyle = new Object()
        if (this.props.parentBgImage) {
            customStyle['backgroundImage'] = `url(${this.props.parentBgImage})`;
        }
        return customStyle;
    }


    render() {

        const createHeaderView = <EHeader>{this.props.header}</EHeader>

        const createContentView = <EContent
            className={classNames({
                [`bg-${this.props.bgColor}`]: this.props.bgColor
            })}
            style={Object.assign({}, this.props.style)}

            // 四向滑动 回调
            onTouchBottom={this.props.onTouchBottom}
            onTouchTop={this.props.onTouchTop}
            onTouchLeft={this.props.onTouchLeft}
            onTouchRight={this.props.onTouchRight}
            onScroll={this.props.onScroll}

            top={this.props.top}
            disable={this.props.disable}
            isNoMore={this.props.isNoMore}
        >
            {this.props.children}
        </EContent>

        const createFooterView = <EFooter>{this.props.footer}</EFooter>


        return (
            <View className={classNames({
                [`bg-${this.props.parentBgColor}`]: this.props.parentBgColor
            }, 'EPage', this.props.className)}
                style={Object.assign({},
                    this.createPageBackgroundImageStyle()
                )}
            >
                {createHeaderView}
                {createContentView}
                {createFooterView}
            </View >
        );
    }
}