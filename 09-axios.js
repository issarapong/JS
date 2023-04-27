const axios = require('axios');

axios({
    method: 'post',
    url: 'https://jsonplaceholer.typicode.com/posts',
    data: {
        title: 'foo',
        body: 'bar',
    },
}).then((r) => console.log(r.data));
