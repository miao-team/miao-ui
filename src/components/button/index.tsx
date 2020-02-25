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
                `${buttonClassName} ${disabledClassName ? "disabled" : ""}`
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
    addGlobalClass: true
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



// import Nerv from "nervjs";
// import Taro, { Component } from "@tarojs/taro";
// import { View } from '@tarojs/components';
// import PropTypes from 'prop-types';
// import EActivityIndicator from "./EActivityIndicator";

// import classNames from 'classnames'
// export default class EButton extends Component {

//   static options = {
//     addGlobalClass: true
//   };

//   constructor() {
//     super(...arguments);
//   }

//   onClick = e => {
//     const { onClick, disabled, loading } = this.props;
//     if (disabled || loading) {
//       return;
//     }
//     onClick && onClick(e);
//   };

//   render() {
//     const { children, disabled, loading, circle, size, inline, outline, type, className, style } = this.props;

//     return <View className={classNames({
//       'outline': outline,
//       'disabled': disabled,
//       'circle': circle,
//       [`${size}`]: size,
//       'normal': !size,
//       'inline': inline, //
//       [`bg-${type}`]: type,
//     }, 'EButton', className)} onClick={this.onClick} style={style}>
//       {loading ? <EActivityIndicator inline size={10} /> : ''}
//       {children}
//     </View>;
//   }
// }

// // size: {string} 'large'、'normal'、'small'、'mini'


// EButton.propTypes = {
//   onClick: PropTypes.func,
//   loading: PropTypes.bool,
//   disabled: PropTypes.bool
// };
