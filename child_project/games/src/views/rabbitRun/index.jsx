import React, { Component } from 'react';
import { runGame } from './action';
import './style.less';

export default class RabbitRun extends Component {
    world;

    unmount = () => {};

    componentDidMount() {
        runGame.call(this);
    }

    componentWillUnmount() {
        this.unmount();
    }

    render() {
        return (
            <div className="rabbit-run">
                <div
                    ref={e => {
                        this.world = e;
                    }}
                    id="world"
                />
                <div id="gameoverInstructions"> Game Over </div>
                <div id="dist">
                    <div className="label">distance</div>
                    <div id="distValue">000</div>
                </div>
                <div id="instructions">
                    Click to jump<span className="lightInstructions"> — Grab the carrots / avoid the hedgehogs</span>
                </div>
            </div>
        );
    }
}
