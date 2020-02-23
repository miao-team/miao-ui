import Taro, { Component ,Events} from "@tarojs/taro";
import { View } from '@tarojs/components';
import EIcon from './EIcon'
import { EProps } from '../../@types/navbar'
import { classNames, getClientNumberByFontSize } from '../utils'

const Event = new Events()
export default class ENavBar extends Component<EProps> {

    static options = {
        addGlobalClass: true
    };


    constructor(props: EProps) {
        super(props)
    }

    static defaultProps = {
        shadow: true,
        textSize: 'xl',
        bgColor: 'white',
        textColor: 'black',
        backIcon: 'back',
        backIconSize: 'xs',
        backIconColor: 'black'
    }



    handleClickRightText = e => {
        const { onClickRight } = this.props;
        onClickRight && onClickRight(e);
    };

    goBack = () => {
        const { onClickLeft } = this.props;
        if (onClickLeft && onClickLeft() || !onClickLeft) {
            Taro.navigateBack();
        }
    };


    componentDidMount() {
        this.broadcastViewHeight();
    }

    componentDidUpdate() {
        this.broadcastViewHeight();
    }

    broadcastViewHeight() {
        Taro.eventCenter.trigger('broadcast.navbar.view.height', getClientNumberByFontSize(88))
    }

    render() {
        return <View
            className={classNames(
                {
                    'shadow': this.props.shadow,
                    [`bg-${this.props.bgColor}`]: this.props.bgColor,
                },
                'ENavbar',
                this.props.className
            )}
            style={Object.assign({}, this.props.style)}
        >
            {this.props.hiddenLeft !== true && <View className="navbar-left" onClick={this.goBack}>
                {this.props.left ? this.props.left :
                    <View className="text-md text-grey">
                        <EIcon
                            icon={this.props.backIcon || 'back'}
                            size={this.props.backIconSize || 'xs'}
                            color={this.props.backIconColor || 'blacks'}
                        />
                        {this.props.backText && <View className="exe"> {this.props.backText}</View>}
                    </View>
                }
            </View>}

            <View className={classNames(
                "navbar-title",
                this.props.textColor ? `text-${this.props.textColor}` : `text-black`,
                this.props.textSize ? `text-${this.props.textSize}` : `text-xl`,
            )}>
                {this.props.title || this.props.children}
            </View>
            {this.props.hiddenRight !== true && <View className="navbar-right" onClick={this.handleClickRightText}>
                {this.props.right}
            </View>}

        </View>;
    }


}
