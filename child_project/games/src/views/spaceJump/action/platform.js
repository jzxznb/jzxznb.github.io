import Sprite from './common/sprite';
import BrokenPlatform from './broken-platform';
import Spring from './spring';
import { screenWidth, PLATFORM_HEIGHT, PLATFORM_WIDTH, SPRITE_IMG, PLATFORM_VALUE } from './common/config';

export default class Platform extends Sprite {
    static broken = 0;

    static spring = 0;

    constructor({ score, y }) {
        super(SPRITE_IMG, {
            sx: 0,
            sy: 0,
            sw: PLATFORM_WIDTH,
            sh: PLATFORM_HEIGHT,
            width: 70,
            height: 17
        });

        this.x = Math.random() * (screenWidth - this.width);
        this.y = y;
        const { types } = [
            { score: 5000, types: [2, 3, 3, 3, 4, 4, 4] },
            { score: 2000, types: [2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4] },
            { score: 1000, types: [2, 2, 2, 3, 3, 3, 3, 3] },
            { score: 500, types: [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3] },
            { score: 100, types: [1, 1, 1, 1, 2, 2] },
            { score: -1, types: [1] }
        ].find(item => item.score <= (score || 0));
        this.type = types[Math.floor(Math.random() * types.length)];
        this.init();
    }

    init() {
        if (this.type === PLATFORM_VALUE.BROKEN && Platform.broken < 1) {
            Platform.broken += 1;
        } else if (this.type === PLATFORM_VALUE.BROKEN && Platform.broken >= 1) {
            this.type === [1, 2][Math.floor(Math.random() * 2)];
            Platform.broken = 0;
        }

        if (this.type === PLATFORM_VALUE.NORMAL) {
            this.sy = 0;
            this.score = 10;
        } else if (this.type === PLATFORM_VALUE.MOVE) {
            this.sy = 61;
            this.score = 20;
            const random = Math.random();
            this.vx = random > 0.5 ? -random * 0.2 - 0.8 : random * 0.2 + 0.8;
        } else if (this.type === PLATFORM_VALUE.BROKEN) {
            this.sy = 31;
            this.score = 30;
            this.brokenPlatform = null;
        } else if (this.type === PLATFORM_VALUE.WILL_FADED) {
            this.sy = 90;
            this.score = 30;
        }

        if (
            (this.type === PLATFORM_VALUE.NORMAL || this.type === PLATFORM_VALUE.MOVE) &&
            Platform.spring < 2 &&
            Math.random() < 0.05
        ) {
            Platform.spring += 1;
            this.spring = new Spring();
            this.spring.x = this.x + (this.width - this.spring.width) / 2;
            this.spring.y = this.y - this.spring.height;
        }
    }

    destroy() {
        if (this.spring) {
            Platform.spring -= 1;
        }
    }

    update() {}

    render(ctx) {
        this.drawToCanvas(ctx);
        if (this.spring) {
            this.spring.drawToCanvas(ctx);
        }
    }
}
