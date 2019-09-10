const net = require('net');
const port = 5000;
const hostname = '127.0.0.1';
const socketEventHandler = require('./socket');

const server = net.createServer(socket => {
    process.stdout.write(`New connection for server\n`);
    
    process.stdin.on('data', data => {
        socket.write(data);
    });
    const socketEvents = ['data', 'error', 'close', 'end'];
    socketEvents.forEach(item => {
        socket.addListener(item, socketEventHandler.server[item])
    });
});

server.listen(port, hostname, () => console.log("Server is listening"));

