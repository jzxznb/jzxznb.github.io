/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable no-multi-assign */
/* eslint-disable func-names */
/**
 * browserify, combines 3 modules
 */

import $ from 'jquery';

(function e(t, n, r) {
    const i = typeof require === 'function' && require;
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                const a = typeof require === 'function' && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                const f = new Error(`Cannot find module '${o}'`);
                throw ((f.code = 'MODULE_NOT_FOUND'), f);
            }
            const l = (n[o] = {
                exports: {}
            });
            t[o][0].call(
                l.exports,
                function (e1) {
                    const n1 = t[o][1][e1];
                    return s(n1 || e1);
                },
                l,
                l.exports,
                e,
                t,
                n,
                r
            );
        }
        return n[o].exports;
    }
    for (let o = 0; o < r.length; o += 1) s(r[o]);
    return s;
})(
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
                    function handleMouseDown(e) {
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

                    function handleScale(e) {
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

                    function handleNewGame(e) {
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
);
