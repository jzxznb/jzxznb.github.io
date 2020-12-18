const childProcess = require('child_process');
const { dir } = require('console');
const fs = require('fs');
const path = require('path');

const { exec } = childProcess;
const buildProcess = [];

console.log();
function shell(command) {
    return new Promise((resolve, reject) => {
        exec(command, (err, out, code) => {
            resolve({ err, out, code });
        });
    });
}

try {
    const childProject = fs.readdirSync(path.resolve(__dirname, '../child_project')).filter(async item => {
        const dirPath = path.resolve(__dirname, `../child_project/${item}`);
        if (fs.statSync(dirPath).isDirectory()) {
            // console.log(filePath, fs.readdirSync(filePath));
            const res = await shell(`cd ${dirPath} && ls & npm run build`);
            console.log(res);
        }
    });
} catch (error) {
    console.log(error);
}
