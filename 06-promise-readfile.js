// fs.readFile('text00.txt', 'utf-8', (err, data) => {
//     console.log('read-1', data);
//     fs.readFile(data, 'utf-8', (err, data) => {
//         console.log('read-2', data);
//         fs.readFile(data, 'utf-8', (err, data) => {
//             console.log('read-3', data);
//             fs.readFile(data, 'utf-8', (err, data) => {
//                 console.log('read-4', data);
//                 fs.readFile(data, 'utf-8', (err, data) => {
//                     console.log('read-5', data);
//                 });
//             });
//         });
//     });
// });

// const fs = require('fs');
const { readFile } = require('fs');

// readFile('text00.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

function readFilePromise(fileName) {
    let promise = new Promise(function (fulfillFn, rejectFn) {
        readFile(fileName, 'utf-8', (err, data) => {
            if (err) rejectFn(err);
            else fulfillFn(data);
        });
    });
    return promise;
}

readFilePromise('text00.txt').then((newFileName) => {
    readFilePromise(newFileName).then((newFileName) => {
        readFilePromise(newFileName).then((newFileName) => {
            readFilePromise(newFileName).then((newFileName) => {
                readFilePromise(newFileName).then((secret) => {
                    console.log(secret);
                });
            });
        });
    });
});

// readFilePromise => promise
// return ใน then มันจะเป็น Res ของ then ถัดไป
readFilePromise('text00.txt')
    .then((newFileName) => readFilePromise(newFileName))
    .then((newFileName) => readFilePromise(newFileName))
    .then((newFileName) => readFilePromise(newFileName))
    .then((secret) => console.log(secret))
    .catch((err) => console.log(err));

console.log('global');
