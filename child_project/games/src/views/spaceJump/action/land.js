import Sprite from './common/sprite';
import { LAND_IMG, LAND_WIDTH, LAND_HEIGHT, screenHeight, screenWidth } from './common/config';

export default class Land extends Sprite {
    constructor() {
        super(LAND_IMG, {
            sx: 0,
            sy: 0,
            sw: LAND_WIDTH,
            sh: LAND_HEIGHT
        });
        this.y = screenHeight - this.height;
    }

    drawToCanvas(ctx) {
        if (!this.visible) return;
        const length = Math.ceil(screenWidth / this.width);
        for (let i = 0; i < length; i += 1) {
            ctx.drawImage(
                this.sprite,
                this.sx,
                this.sy,
                this.sw,
                this.sh,
                i * this.width,
                this.y,
                this.width,
                this.height
            );
        }
    }
}
