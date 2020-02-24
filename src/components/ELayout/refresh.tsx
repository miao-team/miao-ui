import { View, Text, Image } from "@tarojs/components";
import Taro, { pxTransform } from "@tarojs/taro";
import { BG_COLOR_LIST, pxMap, SIZE, TEXT_COLOR_LIST } from "../../utils/model";
import { EProps } from "../../../@types/text";
import EIcon from '../EIcon'
import "../../style/ERefresh.scss";
import { classNames, isNumber, screenPercent } from "../../utils";
export default function ERefresh(props: EProps) {





    return (



        <View className="ERefresh animation">



            <View className={classNames({

            }, this.props.className, "animation")}>
            </View>
            <View className="down-text">
                加载中...
             </View>

        </View>
    );
}


ERefresh.options = {
    addGlobalClass: true
};

ERefresh.defaultProps = {
    size: "normal",

} as EProps;
