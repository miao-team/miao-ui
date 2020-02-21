import { View, Image } from "@tarojs/components";
import Taro, { useState, useEffect } from "@tarojs/taro";
import { classNames, isNumber } from "../utils";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../utils/model";
import { EProps } from "../@types/tabbar";
import "../style/ETabBar.scss"
export default function ETabBar(props: EProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(props.active || 0);
    }, [props.active]);

    const onClick = (item: object, index: number) => {

        props.active !== false && setActiveIndex(index);
        props.onClick && props.onClick(item, index);
    };

    const colorClassName = props.bgColor
        ? BG_COLOR_LIST[props.bgColor]
        : "bg-white";
    const activeColorClassName = props.activeColor
        ? TEXT_COLOR_LIST[props.activeColor]
        : "text-blue";
    const barComponent = props.tabs.map((item, index) => (
        <View
            onClick={() => {
                onClick(item, index);
            }}
            key={"key-" + item.icon}
            className={`action ${item.action ? "add-action" : ""} ${
                (props.active !== false && activeIndex === index) ? activeColorClassName : ""
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
            className={classNames(
                [
                    "Ebar tabbar",
                    {
                        "safe-area": props.safeArea
                    },
                    colorClassName
                ],
                props.className
            )}
            style={Object.assign(
                props.fix
                    ? { position: "fixed", width: "100vw", bottom: "0", zIndex: 10 }
                    : {},
                props.style
            )}
        >
            {barComponent}
        </View>
    );
}

ETabBar.options = {
    addGlobalClass: true
};

ETabBar.defaultProps = {
    bgColor: "white",
    activeColor: "blue",
    active: 0,
    tabs: [],
    safeArea: true
} as EProps;


