import Taro from "@tarojs/taro";

//Layout


export { default as MLayout } from './src/components/layout';
export { default as MHeader } from './src/components/layout/header';
export { default as MFooter } from './src/components/layout/footer';
export { default as MContent } from './src/components/layout/content';
export { default as MGrid } from './src/components/layout/grid';
export { default as MFlex } from './src/components/layout/flex';
export { default as MSkeleton } from './src/components/layout/skeleton';

//actions
export { default as MLoading } from './src/components/loading/index';
export { default as MMessage } from './src/components/message';

// basics
export { default as MTabs } from './src/components/tabs/index';

//views
export { default as MCard } from './src/components/card';
export { default as MNav } from './src/components/tabs/nav';
export { default as MButton } from './src/components/button';
export { default as MTabBar } from './src/components/tab-bar';
export { default as MTitleBar } from './src/components/bar/title';
export { default as MAvatar } from './src/components/image/avatar';
export { default as MDivider } from './src/components/divider';
export { default as MIcon } from './src/components/icon';

export { default as MSwiper } from './src/components/swiper';

export { default as MItem } from './src/components/item';
export { default as MList } from './src/components/list';
export { default as MMenuList } from './src/components/list/menu';

///

export { default as MText } from './src/components/text';
export { default as MNavbar } from './src/components/nav-bar';
export { default as MPanel } from './src/components/panel';
export { default as MDrawer } from './src/components/modal/drawer';
export { default as MTag } from './src/components/text/tag';

//
export { default as Constant } from './constant'
// import  {default as Tools}  from './src/utils'
//

Taro.initPxTransform({ designWidth: 750, deviceRatio: {} });
