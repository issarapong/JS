// ##### Callback  : 1st way ในการจัดการ sequence of async task

// Ex-1 : Synchronous Task

// function doStep1(num) {
//     return num + 1;
// }
// function doStep2(num) {
//     return num + 2;
// }
// function doStep3(num) {
//     return num + 3;
// }

// function doOperation() {
//     let init = 0;
//     let result;

//     result = doStep1(init);
//     result = doStep2(result);
//     result = doStep3(result);

//     console.log(`result is : ${result}`);
// }

// doOperation();

// EX-2 == EX-1 But Async Way
// Note : ลำดับการทำงานแบบ line by line ไม่ได้

// let result = 0;

// function doStep1() {
//     setTimeout(() => {
//         result += 1;
//     }, 3000);
// }

// function doStep2() {
//     setTimeout(() => {
//         result += 2;
//     }, 2000);
// }

// function doStep3() {
//     setTimeout(() => {
//         result += 3;
//         console.log(`result is : ${result}`);
//     }, 1000);
// }

// function doOperation() {
//     doStep1(); // ฝาก-1
//     doStep2(); // ฝาก-2
//     doStep3(); // ฝาก-3
// }

// doOperation();

// # EX-3 : How to solve Ex-2
// การแก้ปัญหา การลำดับการทำงานของ Async Task

// let result = 0;

// function doStep1(callbackFN) {
//     setTimeout(() => {
//         result += 1;
//         callbackFN();
//     }, 3000);
// }

// function doStep2(callbackFN) {
//     setTimeout(() => {
//         result += 2;
//         callbackFN();
//     }, 2000);
// }

// function doStep3(callbackFN) {
//     setTimeout(() => {
//         result += 3; //6

// callbackFN(result);
//     }, 1000);
// }

// function doOperation() {
//     // doStep1 ==> doStep2 ==> doStep3
//     // หน้าตา callback : () => {}
//     // doStep1(() => doStep2(() => doStep3((r) => console.log(`result : ${r}`))));
// doStep1(function () {
//     doStep2(function () {
//         doStep3(function (a) {
//             console.log(`result : ${a}`);
//         });
//     });
// });
// }

// doOperation();

// EX-4 : Solve Task Ex-1 By Asynchronous way

function doStep1(num, callback) {
    setTimeout(() => {
        let result1 = num + 1;
        callback(result1); // callback(1) == (1) =>  {}
    }, 5000);
}

function doStep2(num, callback) {
    setTimeout(() => {
        let result2 = num + 2;
        callback(result2);
    }, 500);
}

function doStep3(num, callback) {
    setTimeout(() => {
        let result3 = num + 3;
        callback(result3);
    }, 1000);
}

function doOperation() {
    doStep1(0, (r1) => doStep2(r1, (r2) => doStep3(r2, (r3) => console.log(`result is : ${r3}`))));
}

doOperation();

for (let i = 0; i < 10; i++) {
    console.log('global');
}

function a(num, callback) {
    let r = num + 10;
    // use 10 min
    callback(r); // execute b after 10 min
}

function b(num) {
    console.log(num);
}

// Sync task
a();
b();

// Async Task : Execute a => Execute b
a(20, b);
