import Sprite from './common/sprite';
import { BG_IMG, BG_HEIGHT, BG_WIDTH, screenHeight, screenWidth } from './common/config';

export default class Background extends Sprite {
    constructor() {
        super(BG_IMG, {
            sw: BG_WIDTH,
            sh: BG_HEIGHT,
            width: screenWidth,
            height: (screenWidth / BG_WIDTH) * BG_HEIGHT
        });
    }

    drawRow(ctx, dy = 0) {
        const length = Math.ceil(screenWidth / this.width);
        for (let i = 0; i < length; i += 1) {
            ctx.drawImage(this.sprite, this.sx, this.sy, this.sw, this.sh, i * this.width, dy, this.width, this.height);
        }
    }

    update() {
        const length = Math.ceil(screenHeight / this.height);
        // 让画面连续滚动
        if (this.y > screenHeight) {
            this.y -= length * this.height;
        }
    }

    render(ctx) {
        const length = Math.ceil(screenHeight / this.height);
        for (let i = -length; i < length; i += 1) {
            this.drawRow(ctx, this.y + i * this.height);
        }
    }
}
