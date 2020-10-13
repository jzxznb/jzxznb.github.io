import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class index extends Component {
    gameMenu = [
        { name: 'crossLoad', path: '/crossLoad' },
        { name: 'stack', path: '/cssStack' }
    ];

    render() {
        return (
            <div>
                {this.gameMenu.map(item => (
                    <Link to={item.path}>{item.name}</Link>
                ))}
            </div>
        );
    }
}
