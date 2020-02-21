export const SIZE = {
    xs: 'xs',
    sm: 'sm',
    md: '',
    df: 'df',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
    sl: 'sl',
    xsl: 'xsl'
};

const COLOR_LIST = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'cyan',
    'blue',
    'purple',
    'mauve',
    'pink',
    'brown',
    'grey',
    'gray',
    'black',
    'white'
];
const GRADUAL_COLOR_LIST = [
    'gradualRed',
    'gradualOrange',
    'gradualGreen',
    'gradualPurple',
    'gradualPink',
    'gradualBlue'
];

export const COLOR = {};
COLOR_LIST.reduce((pre, cur) => {
    pre[cur] = cur;
    return pre;
}, COLOR);

export const BG_COLOR_LIST = {};
COLOR_LIST.reduce((pre, cur) => {
    pre[cur] = `bg-${cur}`;
    pre[`light-${cur}`] = `bg-${cur} light`;
    return pre;
}, BG_COLOR_LIST);

GRADUAL_COLOR_LIST.reduce((pre, cur) => {
    pre[cur] = `bg-${cur.replace(/[A-Z]/g, match => '-' + match.toLowerCase())}`;
    return pre;
}, BG_COLOR_LIST);

export const TEXT_COLOR_LIST = {};
COLOR_LIST.reduce((pre, cur) => {
    pre[cur] = `text-${cur}`
    return pre;
}, TEXT_COLOR_LIST);

export const SHADOW_LIST = {
    normal: 'shadow',
    large: 'shadow-lg',
    wrap: 'shadow-wrap',
    auto: 'shadow-blur'
};

const solids = 'solids';
const solid = 'solid';
export const SOLID_LIST = {
    none: '',
    around: `${solid}`,
    top: `${solid}-top`,
    left: `${solid}-left`,
    right: `${solid}-right`,
    bottom: `${solid}-bottom`,
    'bold-around': `${solids}`,
    'bold-top': `${solids}-top`,
    'bold-left': `${solids}-left`,
    'bold-right': `${solids}-right`,
    'bold-bottom': `${solids}-bottom`
};

export const pxMap = {
    xs: 40,
    sm: 48,
    md: 56,
    lg: 64,
    xl: 72,
    xxl: 88,
    sl: 160,
    xsl: 240
}