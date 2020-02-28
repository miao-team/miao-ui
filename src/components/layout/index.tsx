import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import EHeader from "./header";
import EFooter from "./footer";
import EContent from "./content";
import { EProps } from '../../../@types/layout'
import { classNames, throttle } from "../../utils";
/**
 *   state
 *   @type {Object}
 */

export interface EState {
    displayView?: boolean
}

export default class MLayout extends Component<EProps, EState> {


    static options = {
        addGlobalClass: true,
        Version: 1.0
    };

    constructor(props: EProps) {
        super(props);
        this.state = { displayView: false }
    }


    static defaultProps: EProps = {
        topPosition: 0,
        bgColor: 'gray',
        disable: false,
        isNoMore: false,
    }





    /**
     *   page header
     *   @type {[type]}
     */

    private createHeaderViewComponent = (): JSX.Element => {
        return <EHeader>
            {this.props.header}
        </EHeader>
    }

    /**
     *   page footer
     *   @type {[type]}
     */

    private createFooterViewComponent = (): JSX.Element => {
        return <EFooter>
            {this.props.footer}
        </EFooter>;
    }




    componentDidMount() {
        throttle({
            method: () => this.setState({ displayView: true }),
            type: 'layoutView'
        })
    }


    render(): JSX.Element {


        const createContentView = <EContent
            className={classNames({
                [`bg-${this.props.contentBgColor}`]: this.props.contentBgColor
            }, this.props.contentClassName)}
            style={Object.assign({},
                this.props.contentBgImage ? {
                    backgroundImage: `url(${this.props.contentBgImage})`
                } : {}
                ,
                this.props.contentStyle)}
            onTouchBottom={this.props.onTouchBottom}
            onTouchTop={this.props.onTouchTop}
            onTouchLeft={this.props.onTouchLeft}
            onTouchRight={this.props.onTouchRight}
            onScroll={this.props.onScroll}

            topPosition={this.props.topPosition}
            disable={this.props.disable}
            isNoMore={this.props.isNoMore}
        >
            {this.props.children}
        </EContent>
        //    const createFooterView = {  }
        return (

            this.state.displayView && <View className={
                classNames(
                    'EPage',
                    {
                        [`bg-${this.props.bgColor}`]: this.props.bgColor
                    },
                    this.props.className
                )}
                style={Object.assign(
                    this.props.bgImage ? {
                        backgroundImage: `url(${this.props.bgImage})`
                    } : {}
                )}
            >
                {this.props.header && this.createHeaderViewComponent()}
                {createContentView}
                {this.props.footer && this.createFooterViewComponent()}
            </View >

        );
    }

}
