import React, { Component } from 'react';
import Game from './action';

export default class SpaceJump extends Component {
    gameWorld;

    componentDidMount() {
        const game = new Game(this.gameWorld);
    }

    render() {
        return (
            <div className="space-jump">
                <canvas
                    width={window.innerWidth}
                    height={window.innerHeight}
                    ref={e => {
                        this.gameWorld = e;
                    }}
                ></canvas>
            </div>
        );
    }
}
