import Taro, { useEffect, useState } from "@tarojs/taro";
import { Image, Text, View } from "@tarojs/components";
import { BG_COLOR_LIST, TEXT_COLOR_VALUE, pxMap } from "../../utils/model";
import { EProps } from "../../../@types/loading";
import { classNames } from "../../utils";

import Types from './types'

export default function ELoading(props: EProps) {


    const [loadProgress, setLoadProgress] = useState(0);

    const loadProgressFn = () => {
        setLoadProgress(100);
    };

    useEffect(() => {
        if (props.show) {
            loadProgressFn();
        }
    }, []);

    useEffect(() => {
        if (props.show) loadProgressFn();
        else {
            setLoadProgress(0);
        }
    }, [props.show]);




    const bgColorClassName = () => props.bgColor ? BG_COLOR_LIST[props.bgColor] : "bg-red";

    const modalComponent = (
        <View className={classNames(
            "Eload load-modal",
            {
                [`bg-${props.bgColor}`]: props.bgColor
            }
        )}>
            {props.icon && <Types width={pxMap[props.iconSize]} height={pxMap[props.iconSize]} color={TEXT_COLOR_VALUE[props.iconColor]} kind={props.icon} />}

            <Text className={classNames(
                `text-${props.textColor ? props.textColor : "gray"}`
            )}>{props.text || '加载中...'}</Text>
        </View>
    );
    const imageComponent = (
        <View className="Eload load-image">
            <Image src={props.imgUrl || ""} mode="aspectFit" />
        </View>
    );
    const lineComponent = (
        <View
            className={classNames(
                {
                    [`bg-${props.bgColor}`]: props.bgColor,
                    [`text-${props.textColor}`]: props.textColor,
                },
                "Eload",
                props.className
            )}
        >
            <View style={{
                //width: pxMap[props.iconSize],
                height: pxMap[props.iconSize]
            }}>
                <Types width={pxMap[props.iconSize]} height={pxMap[props.iconSize]} color={TEXT_COLOR_VALUE[props.iconColor]} kind={props.icon} />
            </View>
            {props.text && <View className="label">
                <Text className={classNames(`text-${props.textSize ? props.textSize : 'gray'}`)}>
                    {props.text}
                </Text>
            </View>}
        </View>
    );
    const long = 100 - loadProgress;
    const barComponent = (
        <View
            className={classNames(
                `load-progress ${props.show ? "show" : "hide"}`,
                props.className
            )}
            style={Object.assign({ top: "0" }, props.style)}
        >
            <View
                className={`load-progress-bar ${bgColorClassName()}`}
                style={{
                    transform: `translate3d(-${long}%, 0px, 0px)`,
                    transition: "all 5s ease 0s"
                }}
            />
            <View className={`load-progress-spinner text-${props.bgColor}`} />
        </View>
    );
    const show = props.show;



    let displayView;


    switch (props.type) {
        case "bar": displayView = barComponent; break;
        case "icon": displayView = lineComponent; break;
        case "modal": displayView = modalComponent; break;
        case "image": displayView = imageComponent; break;
        default: break;
    }

    return displayView;

}

ELoading.options = {
    addGlobalClass: true,
    Version:1.0
};

ELoading.defaultProps = {
    type: "icon",
    bgColor: "gray",

    text: undefined,
    textSize: "md",
    textColor: "grey",

    icon: '',
    iconColor: "red",
    iconSize: 'xs',

    image: undefined,
    imageSize: "md",

    show: false
} as EProps;
