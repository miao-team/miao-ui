import { ComponentClass } from "react";

import {
    bgColorType,
    bgColorMoreType,
    lightBgColorType,
    fontSizeType,
    EType
} from "../miaoType";

export interface EProps extends EType {
    type?: "modal" | "bar" | "icon" | "image" ;
    bgColor?: bgColorType | bgColorMoreType | lightBgColorType;

    image?:string;
    imageSize?:fontSizeType;


    text?:string;
    textColor?: bgColorType;
    textSize?:fontSizeType;



    icon?:string;
    iconSize?:fontSizeType;
    iconColor?:bgColorType;



    show?: boolean;
}

export interface ELoadingProps extends EProps { }
declare const ELoading: ComponentClass<ELoadingProps>;

export default ELoading;
