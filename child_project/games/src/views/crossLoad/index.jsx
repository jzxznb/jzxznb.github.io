/* eslint-disable default-case */
import React, { Component } from 'react';
import { runGame } from './action';
import './style.less';

export default class CrossLoad extends Component {
    forwardBt = null;

    leftBt = null;

    rightBt = null;

    backwardBt = null;

    retryBt = null;

    scene = null;

    unmount = () => {};

    componentDidMount() {
        runGame.call(this);
    }

    componentWillUnmount() {
        this.unmount();
    }

    render() {
        return (
            <div className="cross-load">
                <div id="counter">0</div>
                <div id="controlls">
                    <div>
                        <button
                            ref={e => {
                                this.forwardBt = e;
                            }}
                        >
                            ↑
                        </button>
                        <button
                            ref={e => {
                                this.leftBt = e;
                            }}
                        >
                            ←
                        </button>
                        <button
                            ref={e => {
                                this.backwardBt = e;
                            }}
                        >
                            ↓
                        </button>
                        <button
                            ref={e => {
                                this.rightBt = e;
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>

                <div id="end">
                    <button
                        ref={e => {
                            this.retryBt = e;
                        }}
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }
}
