    const http = require('node:http');
    const fs = require('node:fs');

    const server = http.createServer((req, res) => {

        if (req.url === '/') {
            fs.readFile('index.html', (err, data) => {
                res.end(data);
            });
        } else if (req.url === '/about') {
            fs.readFile('about.html', (err, data) => {
                res.end(data);
            })
        } else if (req.url === '/contactme') {
            fs.readFile('contactme.html', (err, data) => {
                res.end(data);
            })
        } else {
            fs.readFile('404.html', (err, data) => {
                res.statusCode = 404;
                res.end(data);
            })
        }
        

    })
    server.listen(8080);