import React, { Component } from 'react';
import { runGame } from './action';
import './OrbitControls';

export default class RabbitRun extends Component {
    componentDidMount() {
        runGame();
    }

    render() {
        return (
            <div className="rabbit-run">
                <div id="world" />
                <div id="gameover-instructions"> Game Over </div>
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
