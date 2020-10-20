export default class Sprite {
    constructor(src, params) {
        const {
            sx = 0, // 当前精灵图在原图片中的位置
            sy = 0,
            sw = 0,
            sh = 0,
            x = 0, // 要绘制到canvas中的位置
            y = 0,
            width,
            height
        } = params;
        this.isLoading = true;
        this.sprite = new Image();
        this.sprite.src = src;
        this.sprite.onload = () => {
            this.isLoading = false;
        };
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.x = x;
        this.y = y;
        this.width = width || sw;
        this.height = height || sh;
        this.visible = true;
    }

    setVisible(visible) {
        this.visible = visible;
        return this;
    }

    drawToCanvas(ctx) {
        if (this.visible) {
            ctx.drawImage(this.sprite, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
        }
    }
}
