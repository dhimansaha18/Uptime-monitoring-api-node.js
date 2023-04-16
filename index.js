// dependencies
const http = require('http');

const { handleReqRes } = require('./helpers/handleReqRes');
// app object=module scaffolding

const app = {};

// configurations of app
app.config = { port: 3000 };
// server creation
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server is running on Port No.: ${app.config.port}`);
    });
};
// handling request & response
app.handleReqRes = handleReqRes;
// starting server
app.createServer();
