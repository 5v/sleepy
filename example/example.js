const http = require('http');
const sleepy = require('../sleepy');

const PORT = 3000;

function handler(req, res) {
    sleepy.sync(1000);
    res.end('This used to return waaay too quickly!\n');
}

const server = http.createServer(handler);
server.listen(PORT, () => {
    console.log('Listening on %s', PORT);
});
