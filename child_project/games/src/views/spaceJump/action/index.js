import Player from './player';
import { screenWidth, screenHeight, PLATFORM_VALUE } from './common/config';
import Land from './land';
import Platform from './platform';
import Background from './background';

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.gameId = 0;
        this.length = parseInt(((screenWidth / 422 + screenHeight / 552) / 2) * 10, 10);
        this.gravity = 0.2;
        this.ctx = canvas.getContext('2d');
        this.start();
    }

    start() {
        this.score = 0;
        this.isOver = 0;
        this.platforms = [];
        this.bg = new Background();
        this.player = new Player();
        this.land = new Land();
        this.initEvent();
        // for (let i = 0; i < this.length; i += 1) {
        //     this.platforms.push(
        //         new Platform({
        //             score: this.score,
        //             y: (screenHeight / this.length) * i + 10 + Math.random() * 10
        //         })
        //     );
        // }
        cancelAnimationFrame(this.gameId);
        this.gameId = requestAnimationFrame(this.loop.bind(this));
    }

    gameOver() {
        // if (!this.isOver) return;
    }

    render() {
        this.update();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.bg.render(this.ctx);
        this.platforms.map(item => item.render(this.ctx));
        this.player.drawToCanvas(this.ctx);
        this.land.drawToCanvas(this.ctx);
    }

    update() {
        const { player } = this;
        if (this.isOver) return;
        this.bg.update();
        player.update();
        if (player.y + player.height > this.land.y) {
            player.jump();
        }
        if (player.y + player.height >= screenHeight && !this.land.visible) {
            this.isOver = 1;
        }
        if (player.y >= screenHeight / 2 - player.height / 2) {
            player.y += player.vy;
        } else {
            if (player.vy < 0) {
                this.score = parseInt(this.score + Math.abs(player.vy), 10);
                // this.bg.y = Number((this.bg.y - player.vy).toFixed(1));
            }
            if (player.vy < 0 && this.land.visible) {
                this.land.y -= player.vy;
            }
            if (this.land.y > screenHeight) {
                this.land.visible = false;
            }

            if (player.vy >= 0) {
                player.y += player.vy;
                player.vy += this.gravity;
            }
        }
        player.vy += this.gravity;
        this.upadtePlatforms();
    }

    upadtePlatforms() {
        // 判断是否落在平台上
        const { player } = this;
        this.platforms.forEach((item, index) => {
            const platform = item;
            // 先变化平台位置，再执行update
            if (player.y < screenHeight / 2 - player.height / 2) {
                // 当角色跳跃高度超过屏幕一半高时移动平台位置
                if (player.vy < 0) {
                    platform.y -= player.vy;
                }
                // 移动到屏幕外的平台回收重新绘制
                if (platform.y > screenHeight) {
                    // 回收一个就记下一个分数
                    // this.score += item.score;
                    platform.destroy();
                    this.platforms[index] = new Platform({
                        score: this.score,
                        y: platform.y - screenHeight
                    });
                }
            }
            platform.update();
            // 向上跳的过程不判断，平台消失后不判断
            if (!platform.visible || player.vy < 0) return;
            // 判断角色是否落在平台上
            if (
                player.x + 15 < platform.x + platform.width &&
                player.x + player.width - 15 > platform.x &&
                player.y + player.height > platform.y &&
                player.y + player.height < platform.y + platform.height
            ) {
                if (item.type === PLATFORM_VALUE.NORMAL) {
                    player.jump();
                } else if (item.type === PLATFORM_VALUE.MOVE) {
                    player.jump();
                } else if (item.type === PLATFORM_VALUE.BROKEN) {
                    platform.visible = false;
                } else if (item.type === PLATFORM_VALUE.WILL_FADED) {
                    platform.visible = false;
                    player.jump();
                }
            }
            const { spring } = item;
            if (spring) {
                // Springs
                if (
                    !spring.shoot &&
                    player.x + 15 < spring.x + spring.width &&
                    player.x + player.width - 15 > spring.x &&
                    player.y + player.height > spring.y &&
                    player.y + player.height < spring.y + spring.height
                ) {
                    spring.shoot = true;
                    player.jumpBySpring();
                }
            }
        });
    }

    initEvent() {
        this.canvas.addEventListener('touchstart', this.touchStartHandler.bind(this));
        this.canvas.addEventListener('touchend', this.touchEndHandler.bind(this));
    }

    removeEvent() {
        this.canvas.removeEventListener('touchstart', this.touchStartHandler.bind(this));
        this.canvas.removeEventListener('touchend', this.touchEndHandler.bind(this));
    }

    touchEndHandler(event) {
        console.log('touchend');
        event.preventDefault();
        this.player.isMovingLeft = false;
        this.player.isMovingRight = false;
    }

    touchStartHandler(event) {
        console.log('touchstart');
        event.preventDefault();
        const { touches = [] } = event || {};
        const touch = touches[touches.length - 1];
        if (!touch) return;
        const { clientX } = touch;
        if (clientX <= screenWidth / 2) {
            this.player.isMovingLeft = true;
            this.player.isMovingRight = false;
            this.player.dir = 'left';
        } else {
            this.player.isMovingRight = true;
            this.player.isMovingLeft = false;
            this.player.dir = 'right';
        }
    }

    destroy() {}

    loop() {
        this.render();
        this.gameId = requestAnimationFrame(this.loop.bind(this));
    }
}
