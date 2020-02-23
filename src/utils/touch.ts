export default class ETouch {

    private touchStart;
    private touchEnd;
    private touchConfig;


    constructor(_touchStart, _touchEnd, touchConfig) {
        this.touchStart = _touchStart;
        this.touchEnd = _touchEnd;
        this.touchConfig = touchConfig
    }


    /**
     * 获取 y 移动距离
     * @return [description]
     */
    getTouchDeviationY = () => {
        return this.touchStart.screenY - this.touchEnd.screenY;
    }



    /**
     * 获取 x 移动距离
     * @return [description]
     */
    getTouchDeviationX = () => {
        return this.touchStart.screenX - this.touchEnd.screenX;
    }


    getTouthType = () => {
        const deviationX = this.getTouchDeviationX();
        const deviationY = this.getTouchDeviationY();

        if ((Math.abs(deviationX) >= this.touchConfig.effectiveX) && Math.abs(deviationY) < this.touchConfig.deviationX) {
            return deviationX > 0 ? 'left' : "right";
        }

        if ((Math.abs(deviationY) >= this.touchConfig.effectiveY) && Math.abs(deviationX) < this.touchConfig.deviationY) {
            return deviationY > 0 ? 'top' : "bottom";
        }

        return false;
    }

}
