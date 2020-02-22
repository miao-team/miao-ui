import Taro, { Component } from "@tarojs/taro";
import { View } from '@tarojs/components';
import { EProps } from "../../@types/header"
import { EProps as ENavbarProps } from '../../@types/navbar'
import { EProps as ETabBarPrpos } from '../../@types/tabbar'
import { EProps as ETitleBarProps } from '../../@types/titlebar'

import ENavbar from '../ENavBar'
import ETitleBar from '../ETitleBar'
import ETabBar from '../ETabBar'




export default class EHeader extends Component<EProps> {


    private type?: string;
    private config?: ENavbarProps | ETabBarPrpos | ETitleBarProps;

    private rect?: object;
    static options = {
        addGlobalClass: true
    };



    constructor(props: EProps) {
        super(props);
        this.type = props.type;
        this.config = props



    }

    static defaultProps = {
        type: 'navbar',

        // shadow: true,
        // border: true,
        // title: '',
    }

    render() {

        const Views = {
            navbar: <ENavbar {...this.config} />,
            tabbar: <ETabBar  {...this.config} />,
            titlebar: <ETitleBar  {...this.config} />
        };

        return <View className="EHeader" >
            {Object.keys(this.props.children).length ?
                this.props.children :
                Views[this.type]
            }
        </View >;
    }

    componentDidMount() {
        this.countHeight();
    }

    componentDidUpdate() {
        this.countHeight();
    }


    componentWillMount() {

        if (!Object.keys(this.props.children).length) {
            Taro.eventCenter.on(`broadcast.${this.type}.view`, (rect) => {
                this.rect = rect;
            })
        }


    }

    countHeight() {


        const query = Taro.createSelectorQuery().in(this.$scope);
        query.select('.EHeader').boundingClientRect(rect => {
            if (rect) {
                Taro.eventCenter.trigger('broadcast.header.view', rect)
            } else {
                Taro.eventCenter.trigger('broadcast.header.view', this.rect)
            }
        }).exec();
    }
}
