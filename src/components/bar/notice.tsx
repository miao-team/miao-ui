import Taro, { pxTransform, useEffect, useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { EProps } from "../../../@types/noticebar";
import EText from "../text";
import EIcon from "../icon";
import EFlex from "../layout/flex";
import { BG_COLOR_LIST } from "../../utils/model";
import { generateId, isH5, classNames, screenPercent } from "../../utils";//isH5, screenPercent
// import classnames from "classnames";
// import ClLayout from "../layout";
import "../../../styles/notice-bar.scss";

// import "./index.scss";

export default function ENoticeBar(props: EProps) {
    const {
        text,
        bgColor,
        single,
        marquee,
        speed,
        showMore,
        moreText,
        icon,
        close,
        onClose,
        onMore
    } = props;
    const [singleContentWidth, setSingleContentWidth] = useState("100%");
    const [contentWidth, setContentWidth] = useState(0);
    const [marqueeSpeed, setMarqueeSpeed] = useState(speed);
    const [textId] = useState(generateId());
    const [contentId] = useState(generateId());
    const [marqueeClass, setMarqueeClass] = useState(single && marquee);
    const [show, setShow] = useState(true);
    const cut = single && !marquee;

    useEffect(() => {
        setMarqueeClass(single && marquee);
        if (single) {
            let width = 180;
            if (!showMore) width = 50;
            if (close) width += 50;
            setSingleContentWidth(`calc(100vw - ${pxTransform(width)})`);
        }
        const query = Taro.createSelectorQuery().in(this.$scope);

        //log(query)

        const promise = new Promise(resolve => {
            query
                .select(isH5 ? contentId : "#contentId")
                .boundingClientRect(content => {
                    console.log(content)
                    resolve(content);
                })
                .exec();
        });
        promise.then((content: any) => {
            query
                .select(isH5 ? textId : "#textId")
                .boundingClientRect((res: any) => {
                    console.log(res, 11111)
                    if (res.width < content.width) {
                        setMarqueeClass(false);
                        setMarqueeSpeed(0);
                        return;
                    }
                    setContentWidth(-res.width);
                    function beginInterval(time) {
                        let timer;
                        timer = setInterval(() => {
                            setContentWidth(res.width);
                            setMarqueeSpeed(0);
                            clearInterval(timer);
                            let timeout;
                            timeout = setTimeout(() => {
                                setContentWidth(-res.width);
                                const percentSpeed = res.width / (speed as number);
                                const speedNow =
                                    (speed as number) + content.width / percentSpeed;
                                setMarqueeSpeed(speedNow);
                                beginInterval(speedNow);
                                clearTimeout(timeout);
                            }, 50);
                        }, (time as number) * 1000);
                    }
                    beginInterval(marqueeSpeed);
                })
                .exec();
        });
    }, [props.showMore, props.single, props.speed]);

    const showMoreComponent = showMore ? (
        <View
            style={{
                flex: "0 0 auto",
                zIndex: 1,
                paddingRight: pxTransform(10),
                paddingLeft: pxTransform(10)
            }}
            onClick={() => {
                onMore && onMore();
            }}
        >
            <EFlex align={"center"}>
                <EText text={moreText} color={"gray"} size={"sm"} />
                <EIcon icon={"right"} color={"gray"} size={24} />
            </EFlex>
        </View>
    ) : (
            ""
        );
    const showCloseComponent = close ? (
        <View
            onClick={() => {
                setShow(false);
                onClose && onClose();
            }}
        >
            <EIcon icon={"close"} size={24} color={"gray"} />
        </View>
    ) : (
            ""
        );
    return (
        <View
            className={classNames(
                "Enotice light bg-yellow",
                {
                    [`bg-${bgColor}`]: bgColor,
                },
                //`${BG_COLOR_LIST[bgColor || "yellow"]}`
            )}
        >
            {show ? (
                <EFlex
                    align={"center"}
                    justify={"between"}
                    style={{ minHeight: pxTransform(40) }}
                >
                 {showCloseComponent}
                  <EIcon icon={icon || "notificationfill"} size={30} />
                    <View
                        id={isH5 ? contentId : "contentId"}
                        style={{
                            flex: "1 1 auto",
                            overflow: "hidden",
                            minHeight: pxTransform(40)
                        }}
                    >
                        <View
                            className={classNames([
                                "text-sm",
                                {
                                    "text-cut": cut
                                }
                            ])}
                            style={{
                                lineHeight: pxTransform(42),
                                transition: `all ${marqueeClass ? marqueeSpeed : 0}s linear`,
                                transform: `translateX(${
                                    marqueeClass ? pxTransform(contentWidth / screenPercent) : 0
                                    })`,
                                whiteSpace: "nowrap",
                                width: singleContentWidth
                            }}
                        >
                            <Text
                                id={isH5 ? textId : "textId"}
                                className={classNames([
                                    {
                                        "Etext__nowrap": single,
                                        "Etext__wrap": !single
                                    }
                                ])}
                            >
                                {text}
                            </Text>
                        </View>
                    </View>
                    {showMoreComponent}
                </EFlex>
            ) : (
                    ""
                )}
        </View>
    );
}

ENoticeBar.options = {
    addGlobalClass: true
};

ENoticeBar.defaultProps = {
    text: "",
    bgColor: "light-yellow",
    single: false,
    marquee: false,
    speed: 5,
    showMore: false,
    moreText: "查看详情",
    icon: "notificationfill",
    close: false,
    onClose: () => { },
    onMore: () => { }
} as EProps;
// <ClLayout
//     margin="xsmall"
//     marginDirection="right"
//     style={{ zIndex: 10, flex: "0 0 auto" }}
// >
//
// </ClLayout>

// <View>
//     <ClLayout padding="xsmall" paddingDirection="horizontal">
//         <ClFlex>
//             {showCloseComponent}
//             <ClIcon iconName={icon || "notificationfill"} size={24} />
//         </ClFlex>
//     </ClLayout>
// </View>
