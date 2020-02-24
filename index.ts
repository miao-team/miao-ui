import Taro from "@tarojs/taro";

//Layout
export { default as MLayout } from './src/components/ELayout';
export { default as MHeader } from './src/components/ELayout/header';
export { default as MFooter } from './src/components/ELayout/footer';
export { default as MContent } from './src/components/ELayout/content';
export { default as MRefresh } from './src/components/ELayout/refresh';
export { default as MLoading } from './src/components/loading/index';
// Basic


export { default as MText } from './src/components/ELayout/text';
export { default as MTabBar } from './src/components/ETabBar';
export { default as MNavbar } from './src/components/ENavBar';
export { default as MPanel } from './src/components/EPanel';
export { default as MGrid } from './src/components/EGrid';
export { default as MIcon } from './src/components/EIcon';
export { default as MTitleBar } from './src/components/ETitleBar';
export { default as MButton } from './src/components/EButton';
export { default as MDivider } from './src/components/EDivider';

export { default as MCard } from './src/components/ECard';
//
// //
//
// export { default as EModal } from './components/EModal';
//
// export { default as EActivityIndicator } from './components/EActivityIndicator';
//
//
//
//
//
//
// export { default as EAvatar } from './components/EAvatar';
// export { default as EFlex } from './components/EFlex';
// export { default as ESwiper } from './components/ESwiper';
// export { default as EMenuList } from './components/EMenuList';
//
// export { default as ETag } from './components/ETag';
// export { default as ETabs } from './components/ETabs';
// export { default as ETabNav } from './components/ETabNav';
//
// export { default as EMessage } from './components/EMessage';


export { default as Constant } from './constant'

Taro.initPxTransform({ designWidth: 750, deviceRatio: {} });
