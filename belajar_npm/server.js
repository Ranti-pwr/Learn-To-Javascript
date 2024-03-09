var http = require('http');
//var aku = require('http')
var server = http.createServer(function(req, res ){
    res.writeHead(200, {'content-Type': 'text/html'});
    res.end('haaloo');
}).listen(8080);
console.log('serever is running on http://locallhost:8000');