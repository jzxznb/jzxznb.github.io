import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class index extends Component {
    gameMenu = [
        { name: 'crossLoad', path: '/crossLoad' },
        {
            name: 'goBang',
            path: '/goBang'
        }
    ];

    render() {
        return (
            <div>
                {this.gameMenu.map(item => (
                    <Link key={item.name} to={item.path}>
                        {item.name}
                    </Link>
                ))}
            </div>
        );
    }
}
