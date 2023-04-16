const url = require('url');
const { StringDecoder } = require('string_decoder');

const handler = {};

handler.handleReqRes = (req, res) => {
    // response handle
    // Parse the url
    const parsedUrl = url.parse(req.url, true);
    const { path } = parsedUrl;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
    });
    console.log(trimmedPath);
    console.log(path);
    console.log(parsedUrl);
    // response handle
    res.end('Hello node.js!!!');
};

module.exports = handler;
