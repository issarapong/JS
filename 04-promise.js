// 1.1 ร่างสัญญา : เขียนรายละเอียด Promise
function settledFn(fulfillFn, rejectFn) {
    console.log('start promise');
    let num = Math.floor(Math.random() * 11);

    // ตั้งใจจะหาเลขคู่ให้
    if (num % 2 == 0) {
        console.log('I found even number', num);
        fulfillFn('JOB !!!');
    } else {
        console.log('I found odd number', num);
        rejectFn('Zupreme');
    }
}

// 1.2 เซ็นสัญญา : create Promise
const promise1 = new Promise(settledFn);

// 2.1 ทำตามสัญญาได้ไหม => Try to resolve => 1.fullfil 2.rejcet
// console.log(promise1);

// 2.2 แล้วผลลัพธ์คืออะไร ?
function onFulfill(result) {
    console.log('FULFILL!!!');
    console.log(result);
}

function onReject(error) {
    console.log('REJECT!!!');
    console.log(error);
}

// #pattern-1
 //promise1.then(onFulfill, onReject);

// #pattern-2
 //promise1.then(onFulfill).catch(onReject);
 promise1
    .then(onFulfill)
    .catch(onReject)
    .finally(() => console.log('เดินออกจากร้าน'));
