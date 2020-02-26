import { ComponentClass } from "react";
import { miaoType } from "../miaoType";
export interface EProps extends miaoType {
    type: "card" | "screen";
    message?: string;
    show?: boolean;
    duration?: number;
    onClose?: () => void;
}
declare const EMessage: ComponentClass<EProps>;
export default EMessage;
