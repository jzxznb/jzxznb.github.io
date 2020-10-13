/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable func-names */
import React, { Component } from 'react';
import './style.less';
import $ from 'jquery';
import { e } from './action';

export default class GoBang extends Component {
    params = [
        {
            /**
             * browserify ends, modules:
             */
            1: [
                function (require, module, exports) {
                    // eslint-disable-next-line no-param-reassign
                    module.exports = function () {
                        const win = [[1, 1, 1, 1, 1]];
                        const unCovered4 = [[0, 1, 1, 1, 1, 0]];

                        const unCovered3 = [
                            [0, 1, 1, 1, 0, 0],
                            [0, 0, 1, 1, 1, 0],
                            [0, 1, 0, 1, 1, 0],
                            [0, 1, 1, 0, 1, 0]
                        ];

                        const unCovered2 = [
                            [0, 0, 1, 1, 0, 0],
                            [0, 1, 0, 1, 0, 0],
                            [0, 0, 1, 0, 1, 0],
                            [0, 1, 1, 0, 0, 0],
                            [0, 0, 0, 1, 1, 0],
                            [0, 1, 0, 0, 1, 0]
                        ];
                        const covered4 = [
                            [-1, 1, 0, 1, 1, 1],
                            [-1, 1, 1, 0, 1, 1],
                            [-1, 1, 1, 1, 0, 1],
                            [-1, 1, 1, 1, 1, 0],
                            [0, 1, 1, 1, 1, -1],
                            [1, 0, 1, 1, 1, -1],
                            [1, 1, 0, 1, 1, -1],
                            [1, 1, 1, 0, 1, -1]
                        ];
                        const covered3 = [
                            [-1, 1, 1, 1, 0, 0],
                            [-1, 1, 1, 0, 1, 0],
                            [-1, 1, 0, 1, 1, 0],
                            [0, 0, 1, 1, 1, -1],
                            [0, 1, 0, 1, 1, -1],
                            [0, 1, 1, 0, 1, -1],
                            [-1, 1, 0, 1, 0, 1, -1],
                            [-1, 0, 1, 1, 1, 0, -1],
                            [-1, 1, 1, 0, 0, 1, -1],
                            [-1, 1, 0, 0, 1, 1, -1]
                        ];

                        (function () {
                            // add same combinations for another player
                            const allCombos = [win, unCovered4, unCovered3, unCovered2, covered4, covered3];
                            for (let k = 0; k < allCombos.length; k += 1) {
                                const temp = [];
                                for (let j = 0; j < allCombos[k].length; j += 1) {
                                    const tmp = [];
                                    for (let i = 0; i < allCombos[k][j].length; i += 1) tmp[i] = -allCombos[k][j][i];
                                    temp.push(tmp);
                                }
                                for (let m = 0; m < temp.length; m += 1) {
                                    allCombos[k].push(temp[m]);
                                }
                            }
                        })();

                        const valueCombo = function (w, u2, u3, u4, c3, c4) {
                            if (w > 0) return 1000000000;
                            if (u4 > 0) return 100000000;
                            if (c4 > 1) return 10000000;
                            if (u3 > 0 && c4 > 0) return 1000000;
                            if (u3 > 1) return 100000;

                            if (Number(u3) === 1) {
                                if (Number(u2) === 3) return 40000;
                                if (Number(u2) === 2) return 38000;
                                if (Number(u2) === 1) return 35000;
                                return 3450;
                            }

                            if (Number(c4) === 1) {
                                if (Number(u2) === 3) return 4500;
                                if (Number(u2) === 2) return 4200;
                                if (Number(u2) === 1) return 4100;
                                return 4050;
                            }

                            if (Number(c3) === 1) {
                                if (Number(u2) === 3) return 3400;
                                if (Number(u2) === 2) return 3300;
                                if (Number(u2) === 1) return 3100;
                            }

                            if (Number(c3) === 2) {
                                if (Number(u2) === 2) return 3000;
                                if (Number(u2) === 1) return 2900;
                            }

                            if (Number(c3) === 3) {
                                if (Number(u2) === 1) return 2800;
                            }

                            if (Number(u2) === 4) return 2700;
                            if (Number(u2) === 3) return 2500;
                            if (Number(u2) === 2) return 2000;
                            if (Number(u2) === 1) return 1000;
                            return 0;
                        };

                        const findArray = function (arr, inArr) {
                            const fCount = arr.length;
                            const sCount = inArr.length;
                            let k;
                            for (let i = 0; i <= fCount - sCount; i += 1) {
                                k = 0;
                                for (let j = 0; j < sCount; j += 1) {
                                    if (arr[i + j] === inArr[j]) k += 1;
                                    else break;
                                }
                                if (Number(k) === Number(sCount)) return true;
                            }
                            return false;
                        };

                        const isAnyInArrays = function (combos, arr) {
                            for (let i = 0; i < combos.length; i += 1) {
                                if (findArray(arr, combos[i])) return true;
                            }
                            return false;
                        };

                        const combinations = {};
                        combinations.winValue = 1000000000;
                        combinations.valuePosition = function (arr1, arr2, arr3, arr4) {
                            // 4 directions
                            let w = 0;
                            let u2 = 0;
                            let u3 = 0;
                            let u4 = 0;
                            let c3 = 0;
                            let c4 = 0;
                            const allArr = [arr1, arr2, arr3, arr4];
                            for (let i = 0; i < allArr.length; i += 1) {
                                if (isAnyInArrays(win, allArr[i])) {
                                    w += 1;
                                    continue;
                                }
                                if (isAnyInArrays(covered4, allArr[i])) {
                                    c4 += 1;
                                    continue;
                                }
                                if (isAnyInArrays(covered3, allArr[i])) {
                                    c3 += 1;
                                    continue;
                                }
                                if (isAnyInArrays(unCovered4, allArr[i])) {
                                    u4 += 1;
                                    continue;
                                }
                                if (isAnyInArrays(unCovered3, allArr[i])) {
                                    u3 += 1;
                                    continue;
                                }
                                if (isAnyInArrays(unCovered2, allArr[i])) {
                                    u2 += 1;
                                }
                            }
                            return valueCombo(w, u2, u3, u4, c3, c4);
                        };
                        return combinations;
                    };
                },
                {}
            ],
            2: [
                function (require, module, exports) {
                    Array.matrix = function (m, n, initial) {
                        let a;
                        let i;
                        let j;
                        const mat = [];
                        for (i = 0; i < m; i += 1) {
                            a = [];
                            for (j = 0; j < n; j += 1) {
                                a[j] = initial;
                            }
                            mat[i] = a;
                        }
                        return mat;
                    };

                    const initCombinations = require('./combinations');

                    module.exports = function (player) {
                        const gameSize = 5; // 5 in line
                        const ring = 1; // ring size around current cells
                        let win = false;
                        const cellsCount = 15;
                        const curState = Array.matrix(15, 15, 0);
                        const complexity = 1;
                        const maxPlayer = player || -1; // X = 1, O = -1
                        const combinations = initCombinations();
                        if (maxPlayer === -1) curState[7][7] = 1;
                        const getCombo = function (node, curPlayer, i, j, dx, dy) {
                            const combo = [curPlayer];
                            for (let m = 1; m < gameSize; m += 1) {
                                const nextX1 = i - dx * m;
                                const nextY1 = j - dy * m;
                                if (nextX1 >= cellsCount || nextY1 >= cellsCount || nextX1 < 0 || nextY1 < 0) break;
                                const next1 = node[nextX1][nextY1];
                                if (node[nextX1][nextY1] === -curPlayer) {
                                    combo.unshift(next1);
                                    break;
                                }
                                combo.unshift(next1);
                            }
                            for (let k = 1; k < gameSize; k += 1) {
                                const nextX = i + dx * k;
                                const nextY = j + dy * k;
                                if (nextX >= cellsCount || nextY >= cellsCount || nextX < 0 || nextY < 0) break;
                                const next = node[nextX][nextY];
                                if (next === -curPlayer) {
                                    combo.push(next);
                                    break;
                                }
                                combo.push(next);
                            }
                            return combo;
                        };

                        const heuristic = function (newNode, oldNode) {
                            for (let i = 0; i < cellsCount; i += 1) {
                                for (let j = 0; j < cellsCount; j += 1) {
                                    if (newNode[i][j] !== oldNode[i][j]) {
                                        const curCell = newNode[i][j];
                                        const playerVal = combinations.valuePosition(
                                            getCombo(newNode, curCell, i, j, 1, 0),
                                            getCombo(newNode, curCell, i, j, 0, 1),
                                            getCombo(newNode, curCell, i, j, 1, 1),
                                            getCombo(newNode, curCell, i, j, 1, -1)
                                        );
                                        newNode[i][j] = -curCell;
                                        const oppositeVal = combinations.valuePosition(
                                            getCombo(newNode, -curCell, i, j, 1, 0),
                                            getCombo(newNode, -curCell, i, j, 0, 1),
                                            getCombo(newNode, -curCell, i, j, 1, 1),
                                            getCombo(newNode, -curCell, i, j, 1, -1)
                                        );
                                        newNode[i][j] = -curCell;
                                        return 2 * playerVal + oppositeVal;
                                    }
                                }
                            }
                            return 0;
                        };

                        const checkWin = function () {
                            for (let i = 0; i < cellsCount; i += 1) {
                                for (let j = 0; j < cellsCount; j += 1) {
                                    if (curState[i][j] === 0) continue;
                                    const playerVal = combinations.valuePosition(
                                        getCombo(curState, curState[i][j], i, j, 1, 0),
                                        getCombo(curState, curState[i][j], i, j, 0, 1),
                                        getCombo(curState, curState[i][j], i, j, 1, 1),
                                        getCombo(curState, curState[i][j], i, j, 1, -1)
                                    );
                                    if (playerVal === combinations.winValue) {
                                        win = true;
                                    }
                                }
                            }
                        };
                        const isAllSatisfy = function (candidates, pointX, pointY) {
                            let counter = 0;
                            for (let i = 0; i < candidates.length; i += 1) {
                                if (pointX !== candidates[i][0] || pointY !== candidates[i][1]) counter += 1;
                            }
                            return Number(counter) === Number(candidates.length);
                        };
                        const getChilds = function (parent, playerS) {
                            const children = [];
                            const candidates = [];
                            for (let i = 0; i < cellsCount; i += 1) {
                                for (let j = 0; j < cellsCount; j += 1) {
                                    if (parent[i][j] !== 0) {
                                        for (let k = i - ring; k <= i + ring; k += 1) {
                                            for (let l = j - ring; l <= j + ring; l += 1) {
                                                if (k >= 0 && l >= 0 && k < cellsCount && l < cellsCount) {
                                                    if (parent[k][l] === 0) {
                                                        const curPoint = [k, l];
                                                        const flag = isAllSatisfy(candidates, curPoint[0], curPoint[1]);
                                                        if (flag) candidates.push(curPoint);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            for (let f = 0; f < candidates.length; f += 1) {
                                const tmp = Array.matrix(cellsCount, cellsCount, 0);
                                for (let m = 0; m < cellsCount; m += 1) {
                                    for (let n = 0; n < cellsCount; n += 1) {
                                        tmp[m][n] = parent[m][n];
                                    }
                                }
                                tmp[candidates[f][0]][candidates[f][1]] = -playerS;
                                children.push(tmp);
                            }
                            return children;
                        };

                        const miniMax = function minimax(node, depth, players, parent) {
                            if (Number(depth) === 0) return heuristic(node, parent);
                            let alpha = Number.MIN_VALUE;
                            const childs = getChilds(node, players);
                            for (let i = 0; i < childs.length; i += 1) {
                                alpha = Math.max(alpha, -minimax(childs[i], depth - 1, -players, node));
                            }
                            return alpha;
                        };

                        const getLogic = {};
                        getLogic.winState = '';
                        getLogic.makeAnswer = function (x, y) {
                            const that = this;
                            curState[x][y] = maxPlayer;
                            checkWin();
                            if (win) {
                                that.winState = 'you win';
                                return '';
                            }
                            const answ = [-1, -1];
                            const c = getChilds(curState, maxPlayer);
                            let maxChild = -1;
                            let maxValue = Number.MIN_VALUE;
                            for (let k = 0; k < c.length; k += 1) {
                                const curValue = miniMax(c[k], 0, -maxPlayer, curState);
                                if (complexity > 1) {
                                    // var curValue2 = miniMax(c[k], complexity - 1, -maxPlayer, curState);
                                    // use it for more complex game!
                                }
                                if (maxValue < curValue) {
                                    maxValue = curValue;
                                    maxChild = k;
                                }
                            }
                            for (let i = 0; i < cellsCount; i += 1) {
                                for (let j = 0; j < cellsCount; j += 1) {
                                    if (c[maxChild][i][j] !== curState[i][j]) {
                                        answ[0] = i;
                                        answ[1] = j;
                                        curState[answ[0]][answ[1]] = -maxPlayer;
                                        checkWin();
                                        if (win) {
                                            that.winState = 'you lost';
                                        }
                                        return answ;
                                    }
                                }
                            }
                            return answ;
                        };
                        return getLogic;
                    };
                },
                {
                    './combinations': 1
                }
            ],
            3: [
                function (require, module, exports) {
                    $(document).ready(function () {
                        const initLogic = require('./gomoku/logic');
                        let logic = initLogic();

                        $('#7-7').addClass('boardCellCross');
                        let currValue = -1; // player - O, computer - X
                        let gameOver = false;
                        function handleMouseDown() {
                            function deserve() {
                                currValue *= -1;
                                if (currValue === 1) {
                                    return 'boardCellCross';
                                }
                                return 'boardCellCircle';
                            }
                            if (gameOver) return '';
                            const cell = $(this);
                            if (cell.children().hasClass('boardCellCircle')) return '';
                            if (cell.children().hasClass('boardCellCross')) return '';
                            const indexes = cell.children().attr('id').split('-');
                            const answer = logic.makeAnswer(indexes[0], indexes[1]);
                            if (answer !== '') {
                                const getedId = `#${answer[0]}-${answer[1]}`;
                                $(getedId).addClass(deserve());
                            } else currValue *= -1;
                            cell.children().addClass(deserve());

                            if (logic.winState !== '') {
                                const message = $('#message');
                                message.text(logic.winState);
                                gameOver = true;
                                message.removeClass('looseState');
                                if (logic.winState === 'you lost') {
                                    message.addClass('looseState');
                                }
                            }
                            return '';
                        }

                        $('div.boardCol').mousedown(handleMouseDown);

                        function handleScale() {
                            const value = 100;
                            const minValue = 300;
                            const delta = $(this).attr('id').split('-')[1];
                            const board = $('.board');
                            const controls = $('.controls');
                            if (delta === 'Up') {
                                board.width(board.width() + value);
                                board.height(board.height() + value);
                                controls.width(controls.width() + value);
                                controls.height(controls.height() + value / 15);
                            }
                            if (delta === 'Down' && board.width() > minValue) {
                                board.width(board.width() - value);
                                board.height(board.height() - value);
                                controls.width(controls.width() - value);
                                controls.height(controls.height() - value / 15);
                            }
                        }

                        $('#scale-Up').click(handleScale);
                        $('#scale-Down').click(handleScale);

                        function handleNewGame() {
                            const index = $(this).children().attr('id').split('-')[1];
                            $('.boardCell').removeClass('boardCellCross boardCellCircle');
                            gameOver = false;
                            $('#message').text('');
                            if (index === 'O') {
                                logic = initLogic();
                                $('#7-7').addClass('boardCellCross');
                                currValue = -1;
                            }
                            if (index === 'X') {
                                logic = initLogic(1);
                                currValue = 1;
                            }
                            $('#check').prop('checked', false);
                        }

                        $('#new-O').parent().click(handleNewGame);
                        $('#new-X').parent().click(handleNewGame);
                    });
                },
                {
                    './gomoku/logic': 2
                }
            ]
        },
        {},
        [3]
    ];

    get Size() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }

    componentDidMount() {
        e(...this.params);
    }

    render() {
        return (
            <div
                className="go-bang"
                style={{
                    height: this.Size.height,
                    width: this.Size.width,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <section>
                    <div className="controls">
                        <div className="newGameCtrl">
                            <input type="checkbox" id="check" />
                            <label className="newMain" htmlFor="check">
                                <div className="newMainText">new</div>
                            </label>
                            <div className="newContainer">
                                <div className="newPlate">
                                    <div className="boardCellCircle" id="new-O"></div>
                                </div>
                                <div className="newPlate">
                                    <div className="boardCellCross" id="new-X"></div>
                                </div>
                            </div>
                        </div>
                        <div className="sizeCtrl">
                            <div className="newMain">
                                <div className="newMainText" id="scale-Up">
                                    +
                                </div>
                            </div>
                        </div>
                        <div className="sizeCtrl">
                            <div className="newMain">
                                <div className="newMainText" id="scale-Down">
                                    -
                                </div>
                            </div>
                        </div>
                        <div className="messages">
                            <div className="messagesContainer">
                                <div className="newMainText" id="message">
                                    try to get 5 in a row!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="board">
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="0-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="0-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="1-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="1-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="2-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="2-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="3-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="3-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="4-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="4-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="5-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="5-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="6-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="6-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="7-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="7-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="8-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="8-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="9-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="9-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="10-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="10-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="11-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="11-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="12-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="12-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="13-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="13-14"></div>
                            </div>
                        </div>
                        <div className="boardRow">
                            <div className="boardCol">
                                <div className="boardCell" id="14-0"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-1"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-2"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-3"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-4"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-5"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-6"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-7"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-8"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-9"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-10"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-11"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-12"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-13"></div>
                            </div>
                            <div className="boardCol">
                                <div className="boardCell" id="14-14"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
