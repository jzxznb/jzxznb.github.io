import Sprite from './common/sprite';
import { SPRITE_IMG, screenHeight, SPRING_HEIGHT, SPRING_WIDTH } from './common/config';

export default class Spring extends Sprite {
    constructor() {
        super(SPRITE_IMG, {
            sx: 0,
            sy: 445,
            sw: SPRING_WIDTH,
            sh: SPRING_HEIGHT,
            width: 26,
            height: 30
        });
        this.shoot = false;
        return this.proxy();
    }

    proxy() {
        const that = this;
        return new Proxy(this, {
            set(target, key, value, handle) {
                if (key === 'shoot') {
                    that.sy = 501;
                }
                return Reflect.set(target, key, value, handle);
            },
            get(target, key, handle) {
                return Reflect.get(target, key, handle);
            }
        });
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        if (this.y > screenHeight) {
            this.visible = false;
        }
    }
}
