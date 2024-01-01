const http = require('http');
const url = require('url');

const serverFunc = (req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    switch (pathname) {
        case '/pathname': {
            
            break;
        }
    }
    res.end('Hello');
};

const app = http.createServer(serverFunc);

module.exports = app;
