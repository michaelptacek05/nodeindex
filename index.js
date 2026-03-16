const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {

    if (req.url === '/about') {
        res.end(fs.readFile('about.html'));
    }
    

})
server.listen(8080);