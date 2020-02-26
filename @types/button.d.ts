import { ComponentClass } from "react";

import {
    bgColorType,
    lightBgColorType,
    bgColorMoreType,
    miaoType
} from "../miaoType";
import { CommonEventFunction } from "@tarojs/components/types/common";

export interface EProps extends miaoType {

    shape?: "round" | "radius";

    size?: "xl" | "sm" | "md" | "df" | "lg" | "xl" | "xxl" | "sl" | "xsl";


    plain?: boolean;

    plainSize?: "default" | "bold";

    shadow?: boolean;
    disabled?: boolean;
    loading?: boolean;
    long?: boolean;
    text?: string;
    openType?:
    | "contact"
    | "getUserInfo"
    | "getPhoneNumber"
    | "openSetting"
    | "feedback"
    | "getRealnameAuthInfo"
    | "launchApp"
    | "share";
    /**
     * 打开 APP 时，向 APP 传递的参数
     *
     * 生效时机：`open-type="launchApp"`
     */
    appParameter?: string;
    /**
     * 普通按钮点击事件
     * @param e any
     */
    onClick?: (e: any) => void;
    /**
     * open-type 为 getUserInfo 时触发
     * @param e any
     */
    onGetUserInfo?: CommonEventFunction<{
        /** 用户信息 */
        userInfo: {
            /** 昵称 */
            nickName: string;
            /** 头像 */
            avatarUrl: string;
            /**
             * 性别
             *
             * - `0`: 未知
             * - `1`: 男
             * - `2`: 女
             */
            gender: 0 | 1 | 2;
            /** 省份，如：`Yunnan` */
            province: string;
            /** 城市，如：`Dalian` */
            city: string;
            /** 国家，如：`China` */
            country: string;
        };
        /** 不包括敏感信息的原始数据 `JSON` 字符串，用于计算签名 */
        rawData: string;
        /** 使用 `sha1(rawData + sessionkey)` 得到字符串，用于校验用户信息 */
        signature: string;
        /** 包括敏感数据在内的完整用户信息的加密数据 */
        encryptedData: string;
        /** 加密算法的初始向量 */
        iv: string;
    }>;
    /**
     * open-type 为 contact 时触发
     * @param e any
     */
    onContact?: (event: {
        /** 小程序消息指定的路径 */
        path: string;
        /** 小程序消息指定的查询参数 */
        query: Record<string, any>;
    }) => void;
    /**
     * open-type 为 getPhoneNumber 时触发
     * @param e any
     */
    onGetPhoneNumber?: CommonEventFunction<{
        /** 包括敏感数据在内的完整用户信息的加密数据 */
        encryptedData: string;
        /** 加密算法的初始向量 */
        iv: string;
    }>;
    /**
     * 会话来源
     *
     * 生效时机：`open-type="contact"`
     */
    sessionFrom?: string;

    /**
     * 会话内消息卡片标题
     *
     * 生效时机：`open-type="contact"`
     *
     * 默认值： 当前标题
     */
    sendMessageTitle?: string;

    /**
     * 会话内消息卡片点击跳转小程序路径
     *
     * 生效时机：`open-type="contact"`
     *
     * 默认值： 当前标题
     */
    sendMessagePath?: string;

    /**
     * 会话内消息卡片图片
     *
     * 生效时机：`open-type="contact"`
     *
     * 默认值： 截图
     */
    sendMessageImg?: string;

    /**
     * 显示会话内消息卡片
     *
     * 生效时机：`open-type="contact"`
     *
     * 默认值： false
     */
    showMessageCard?: boolean;
    /**
     * open-type调用失败时触发
     * @param e any
     */
    onError?: (e: any) => void;
    /**
     * open-type 为 openSetting 时触发
     * @param e any
     */
    onOpenSetting?: (e: any) => void;
    /**
     * open-type 为 getRealnameAuthInfo 时触发
     * @param e
     */
    onGetRealnameAuthInfo?: (e: any) => void;
    /**
     * 支付宝获取会员基础信息授权回调
     *
     * 生效时机：`open-type="getAuthorize"`
     */
    onGetAuthorize?: CommonEventFunction;
    /**
     * 支付宝小程序scope
     *
     * 生效时机：`open-type="getAuthorize"`
     */
    scope?: "userInfo" | "phoneNumber";
    /**
     * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
     *
     * 生效时机: `open-type="getUserInfo"`
     */
    lang?: string;
    children?: any;
}

declare const EButton: ComponentClass<EProps>;

export default EButton;
