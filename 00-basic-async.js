// # Synchronous Task == one thing at a timee

// console.log(1);
// console.log(2);
// console.log(a);
// console.log(4);

// # Asynchronous Task == multiple thing at a time (but 1 thread)

// ### EX-1
// function execute() {
//     console.log('EXECUTE !!!');
// }
// // execute();

// console.log('Before'); // sync
// setTimeout(execute, 0); // async
// for (let i = 0; i < 20000; i++) {
//     console.log('After'); // sync
// }
// Stack Empty

// ### EX-2
// function execute1() {
//     console.log('EXECUTE-1 !!!');
// }

// function execute2() {
//     console.log('EXECUTE-2 !!!');
// }
// console.log('Before'); // sync
// setTimeout(execute1, 5000); // async
// setTimeout(execute2, 2000); // async
// console.log('After'); // sync
// Stack Empty

// ### EX-3A : Run Execute3 after Execute-1
// function execute1() {
//     console.log('EXECUTE-1 !!!');
//     execute3();
// }

// function execute2() {
//     console.log('EXECUTE-2 !!!');
// }

// function execute3() {
//     console.log('EXECUTE-3 !!!');
// }
// console.log('Before'); // sync
// setTimeout(execute1, 5000); // async

// setTimeout(execute2, 2000); // async
// console.log('After'); // sync

// ### EX-3B : Run Execute3 after Execute-1
function execute1() {
    console.log('EXECUTE-1 !!!');
    // execute3();
}

function execute2() {
    console.log('EXECUTE-2 !!!');
}

function execute3() {
    console.log('EXECUTE-3 !!!');
}
console.log('Before'); // sync

setTimeout(execute1, 2000); // async

setTimeout(() => {
    // .....
    execute2();
}, 5000); // async

console.log('After'); // sync
