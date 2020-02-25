import { View, Image } from "@tarojs/components";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { classNames, isNumber, getClientNumberByFontSize } from "../utils";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../utils/model";
import { EProps } from "../../@types/tabbar";


export interface EState {
    activeIndex?: number | boolean;
}


export default class ETabBar extends Component<EProps, EState> {


    static options = {
        addGlobalClass: true
    };


    constructor(props: EProps) {
        super(props)

        this.state = {
            activeIndex: 0,
        }

    }

    static defaultProps: EProps = {
        bgColor: "white",
        activeColor: "blue",
        active: 0,
        tabs: [],
        safeArea: true
    }


    render() {



        const onClick = (item: object, index: number) => {

            this.props.active !== false && this.setState({ activeIndex: this.props.active });
            this.props.onClick && this.props.onClick(item, index);
        };

        const colorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : "bg-white";
        const activeColorClassName = this.props.activeColor
            ? TEXT_COLOR_LIST[this.props.activeColor]
            : "text-blue";
        const barComponent = this.props.tabs.map((item, index) => (
            <View
                onClick={() => {
                    onClick(item, index);
                }}
                id={`${index == 0 ? "" : ''}`}
                key={"key-" + item.icon}
                className={`action ${item.action ? "add-action" : ""} ${
                    (this.props.active !== false && this.state.activeIndex === index) ? activeColorClassName : ""
                    }`}


            >
                <View
                    className={classNames([
                        {
                            "EIcon-cu-image": item.img,
                            [`EIcon-${item.icon}`]: item.icon,
                            [`text-${item.iconSize}`]: item.iconSize,
                        }
                    ])}
                >
                    {item.img ? <Image mode="aspectFit" className={classNames({
                        [`img-${item.imgSize}`]: item.imgSize
                    })} src={item.img} /> : ""}
                    {item.badge && (
                        <View className="Etag badge">
                            {isNumber(item.badge) ? item.badge : ""}
                        </View>
                    )}


                </View>
                {item.title && <View className={classNames({
                    [`text-${item.titleSize}`]: item.titleSize,
                    [`text-${item.titleColor}`]: item.titleColor
                })}>{item.title}</View>}
            </View>
        ));
        return (

            <View
                id="ETabBar"
                className={classNames(
                    [
                        "Ebar tabbar",
                        {
                            "safe-area": this.props.safeArea
                        },
                        colorClassName
                    ],
                    this.props.className
                )}
                style={Object.assign(
                    this.props.fix
                        ? {
                        //    position: "fixed",
                            //width: "100vw",
                            bottom: "0",
                            zIndex: 10
                        }
                        : {},
                    this.props.style
                )}
            >
                {barComponent}
            </View>
        );
    }







}
