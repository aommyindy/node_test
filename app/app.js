const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('yes you can\n')
}).listen(8000)

console.log('Server start!! prot 8000')