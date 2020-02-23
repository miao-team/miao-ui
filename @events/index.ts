import { throttle } from '../../utils'
throttle({
    method: () => {
        const query = Taro.createSelectorQuery().in(this.$scope);
        query.select('.EHeader').boundingClientRect(rect => {
            if (rect) {
                Taro.eventCenter.trigger('broadcast.header.view', rect)
            }
        }).exec();
    },
    type: "headerddd"
});
