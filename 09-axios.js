const axios = require('axios');


//GET
axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
})
 //.then((r) => console.log(r.data))
 //.catch((err) => console.log(err.response.data));

 .then((rest) => console.log(rest.status))
 .catch((err) => console.log(err.response.status));


 //POST
axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
        title: 'fooss',
        body: 'bar',
    },
})
//.then((rest) => console.log(rest.status))  //rest.status rest.data
//.catch((err) => console.log(err.response.status));

.then((rest) => console.log(rest.data))  //rest.status rest.data
.catch((err) => console.log(err.response.data));