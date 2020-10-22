import Sprite from './common/sprite';
import { SPRITE_IMG, PLAYER_HEIGHT, PLAYER_WIDTH, screenWidth, screenHeight } from './common/config';

export default class Player extends Sprite {
    dir = 'left';

    vx = 0; // 水平移动速度

    vy = 11; // 垂直移动速度

    isMovingLeft = false;

    isMovingRight = false;

    constructor() {
        super(SPRITE_IMG, {
            sx: 0,
            sy: 201,
            sw: PLAYER_WIDTH,
            sh: PLAYER_HEIGHT,
            width: 55,
            height: 40
        });
        this.x = screenWidth / 2 - this.width / 2;
        this.y = screenHeight - this.height - 30;
        return this.proxy();
    }

    proxy() {
        return new Proxy(this, {
            get(target, key, handle) {
                return Reflect.get(target, key, handle);
            },
            set(target, key, value, handle) {
                if (key === 'dir') {
                    target.setDir(value);
                }
                return Reflect.set(target, key, value, handle);
            }
        });
    }

    update() {
        if (this.vy < -7 && this.vy > -15) {
            this.dir === 'left' || this.dir === 'left_land' ? (this.dir = 'left_land') : (this.dir = 'right_land');
        } else {
            this.dir === 'left' || this.dir === 'left_land' ? (this.dir = 'left') : (this.dir = 'right');
        }
        const leftSpeed = -0.1;
        const rightSpeed = 0.1;
        const maxSpeed = 8;

        if (this.isMovingLeft) {
            if (Math.abs(this.vx + leftSpeed) < maxSpeed) {
                this.vx += leftSpeed;
            }
            this.x += this.vx;
        } else {
            if (this.vx < 0) {
                this.vx += rightSpeed;
            }
            this.x += this.vx;
        }

        if (this.isMovingRight) {
            if (Math.abs(this.vx + rightSpeed) < maxSpeed) {
                this.vx += rightSpeed;
            }
            this.x += this.vx;
        } else {
            if (this.vx > 0) {
                this.vx += leftSpeed;
            }
            this.x += this.vx;
        }

        if (this.x > screenWidth) this.x = -this.width;
        else if (this.x < -this.width) this.x = screenWidth;
    }

    setDir(dir) {
        if (dir === 'right') this.sy = 121;
        else if (dir === 'left') this.sy = 201;
        else if (dir === 'right_land') this.sy = 289;
        else if (dir === 'left_land') this.sy = 371;
    }

    jump() {
        this.vy = -8;
    }

    jumpBySpring() {
        this.vy = -16;
    }
}
