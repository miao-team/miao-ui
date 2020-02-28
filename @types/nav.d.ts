import { ComponentClass, CSSProperties } from "react";
import { miaoType, bgColorType, bgColorMoreType, lightBgColorType, iconType } from "../miaoType";
export interface EProps extends miaoType {
    type?: "center" | "full" | "default";

    headerClassName?: string;

    title?: string;
    titleClassName?: string;
    titleStyle?: CSSProperties;

    active?: number;
    activeColor?: bgColorType;
    activeClassName?: string;




    items: {
        text: string;
        icon?: iconType;
        id?: string;
    }[];
    itemClassName?: string;

    // 被选中项目 是否显示下载线
    underline?: boolean;

    onClick?: (item: object, index: number) => void;
}
declare const ENav: ComponentClass<EProps>;
export default ENav;
