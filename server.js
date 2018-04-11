var express = require('express');
var app = express();
app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.send('Hello world');
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});