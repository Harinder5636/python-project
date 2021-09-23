const request = require('request');

request(
    'http://jsonplaceholder.typicode.com/users',
    function(err, res, body) {
        console.log(body);
    }
);