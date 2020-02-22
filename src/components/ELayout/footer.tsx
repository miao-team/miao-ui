import Nerv from "nervjs";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { View } from '@tarojs/components';
import { EProps } from '../../@types/footer'
import { EProps as ETabBarPrpos } from "../../@types/tabbar"
import { classNames } from '../../utils'
import ETabBar from '../ETabBar'
import "../../style/EFooter.scss";
export default class EFooter extends Component<EProps> {


    private type?: string;
    private config?: ETabBarPrpos;


    private rect?: object;

    static options = {
        addGlobalClass: true
    };

    static defaultProps = {
        type: 'tabbar',
    }

    constructor(props: EProps) {
        super(props)
        this.type = props.type;
        this.config = props
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
    render() {
        const Views = {
            tabbar: Object.keys(this.config).length > 2 ? <ETabBar  {...this.config} /> : '',
        };

        return (Object.keys(this.config).length > 2 || Object.keys(this.props.children).length > 0) &&
        <View className="EFooter" id="EFooter">
            {Object.keys(this.props.children).length ?
                this.props.children :
                Views[this.type]
            }
        </View>;
    }
    countHeight() {
        const query = Taro.createSelectorQuery().in(this.$scope);
        query.select('#EFooter').boundingClientRect(rect => {

            console.log("---",this.rect.height,rect.height)
            Taro.eventCenter.trigger('broadcast.footer.view', this.rect)
            if (rect) {
                Taro.eventCenter.trigger('EventSetFooterStyle', rect);
            } else {

            }
        }).exec();
    }

}
