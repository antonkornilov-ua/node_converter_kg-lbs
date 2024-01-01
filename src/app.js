const http = require('http');
const url = require('url');
const converter = require('./converter');

const serverFunc = (req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    let respText = 'idk';
    


    switch (pathname) {
        case '/converter': {
            respText = converter(query.value, query.to);
            break;
        }
    }
    res.end(String(respText));
};

const app = http.createServer(serverFunc);

module.exports = app;
