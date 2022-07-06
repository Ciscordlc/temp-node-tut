console.log('stream example');

var http = require('http');
var fs  = require('fs');
const { Http2ServerRequest } = require('http2');

// Inefficient by potentially sending too large of files over to users in a single instance
// http.createServer(function (req, res) {
//     const text = fs.readFileSync('./content/big.txt', 'utf8');
//     res.end(text);
// }).listen(5000);

// Instead of sending files in one large instance, will send in chunks
http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', () => {
        // pipe() pushes readStream into writeStream
        fileStream.pipe(res);
    })
    fileStream.on('error', () => {
        res.end(err);
    })
}).listen(5000);