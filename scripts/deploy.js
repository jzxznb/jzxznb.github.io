const childProcess = require('child_process');
const { dir } = require('console');
const fs = require('fs');
const path = require('path');

const { exec } = childProcess;
let buildProcess = [];

function shell(command) {
    return new Promise((resolve, reject) => {
        exec(command, (err, out, code) => {
            resolve({ err, out, code, command });
        });
    });
}

try {
    buildProcess = fs
        .readdirSync(path.resolve(__dirname, '../child_project'))
        .filter(item => fs.statSync(path.resolve(__dirname, `../child_project/${item}`)).isDirectory())
        .map(item =>
            shell(`cd ${path.resolve(__dirname, `../child_project/${item}`)} && npm install && npm run build`)
        );
} catch (error) {
    console.log(error);
}

const run = async () => {
    const res = await Promise.all(buildProcess);
    const errList = res.filter(item => item.err);
    errList.length >= 0 && console.log('err', errList);
};

run();
