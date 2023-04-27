// Sync function
// function a() {
//     return 2;
// }
// console.log(a());
// console.log('global');

// Async function
const { readFile } = require('fs');
function readFilePromise(fileName) {
    let promise = new Promise(function (fulfillFn, rejectFn) {
        readFile(fileName, 'utf-8', (err, data) => {
            if (err) rejectFn(err);
            else fulfillFn(data);
        });
    });
    return promise;
}

async function f1() {
    try {
        // try to fulfill
        // readFilePromise('text00.txt').then(data);
        let res1 = await readFilePromise('text00.txt');
        let res2 = await readFilePromise(res1);
        let res3 = await readFilePromise(res2);
        let res4 = await readFilePromise(res3);
        let res5 = await readFilePromise(res4);
        console.log(res5);
    } catch (err) {
        // cannot fulfill
        console.log(err);
    }
    // throw new Error('error'); // promise reject
    // return 1; // fulfill(2) == promise fulfill
}

f1(); // return {Promise }

// f1()
//     .then((r) => console.log(r))
//     .catch((err) => {
//         console.log('!!!!!!!!!!!!!');
//         console.log(err);
//     });

// function f2() {
//     return new Promise((resolve) => resolve(1));
// }

// f2()
//     .then((r) => console.log(r))
//     .catch((err) => {
//         console.log('!!!!!!!!!!!!!');
//         console.log(err);
//     });

console.log('global');
