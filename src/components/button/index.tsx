import { Button, Text, View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { classNames } from "../../utils";
import { IProps } from "../../../@types/button";
import { BG_COLOR_LIST, SIZE } from "../../utils/model";

import "../../../styles/button.scss"


export default class MButton extends Component<IProps>{
    static options = {
        addGlobalClass: true,
        Version: 1.0
    }

    static defaultProps: IProps = {
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
    };




    render(): JSX.Element {
        const onClick = (e: any) => {
            !this.props.disabled && this.props.onClick && this.props.onClick(e);
        };
        const onOpenSetting = (e: any) => {
            !this.props.disabled && this.props.onOpenSetting && this.props.onOpenSetting(e);
        };
        const onGetUserInfo = (e: any) => {
            !this.props.disabled && this.props.onGetUserInfo &&this.props.onGetUserInfo(e);
        };
        const onContact = (e: any) => {
            !this.props.disabled && this.props.onContact && this.props.onContact(e);
        };
        const onGetPhoneNumber = (e: any) => {
            !this.props.disabled && this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(e);
        };

        const onGetRealnameAuthInfo = (e: any) => {
            !this.props.disabled &&
                this.props.onGetRealnameAuthInfo &&
                this.props.onGetRealnameAuthInfo(e);
        };
        const onError = (e: any) => {
            !this.props.disabled && this.props.onError && this.props.onError(e);
        };

        const shapeClassName = this.props.shape || "radius";
        const sizeClassName = this.props.size || "md";
        const colorClassName = this.props.bgColor || "blue";
        const textColorClassName = this.props.color || ""
        const disabledClassName = this.props.disabled;
        const loadingClassName = this.props.loading ? "EIcon-loading iconfont-spin" : "";
        const plainClassName = this.props.plain;
        const plainSizeName = this.props.plainSize === "default" ? "line" : "lines";
        const shadowSizeName = this.props.shadow ? "shadow" : "";

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
                openType={this.props.disabled ? undefined : this.props.openType}
                onOpenSetting={onOpenSetting}
                onGetUserInfo={onGetUserInfo}
                onContact={onContact}
                onGetPhoneNumber={onGetPhoneNumber}
                onGetRealnameAuthInfo={onGetRealnameAuthInfo}
                onError={onError}
                appParameter={this.props.appParameter}
                showMessageCard={this.props.showMessageCard}
                sessionFrom={this.props.sessionFrom}
                sendMessageTitle={this.props.sendMessageTitle}
                sendMessagePath={this.props.sendMessagePath}
                sendMessageImg={this.props.sendMessageImg}
                scope={this.props.scope}
                lang={this.props.lang}
            >
                <Text className={loadingClassName} />
                <Text>{this.props.text}</Text>
                {this.props.children}
            </Button>
        );
        const longButton = (
            <View
                className={classNames("flex flex-direction", this.props.className)}
                style={Object.assign({}, this.props.style)}
            >
                {normalButton}
            </View>
        );
        return this.props.long ? (
            longButton
        ) : (
                <View
                    className={classNames(this.props.className)}
                    style={Object.assign({ display: "inline-block" }, this.props.style)}
                >
                    {normalButton}
                </View>
            );
    }
}
