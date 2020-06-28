import React, { Component } from 'react';
import anime from 'animejs';
import { getSearch } from '../common/utils.ts';

export default class App extends Component {
    state = {
        menuList: [
            { name: '1', show: this.isAdmin },
            { name: '2', show: true },
            { name: '2', show: true },
            { name: '2', show: true },
            { name: '2', show: true },
            { name: '2', show: true },
        ],
    }

    get isAdmin() {
        return !!getSearch(window.location.href, 'admin');
    }

    componentDidMount() {
        console.log(this);
        // this.bgInit()
    }

    bgInit() {
        const canvasEl = this.refs['main-bg'];
        const ctx = canvasEl.getContext('2d');
        const numberOfParticules = 30;
        let pointerX = 0;
        let pointerY = 0;
        const tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
        const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

        function setCanvasSize() {
            canvasEl.width = window.innerWidth * 2;
            canvasEl.height = window.innerHeight * 2;
            canvasEl.style.width = `${window.innerWidth}px`;
            canvasEl.style.height = `${window.innerHeight}px`;
            canvasEl.getContext('2d').scale(2, 2);
        }

        function updateCoords(e) {
            pointerX = e.clientX || e.touches[0].clientX;
            pointerY = e.clientY || e.touches[0].clientY;
        }

        function setParticuleDirection(p) {
            const angle = (anime.random(0, 360) * Math.PI) / 180;
            const value = anime.random(50, 180);
            const radius = [-1, 1][anime.random(0, 1)] * value;
            return {
                x: p.x + radius * Math.cos(angle),
                y: p.y + radius * Math.sin(angle),
            };
        }

        function createParticule(x, y) {
            const p = {};
            p.x = x;
            p.y = y;
            p.color = colors[anime.random(0, colors.length - 1)];
            p.radius = anime.random(16, 32);
            p.endPos = setParticuleDirection(p);
            p.draw = () => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
                ctx.fillStyle = p.color;
                ctx.fill();
            };
            return p;
        }

        function createCircle(x, y) {
            const p = {};
            p.x = x;
            p.y = y;
            p.color = '#FFF';
            p.radius = 0.1;
            p.alpha = 0.5;
            p.lineWidth = 6;
            p.draw = () => {
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
                ctx.lineWidth = p.lineWidth;
                ctx.strokeStyle = p.color;
                ctx.stroke();
                ctx.globalAlpha = 1;
            };
            return p;
        }

        function renderParticule(anim) {
            for (let i = 0; i < anim.animatables.length; i += 1) {
                anim.animatables[i].target.draw();
            }
        }

        function animateParticules(x, y) {
            const circle = createCircle(x, y);
            const particules = [];
            for (let i = 0; i < numberOfParticules; i += 1) {
                particules.push(createParticule(x, y));
            }
            anime.timeline().add({
                targets: particules,
                x(p) { return p.endPos.x; },
                y(p) { return p.endPos.y; },
                radius: 0.1,
                duration: anime.random(1200, 1800),
                easing: 'easeOutExpo',
                update: renderParticule,
            })
                .add({
                    targets: circle,
                    radius: anime.random(80, 160),
                    lineWidth: 0,
                    alpha: {
                        value: 0,
                        easing: 'linear',
                        duration: anime.random(600, 800),
                    },
                    duration: anime.random(1200, 1800),
                    easing: 'easeOutExpo',
                    update: renderParticule,
                    offset: 0,
                });
        }

        const render = anime({
            duration: Infinity,
            update() {
                ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
            },
        });

        document.addEventListener(tap, (e) => {
            render.play();
            updateCoords(e);
            animateParticules(pointerX, pointerY);
        }, false);

        function autoClick() {
            animateParticules(
                anime.random(100, window.innerWidth - 100),
                anime.random(100, window.innerHeight - 100),
            );
            anime({ duration: 200 }).finished.then(autoClick);
        }

        autoClick();
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize, false);
    }

    render() {
        const { menuList } = this.state;
        return <div className="background">
            <div className="box">
                {menuList.filter((item) => item.show).map((item, index) => <div key={index}>{ item.name }</div>)}
            </div>
            <canvas style={{
                position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
            }} ref="main-bg"></canvas>
        </div>;
    }
}
