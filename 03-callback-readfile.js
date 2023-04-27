// ES Module
// import ... from ...

// Common JS Import
const fs = require('fs');

// ###################################################

// ### ReadFile  : Async == ไม่ block == code บรรทัดถัดไปจะถูกรันต่อทันที
// หน้าตา readFile(path,option,callback)
// หน้าตา callback(err,data)
// callback ทำงานเมื่ออ่านไฟล์จบ case1.อ่านได้ case2.อ่านไม่ได้
// error first callback == parameter ตัวที่ 1 จะเป็น error

//fs.readFile('text00.txt', 'utf-8', (err, data) => {
 //   console.log('-'.repeat(30));
 //   console.log(err);
 //   console.log('-'.repeat(30));
 //   console.log(data);
//});

// Other Code : ไม่รอให้อ่านไฟล์เสร็จ
//console.log('Global');


// Ex-2 : Read in sequence

fs.readFile('text00.txt', 'utf-8', (err, data) => {
    console.log('read-1', data);

    fs.readFile(data, 'utf-8', (err, data) => {
        console.log('read-2', data);

        fs.readFile(data, 'utf-8', (err, data) => {
            console.log('read-3', data);
            fs.readFile(data, 'utf-8', (err, data) => {
                console.log('read-4', data);
                fs.readFile(data, 'utf-8', (err, data) => {
                    console.log('read-X', data);
                });
            });
        });
    });
});

// Other Code : ไม่รอให้อ่านไฟล์เสร็จ
console.log('Global');

