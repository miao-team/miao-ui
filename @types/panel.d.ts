import { ComponentClass } from "react";

import { EType, bgColorType, iconType } from "./baseType";

export interface EProps extends EType {
    title?: string
    description?: string
    rightLink?: string | {
        url?: string;
        text?: string
        className?: string;
    };
    uriText?: string
    headerClassName?: string
    bodyClassName?: string
    footerClassName?: string
    headerBorder?: string
    footerBorder?: string
    footer?: React.ReactNode | string
    clearFixTop?: boolean
    clearFixBottom?: boolean
}

export interface ETagProps extends EProps { }
declare const EPanel: ComponentClass<ETagProps>;

export default EPanel;
