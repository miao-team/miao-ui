import { Button, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { classNames } from "../../utils";
import { EProps } from "../../../@types/button";
import { BG_COLOR_LIST, SIZE } from "../../utils/model";

import "../../../styles/button.scss"

export default function EButton(props: EProps) {
    const onClick = (e: any) => {
        !props.disabled && props.onClick && props.onClick(e);
    };
    const onOpenSetting = (e: any) => {
        !props.disabled && props.onOpenSetting && props.onOpenSetting(e);
    };
    const onGetUserInfo = (e: any) => {
        !props.disabled && props.onGetUserInfo && props.onGetUserInfo(e);
    };
    const onContact = (e: any) => {
        !props.disabled && props.onContact && props.onContact(e);
    };
    const onGetPhoneNumber = (e: any) => {
        !props.disabled && props.onGetPhoneNumber && props.onGetPhoneNumber(e);
    };

    const onGetRealnameAuthInfo = (e: any) => {
        !props.disabled &&
            props.onGetRealnameAuthInfo &&
            props.onGetRealnameAuthInfo(e);
    };
    const onError = (e: any) => {
        !props.disabled && props.onError && props.onError(e);
    };

    const shapeClassName = props.shape || "radius";
    const sizeClassName = props.size || "md";
    const colorClassName = props.bgColor || "blue";
    const textColorClassName = props.color || ""
    const disabledClassName = props.disabled;
    const loadingClassName = props.loading ? "EIcon-loading iconfont-spin" : "";
    const plainClassName = props.plain;
    const plainSizeName = props.plainSize === "default" ? "line" : "lines";
    const shadowSizeName = props.shadow ? "shadow" : "";

    const buttonClassName = `Ebtn ${shapeClassName} ${SIZE[sizeClassName]} ${
        plainClassName ? "" : BG_COLOR_LIST[colorClassName]
        } ${
        plainClassName ? plainSizeName + "-" + colorClassName : ""
        } ${shadowSizeName}`;
    const normalButton = (
        <Button
            className={classNames(
                `${buttonClassName} ${disabledClassName ? "disabled" : ""}`,
                [`text-${textColorClassName}`]: textColorClassName,
            )}
            // disabled={disabledClassName}
            onClick={onClick.bind(this)}
            openType={props.disabled ? undefined : props.openType}
            onOpenSetting={onOpenSetting}
            onGetUserInfo={onGetUserInfo}
            onContact={onContact}
            onGetPhoneNumber={onGetPhoneNumber}
            onGetRealnameAuthInfo={onGetRealnameAuthInfo}
            onError={onError}
            appParameter={props.appParameter}
            showMessageCard={props.showMessageCard}
            sessionFrom={props.sessionFrom}
            sendMessageTitle={props.sendMessageTitle}
            sendMessagePath={props.sendMessagePath}
            sendMessageImg={props.sendMessageImg}
            scope={props.scope}
            lang={props.lang}
        >
            <Text className={loadingClassName} />
            <Text>{props.text}</Text>
            {this.props.children}
        </Button>
    );
    const longButton = (
        <View
            className={classNames("flex flex-direction", props.className)}
            style={Object.assign({}, props.style)}
        >
            {normalButton}
        </View>
    );
    return props.long ? (
        longButton
    ) : (
            <View
                className={classNames(props.className)}
                style={Object.assign({ display: "inline-block" }, props.style)}
            >
                {normalButton}
            </View>
        );
}

EButton.options = {
    addGlobalClass: true,
    Version:1.0
};

EButton.defaultProps = {
    shape: "radius",
    size: "md",
    bgColor: "blue",
    disabled: false,
    icon: undefined,
    loading: false,
    long: false,
    plain: false,
    plainSize: "default",
    shadow: true,
    openType: undefined
} as EProps;
