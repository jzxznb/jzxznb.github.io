import Sprite from './common/sprite';
import { SPRITE_IMG, BROKENPLATFORM_WIDTH, BROKENPLATFORM_HEIGHT, screenHeight } from './common/config';

export default class BrokenPlatform extends Sprite {
    static vy = 8;

    constructor({ x = 0, y = 0 }) {
        super(SPRITE_IMG, {
            sx: 0,
            sy: 554,
            sw: BROKENPLATFORM_WIDTH,
            sh: BROKENPLATFORM_HEIGHT,
            x,
            y,
            width: 70,
            height: 30
        });
    }

    update() {
        if (this.y <= screenHeight) {
            this.y += BrokenPlatform.vy;
        } else {
            this.visible = false;
        }
    }
}
