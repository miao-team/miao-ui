import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import EHeader from "./header";
import EFooter from "./footer";
import EContent from "./content";
import ETabBar from '../ETabBar'
import { EProps } from '../../@types/layout'
import { classNames } from "../../utils";

export default class ELayout extends Component<EProps> {
    static options = {
        addGlobalClass: true
    };

    constructor(props: EProps) {
        super(props);
    }


    /**
     * 默认参数
     * 此为 个人意见 用户可适当做出修改
     */


    static defaultProps: EProps = {
        bottom: 100,
        top: 0,
        renderHeader: false,
        parentBgColor: 'gray',
        disable: false,
        disableTop: false,
        disableBottom: false,
        isOvering: false,
    }


    /**
     * 生成 背景图 style 方法
     */
    private createPageBackgroundImageStyle = () => {
        let customStyle = new Object()
        if (this.props.bgImage) {
            customStyle['backgroundImage'] = `url(${this.props.bgImage})`;
        }
        return customStyle;
    }




    render() {


        return (
            <View className={classNames({
                [`bg-${this.props.parentBgColor}`]: this.props.parentBgColor
            }, 'EPage', this.props.className)}
                style={Object.assign(
                    this.createPageBackgroundImageStyle()
                )}
            >
                <EHeader {...this.props.headerConfig}>{this.props.renderHeader}</EHeader>
                <EContent
                    className={classNames({
                        [`bg-${this.props.bgColor}`]: this.props.bgColor
                    })}

                    onScroll={this.props.onScroll}
                    onScrollEnd={this.props.onScrollEnd}
                    top={this.props.top}
                    bottom={this.props.bottom}
                    onInitialize={this.props.onInitialize}
                    onLoadmore={this.props.onLoadmore}
                    isLoading={this.props.isLoading}
                    disable={this.props.disable}
                    disableTop={this.props.disableTop}
                    disableBottom={this.props.disableBottom}
                    isOvering={this.props.isOvering}

                //onScrollStart={this.props.onScrollStart}
                // removeHeight={this.props.removeHeight}
                // topStart={this.props.topStart}
                // onRefresh={this.props.onRefresh}
                // onScrollToLower={this.props.onLoadMore}
                //
                //
                // hasMore={this.props.hasMore}
                // noMore={this.props.noMore}
                // loadMoreThreshold={this.props.loadMoreThreshold}
                // noMoreText={this.props.noMoreText}
                // hasMoreText={this.props.hasMoreText}
                // refreshStatus={this.props.refreshStatus || 2}
                // refresherConfig={this.props.refresherConfig || {}}
                //
                >
                    {this.props.children}
                </EContent>

                <EFooter
                    style={Object.assign(
                        {},
                        this.props.footerConfig ? { height: '55px' } : {},
                    )}
                >{this.props.renderFooter ? this.props.renderFooter :
                    this.props.footerConfig && <ETabBar {...this.props.footerConfig} />}</EFooter>




            </View >
        );
    }
}

//687.438px
//632.438px
