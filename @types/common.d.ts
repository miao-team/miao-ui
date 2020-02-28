import { EProps as ETitleBarProps } from './titlebar'
import { miaoType, bgColorType, bgColorMoreType, lightBgColorType } from '../miaoType'


/**
 *   common header
 */

export interface commonHeaderType extends miaoType {
    componentType?: 'titlebar' ;
    config?: ETitleBarProps;
    bgColor?: bgColorType | lightBgColorType | bgColorMoreType;
}
