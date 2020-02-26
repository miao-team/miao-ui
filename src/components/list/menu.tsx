import { Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import EIcon from "../icon";
import { TEXT_COLOR_LIST } from "../../utils/model";
import { EProps } from "../../../@types/menulist";
import { classNames } from "../../utils";
//import '../../../styles/list/menu.scss'
export default function EMenuList(props: EProps) {
    const shortLineClassName = props.shortBorder ? "sm-border" : "";
    const arrowClassName = (arrow: boolean) => (arrow ? "arrow" : "");
    const cardClassName = props.card ? "card-menu" : "";
    const list = props.list || [];

    const click = (index: number) => {
        props.onClick && props.onClick(index);
    };

    const dividerRow = <View className="divider-item"></View>

    const itemComponent = list.map((item, index) => (

        item.divider && item.divider == true ? dividerRow :

            <View
                key={item.title}
                className={`Eitem ${arrowClassName(!!item.arrow)} ${
                    item.disabled ? "disabled" : ""
                    }`}
                onClick={() => {
                    !item.disabled && click(index);
                }}
            >
                <View className="content flex align-center">
                    {item.icon && item.icon.icon ? (
                        <View className="margin-right-xs flex align-center">
                            <EIcon {...item.icon} />
                        </View>
                    ) : (
                            ""
                        )}
                    {item.image ? (
                        <Image
                            src={typeof item.image == "string" ? item.image : item.image.url}
                            className={classNames(
                                (item.image && item.image.type) ? `${item.image && item.image.type}` : '',
                                (item.image && item.image.className) && item.image.className,
                                'png margin-right-xs')}
                            mode="aspectFit"
                        />
                    ) : (
                            ""
                        )}
                    <View className={`${TEXT_COLOR_LIST[item.titleColor || "black"]} response text-${item.titleSize || 16}`}>
                        {item.title}
                        {item.subTitle && <Text onClick={() => item.subTitle.onClick && item.subTitle.onClick()} className={classNames({
                            [`text-${item.subTitle.textColor}`]: item.subTitle && item.subTitle.textColor,
                            [`text-grey`]: item.subTitle && !item.subTitle.textColor
                        }, 'pull-right')} style={Object.assign({}, { marginRight: '-15px' }, item.subTitle.style || {})}>
                            {typeof item.subTitle == "string" ? item.subTitle : item.subTitle.title}
                        </Text>}


                    </View>
                </View>
            </View>
    ));
    return (
        <View
            className={classNames(
                `Elist menu ${shortLineClassName} ${cardClassName} ${props.border ? "border" : ""}`,
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
    Version:0.6
};
