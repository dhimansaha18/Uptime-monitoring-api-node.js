// dependencies
const http = require('http');
const environment = require('./helpers/environments');
const { handleReqRes } = require('./helpers/handleReqRes');
const data = require('./lib/data');
// app object=module scaffolding

const app = {};

// configurations of app
// app.config = { port: 3000 };
data.delete('test', 'newFile', (err) => {
    console.log(err);
});
// server creation
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        // console.log(`Environment is: ${process.env.NODE_ENV}`);
        console.log(`Server is running on Port No.: ${environment.port}`);
    });
};
// handling request & response
app.handleReqRes = handleReqRes;
// starting server
app.createServer();
