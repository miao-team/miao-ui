import Taro, { Component, pxTransform, useEffect, useState } from "@tarojs/taro";
import { Text, View, Image } from "@tarojs/components";
import { EProps, EHeaderArray } from '../@types/avatar'
import { isNumber, generateId } from '../utils'
import classNames from 'classnames'

function EAvatar(props: EProps) {
    const [headList, setHeadList] = useState(props.headerArray);
    useEffect(() => {
        const list = props.headerArray || [];
        setHeadList(
            list.map((item: any) => {
                item.cu_avatar_id = generateId();
                return item;
            })
        );
    }, [props.headerArray]);

    const onClick = () => {
        props.onClick && props.onClick();
    };
    const customSize = {
        xs: 24,
        sm: 32,
        md: 48,
        lg: 64,
        xl: 96,
        xxl: 128
    };
    const width = isNumber(props.size)
        ? pxTransform(props.size as number)
        : pxTransform(customSize[props.size || "md"]);
    const height = isNumber(props.size)
        ? pxTransform(props.size as number)
        : pxTransform(customSize[props.size || "md"]);
    const em = isNumber(props.size)
        ? (props.size as number) / 48
        : customSize[props.size || "md"] / 48;

    const BG_COLOR_LIST = {}
    const avatarArray = (headList as EHeaderArray[]).map(
        (item: any, index: number) => (
            <View
                key={item.cu_avatar_id || index}
                className={classNames({
                    [`${props.shape}`]: props.shape,
                    "shadow": props.shadow
                }, 'EAvatar', BG_COLOR_LIST[item.bgColor || "black"])}
                style={{
                    width,
                    height,
                    fontSize: `${em}em`
                }}
            >
                <Image
                    className={`${props.shape}`}
                    src={item.url}
                    style={{
                        width,
                        height,
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }}
                    mode="aspectFill"
                />
                <Text className={`EIcon-${item.icon}`}>
                    {item.text ? item.text.slice(0, 1) : ""}
                </Text>
                {item.tag ? (
                    <View
                        className={`cu-tag badge EIcon-${item.tag} ${
                            item.tagColor ? BG_COLOR_LIST[item.tagColor] : ""
                            }`}
                    />
                ) : (
                        ""
                    )}
            </View>
        )
    );
    const avatarArrayComponent = (
        <View
            className={classNames("EAvatar-group", props.className)}
            style={Object.assign({}, props.style)}
            onClick={() => {
                onClick();
            }}
        >
            {avatarArray}
        </View>
    );
    return props.headerArray && props.headerArray.length > 1 ? (
        avatarArrayComponent
    ) : (
            <View
                className={classNames(props.className)}
                style={Object.assign({}, props.style)}
                onClick={() => {
                    onClick();
                }}
            >
                {avatarArray}
            </View>
        );


}
EAvatar.options = {
    addGlobalClass: true
};

EAvatar.defaultProps = {
    size: "md",
    shape: "radius",
    type: "md",
    headerArray: [],
    shadow: true
} as EProps;

export default EAvatar;
