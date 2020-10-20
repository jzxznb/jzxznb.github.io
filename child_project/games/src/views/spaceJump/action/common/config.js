export { default as SPRITE_IMG } from '../../images/sprite.png';
export { default as LAND_IMG } from '../../images/land.png';
export { default as BG_IMG } from '../../images/bg.png';

export const PLAYER_WIDTH = 110;
export const PLAYER_HEIGHT = 80;

export const LAND_WIDTH = 100;
export const LAND_HEIGHT = 5;

export const screenWidth = window.innerWidth;
export const screenHeight = window.innerHeight;

export const BROKENPLATFORM_WIDTH = 105;
export const BROKENPLATFORM_HEIGHT = 60;

export const PLATFORM_WIDTH = 105;
export const PLATFORM_HEIGHT = 31;

export const SPRING_WIDTH = 45;
export const SPRING_HEIGHT = 53;

export const BG_WIDTH = 512;
export const BG_HEIGHT = 512;

export const PLATFORM_VALUE = {
    NORMAL: 1, // 正常
    MOVE: 2, // 移动
    BROKEN: 3, // 破损
    WILL_FADED: 4 // 会消失
};
