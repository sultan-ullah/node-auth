const net = require('net');
const port = 5000;
const hostname = '127.0.0.1';
const socketEventHandler = require('./socket');

const socket = net.createConnection(port, hostname, () => {
    process.stdout.write('Client connected, write a message to the server!\n');
    
    process.stdout.write('Client: ');
    process.stdin.on('data', data => {
        socket.write(data);
    });
});

const socketEvents = ['data', 'error', 'close', 'end'];
socketEvents.forEach(item => {
    socket.addListener(item, socketEventHandler.client[item])
});


