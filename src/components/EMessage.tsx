import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";

import { EProps } from "../../@types/message";
import ECard from "./ECard";
import EFlex from "./EFlex";
import EText from "./ELayout/text";
import EIcon from "./EIcon";

import "../style/EMessage.scss";
import { classNames } from "../utils";

let timer;
export default function EMessage(props: EProps) {
  let tempHeight = 500;
  const { bgColor, type, onClose, message, show, duration } = props;
  const [showMessage, setShowMessage] = useState(show);
  const [contentHeight, setContentHeight] = useState(tempHeight);
  const [tempMessage, setTempMessage] = useState("");
  const [tempType, setTempType] = useState();
  const durationTime = duration || 3;
  const mapColor = {
    success: "light-green",
    error: "light-red",
    warn: "light-yellow",
    info: "light-grey",
    custom: bgColor
  };
  const calculateHeight = () => {
    const view = Taro.createSelectorQuery().in(this.$scope);
    const query = view.select("#content");
    return new Promise(resolve => {
      query.boundingClientRect().exec(res => {
        const data = res[0];
        resolve(data.height);
      });
    });
  };
  const clickClose = () => {
    new Promise(resolve => {
      resolve(calculateHeight());
    }).then((res: number) => {
      const height = res;
      clearTimeout(timer);
      timer = null;
      setContentHeight(height);
      setShowMessage(false);
      onClose && onClose();
    });
  };
  useEffect(() => {
    (function () {
      if (!showMessage) {
        new Promise(resolve => {
          resolve(calculateHeight());
        }).then((res: number) => {
          const height = res;
          tempHeight = height;
          setContentHeight(tempHeight);
          setShowMessage(false);
        });
      } else {
        tempHeight = 0;
        setTempType(type);
        setTempMessage(message || "");
        if (duration !== 0) {
          if (timer) {
            clickClose();
            clearTimeout(timer);
            timer = null;
            return;
          }
          timer = setTimeout(() => {
            clickClose();
            clearTimeout(timer);
            timer = null;
            props.message = "";
          }, durationTime * 1000);
        }
        setContentHeight(tempHeight);
        setShowMessage(true);
      }
    })();
  }, [showMessage]);

  useEffect(() => {
    show && setShowMessage(!!show);
    props.show = false;
  }, [show]);

  useEffect(() => {
    if (show) {
      clearTimeout(timer);
      timer = null;
      clickClose();
      setTimeout(() => {
        setShowMessage(true);
        setTempMessage(message || "");
        setTempType(type);
      }, 300);
    }
  }, [message, show]);
  return (
    <View
      className={classNames("EMessage", props.className)}
      style={Object.assign(
        {
          transition: `all 0.2s linear`,
          top: `${showMessage ? "0" : "-" + contentHeight + "px"}`
        },
        props.style
      )}
    >
      <View className="EMessage__content" id="content">
        <ECard bgColor={mapColor[tempType] || "light-grey"} shadow={false}>
          <EFlex justify="between" align="center">
            <EText text={tempMessage} />
            <View
              onClick={() => {
                clickClose();
              }}
            >
              <EIcon icon="close" size="xsmall" />
            </View>
          </EFlex>
        </ECard>
      </View>
    </View>
  );
}

EMessage.options = {
  addGlobalClass: true
};

EMessage.defaultProps = {
  bgColor: "light-grey",
  type: "info",
  onClose: () => { },
  message: "",
  show: false,
  duration: 3
} as EProps;
