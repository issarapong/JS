// 1.1 ร่างสัญญา : เขียนรายละเอียด Promise
function settledFn(fulfillFn, rejectFn) {
    console.log('start promise');
    let num = Math.floor(Math.random() * 11);

    // ตั้งใจจะหาเลขคู่ให้
    if (num % 2 == 0) {
        // console.log('I found even number', num);
        fulfillFn(num);
        // fulfillFn('ข้าวมาแล้วจ้า');
    } else {
        // console.log('I found odd number', num);
        rejectFn(num);
        // rejectFn(new Error('found ODD number!!'));
        // throw new Error('found ODD number');
        // rejectFn('หมูกรอบหมด');
    }
}

// 1.2 เซ็นสัญญา : create Promise
// const promise2 = new Promise(settledFn);

// 2.0 ดูผลลัพธ์

// promise2
//     .then((result) => {
//         console.log('fullfil');
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log('reject');
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('End promise');
//     });

// ### pattern-3 : promise chaining

// promise2
//     .then((res) => {
//         console.log(res);
//         return res + 1; // next fulfillValue == nextRes?
//         // return res + 1 ===  new Promise((a,b)=> a(res+1))
//     })
//     .then((res) => {
//         console.log(res);
//         return res + 1; // next fulfillValue == nextRes?
//     })
//     .then((res) => {
//         console.log(res);
//         return res + 1; // next fulfillValue == nextRes?
//     })
//     .then((res) => {
//         console.log(res);
//         return res + 1; // next fulfillValue == nextRes?
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// ## Promise.all

// function newSettleFn(fulfillFn, rejectFn) {
//     fulfillFn(2);
// }

// const promise_A = new Promise(newSettleFn);
// const promise_B = new Promise(newSettleFn);
// const promise_C = new Promise(newSettleFn);

// const result = Promise.all([promise_A, promise_B, promise_C]);

// result.then((r) => console.log(r)).catch((e) => console.log(e));

Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(console.log); // [ 1, 2, 3 ]
