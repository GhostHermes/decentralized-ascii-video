const http = require('http'); 
const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();
const port = 3000; 

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',       
}
console.log("Serving static files from:", path.join(__dirname, 'frontend', 'src'));

app.use(express.static(path.join(__dirname, 'frontend', 'src'))); 
    
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'frontend', 'src', 'index.html');
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
         '.html': 'text/html',
         '.js': 'text/javascript',
         '.css': 'text/css',
         '.json': 'application/json',
         '.png': 'image/png',
         '.jpg': 'image/jpg',
         '.gif': 'image/gif',       
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end('Error loading ' + req.url);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});
console.log(path.join(__dirname, 'frontend', 'src'))

app.listen(port, () => { 
    console.log(`Server running at http://localhost:${port}/`);
});
