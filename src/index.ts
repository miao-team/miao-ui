import Taro from "@tarojs/taro";

export { default as MLayout } from './components/ELayout';
export { default as MNavbar } from './components/ELayout/navbar';
export { default as MPanel } from './components/EPanel';
export { default as MGrid } from './components/EGrid';
export { default as MIcon } from './components/EIcon';
export { default as MTabBar } from './components/ETabBar';
export { default as MTitleBar } from './components/ETitleBar';
export { default as MButton } from './components/EButton';
export { default as MDivider } from './components/EDivider';


//
// //
//
// export { default as EModal } from './components/EModal';
//
// export { default as EActivityIndicator } from './components/EActivityIndicator';
//
//
// export { default as ECard } from './components/ECard';
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
// //export { default as EText } from './components/EText';
// export { default as EMessage } from './components/EMessage';


export { default as Constant } from './constant'

Taro.initPxTransform({ designWidth: 750, deviceRatio: {} });
