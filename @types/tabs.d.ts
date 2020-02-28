import { ComponentClass,CSSProperties } from "react";
import {
    miaoType,
    bgColorType,
    iconType,
} from "../miaoType";
export interface EProps extends miaoType {
    type?: "center" | "verb" | "default";
    activeColor?: bgColorType;
    activeClassName?: string;


    headerFixed?: boolean;
    headerStyle?:CSSProperties;
    headerClassName?: string;

    headerRenderStart?: React.ReactNode | any;
    headerRenderEnd?: React.ReactNode | any;

    active?: number;

    items: {
        id?: string;
        text: string;
        icon?: iconType;
        component?: React.ReactNode | any;
    }[];

    itemClassName?: string;

    onClick?: (index: number) => void;
    touchMove?: boolean;
    // 被选中项目 是否显示下载线
    underline?: boolean;
    children?: any;
}
declare const ETabs: ComponentClass<EProps>;
export default ETabs;
