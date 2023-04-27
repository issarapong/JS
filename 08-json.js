const { readFile} = require('fs');

readFile('user.json', 'utf-8', (err, data) => {
    console.log(data);
    console.log(typeof data)
})