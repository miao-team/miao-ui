import Taro from "@tarojs/taro";
export { default as classNames } from 'classnames'
let throttleTimer = {};
// TODO 多处地方同时调用throttle时，如果第一个传的是ahead = true，另外一个传的是ahead = false, 有可能造成两个的method方法都不会被调用
export const throttle = ({ method, delay = 300, ahead = false, type = 'common' }) => {
  // console.log('已阻止频繁触发..........', ahead)
  if (ahead && !throttleTimer[type]) {
    method();
  }
  clearTimeout(throttleTimer[type]);
  throttleTimer[type] = setTimeout(() => {
    if (!ahead) {
      method();
    }
    clearTimeout(throttleTimer[type]);
    throttleTimer[type] = undefined;
  }, delay);
};

export const vibrateShort = () => { };

export const routerGoBack = () => {
  {
    if (JSON.parse(localStorage.getItem('taroRouterStore')).key == 0) {
      const version = Taro.getStorageSync('version');
      if (version == '3') {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.inappbrowserClose) {
          window.webkit.messageHandlers.inappbrowserClose.postMessage('');
        }
      } else {
        if (window.inappbrowser && window.inappbrowser.close) {
          window.inappbrowser.close();
        }
      }
    }
    document.querySelector('.taro_page:last-child').classList.add("remove");
    const last2 = document.querySelector('.taro_page:nth-last-child(2)');
    if (last2) {
      last2.classList.add('show');
    }
    setTimeout(() => {
      if (last2) {
        last2.classList.remove('show');
      }
      Taro.navigateBack();
    }, 400);
  }
};

export const routerGoIn = url => {
  {
    const last = document.querySelector('.taro_page:last-child');
    last.classList.add("in");
    setTimeout(() => {
      Taro.navigateTo({
        url
      });
      last.classList.remove("in");
    }, 400);
  }
};


/**
 * 判断是否为 number
 * @param obj  参数值
 */
export const isNumber = (obj: any) => {
  return typeof obj === "number" && !isNaN(obj);
};

/**
 * 随机生成 id
 * @param hashLength number 长度
 * @returns {string} id
 */
export const generateId = (hashLength: number = 24): string => {
  if (!hashLength || typeof Number(hashLength) != "number") {
    return "";
  }
  const ar: any[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const hs: any[] = [];
  const hl = Number(hashLength);
  const al = ar.length;
  for (let i = 0; i < hl; i++) {
    const radom = Math.random() * al;
    const index = Math.floor(radom);
    const code = ar[index];
    hs.push(code);
  }

  return `id-${hs.join("")}`;
};



/**
 * 是否是 H5 环境
 * @type {boolean}
 */
export const isH5 = Taro.ENV_TYPE.WEB === Taro.getEnv();

/**
 * 是否是 支付宝 环境
 * @type {boolean}
 */
export const isAliPay = Taro.ENV_TYPE.ALIPAY === Taro.getEnv();

/**
 * 是否是 微信 环境
 * @type {boolean}
 */
export const isWeApp = Taro.ENV_TYPE.WEAPP === Taro.getEnv();
/**
 * 获取 Rect
 * @returns {number}
 */
export const getRectNumber = () => {
  if (isAliPay) return 0;
  return 1;
};



/**
 * 按照 750 作为设计时的百分比
 */
export const screenPercent = Taro.getSystemInfoSync().screenWidth / 750;
export {default as TouchEvent} from './touch';
