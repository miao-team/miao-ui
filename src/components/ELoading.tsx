import { Image, Text, View } from "@tarojs/components";
import Taro, { useEffect, useState } from "@tarojs/taro";
import { BG_COLOR_LIST } from "../utils/model";
import { EProps } from "../../@types/loading";
import { classNames } from "../utils";

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

    const bgColorClassName = () =>
        props.bgColor ? BG_COLOR_LIST[props.bgColor] : "bg-red";

    const modalComponent = (
        <View className="Eload load-modal">
            <Image src={props.imgUrl || ""} mode="aspectFit" />
            <Text className="text-gray">{props.modalText}</Text>
        </View>
    );

    const imageComponent = (
        <View className="Eload load-image">
            <Image src={props.imgUrl || ""} mode="aspectFit" />
        </View>
    );

    const lineComponent = (
        <View
            className={`Eload ${
                props.loadingError ? "bg-red erro" : bgColorClassName()
                } ${props.noMore || props.loadingError ? "over" : "loading"}`}
        />
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
    return show ? (
        props.type === "bar" ? (
            barComponent
        ) : props.type === "line" ? (
            lineComponent
        ) : props.type === "modal" ? (
            modalComponent
        ) : props.type === "image" ? (
            imageComponent
        ) : (
                            barComponent
                        )
    ) : (
            <View />
        );
}

ELoading.options = {
    addGlobalClass: true
};

ELoading.defaultProps = {
    type: "bar",
    bgColor: "blue",
    modalText: "加载中...",
    loadingError: false,
    noMore: false,
    show: false
} as EProps;
