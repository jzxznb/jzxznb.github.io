import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class index extends Component {
    gameMenu = [
        { name: '穿越马路', path: '/crossLoad' },
        {
            name: '五子棋',
            path: '/goBang'
        },
        { name: '逃跑', path: '/rabbitRun' },
        { name: '跳跃', path: '/spaceJump' }
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
