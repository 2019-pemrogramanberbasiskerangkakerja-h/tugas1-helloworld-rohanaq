var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

let port = 7777;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});