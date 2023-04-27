function execute() {
    console.log('Hello !!');
}

// async task - 1
let intervalId = setInterval(execute, 2000);

console.log('global');
console.log('Interval ID  =', intervalId);

// async task - 2
setTimeout(() => {
    clearInterval(intervalId);
}, 11000);

// call stack ว่าง
