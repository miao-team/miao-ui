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
    { name: 'red', value: '#e54d42' },
    { name: 'orange', value: '#f37b1d' },
    { name: 'yellow', value: '#fbbd08' },
    { name: 'olive', value: '#8dc63f' },
    { name: 'green', value: '#39b54a' },
    { name: 'cyan', value: '#1cbbb4' },
    { name: 'blue', value: '#0081ff' },
    { name: 'purple', value: '#6739b6' },
    { name: 'mauve', value: '#9c26b0' },
    { name: 'pink', value: '#e03997' },
    { name: 'brown', value: '#a5673f' },
    { name: 'grey', value: '#8799a3' },
    { name: 'gray', value: '#aaaaaa' },
    { name: 'black', value: '#333333' },
    { name: 'white', value: '#ffffff' }
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
    pre[cur.name] = cur.name;
    return pre;
}, COLOR);

export const BG_COLOR_LIST = {};
COLOR_LIST.reduce((pre, cur) => {
    pre[cur.name] = `bg-${cur.name}`;
    pre[`light-${cur.name}`] = `bg-${cur.name} light`;
    return pre;
}, BG_COLOR_LIST);

GRADUAL_COLOR_LIST.reduce((pre, cur) => {
    pre[cur] = `bg-${cur.replace(/[A-Z]/g, match => '-' + match.toLowerCase())}`;
    return pre;
}, BG_COLOR_LIST);

export const TEXT_COLOR_LIST = {};
COLOR_LIST.reduce((pre, cur) => {
    pre[cur.name] = `text-${cur.name}`
    return pre;
}, TEXT_COLOR_LIST);

export const TEXT_COLOR_VALUE = {};

COLOR_LIST.reduce((pre, cur) => {
    pre[cur.name] = cur.value
    return pre;
}, TEXT_COLOR_VALUE);



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
