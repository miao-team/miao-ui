import { Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import EIcon from "../icon";
import { TEXT_COLOR_LIST } from "../../utils/model";
import { EProps } from "../../../@types/menulist";
import { classNames } from "../../utils";
//import '../../../styles/list/menu.scss'
export default function EMenuList(props: EProps) {

    const list = props.list || [];

    const click = (index: number) => {
        props.onClick && props.onClick(index);
    };


    const itemComponent = list.map((item, index) => (
        <View
            key={item.title}
            className={`EItem`}
        >
            adf
            </View >
    ));
    return (
        <View
            className={classNames(
                //grid
                `EList`,
                props.className
            )}
            style={Object.assign({}, props.style)}
        >
            {itemComponent}
        </View>
    );
}

EMenuList.defaultProps = {
    shortBorder: false,
    card: false,
    border: false,
    list: []
} as EProps;

EMenuList.options = {
    addGlobalClass: true,
    Version: 0.6
};
