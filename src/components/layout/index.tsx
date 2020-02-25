import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import EHeader from "./header";
import EFooter from "./footer";
import EContent from "./content";
import { EProps } from '../../../@types/layout'
import { classNames, throttle } from "../../utils";


export interface EState {
    displayView?: boolean
}

export default class ELayout extends Component<EProps> {


    static options = {
        addGlobalClass: true
    };

    constructor(props: EProps) {
        super(props);

        this.state = {
            displayView: false
        }

    }


    static defaultProps: EProps = {
        top: 0,
        bgColor: 'gray',
        disable: false,
        isNoMore: false,
    }


    /**
     * 生成 背景图 style 方法
     * @type {[type]}
     */
    private createPageBackgroundImageStyle = () => {
        let customStyle = new Object()
        if (this.props.bgImage) {
            customStyle['backgroundImage'] = `url(${this.props.bgImage})`;
        }
        return customStyle;
    }



    private renderHeader = (): JSX.Element => {
        return <EHeader className={this.props.headerClassName} style={this.props.headerStyle}>{this.props.header}</EHeader>
    }

    private renderFooter = (): JSX.Element => {
        return <EFooter className={this.props.footerClassName} style={this.props.footerStyle}>{this.props.footer}</EFooter>;
    }




    componentDidMount() {
        throttle({
            method: () => this.setState({ displayView: true }),
            type: 'layoutView'
        })
    }


    render() {

        //const createHeaderView =
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
        //    const createFooterView = {  }
        return (

            this.state.displayView && <View className={classNames(
                {
                    [`bg-${this.props.bgColor}`]: this.props.bgColor
                },
                'EPage',
                this.props.className)}
                style={Object.assign({},
                    this.createPageBackgroundImageStyle()
                )}
            >
                {this.props.header && this.renderHeader()}
                {createContentView}
                {this.props.footer && this.renderFooter()}
            </View >

        );
    }
