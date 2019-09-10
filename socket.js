const emoji = require('node-emoji');

const socketEventHandlers =  {
    client: {
        data: (data) => {
            const msg = data.toString().trim();
            process.stdout.write(emoji.emojify(`Server: ${msg}\n`));
            process.stdout.write(`Client (me): `);
        },
        error: (err) => {
            console.log(`Client error: ${err}`);
        },
        close: (err) => {
            if (err) console.log('Client transmission error');
            console.log('Client closed');
        },
        end: () => {
            console.log('FIN packet received from Server');
        }
    },
    server: {
        data: (data) => {
            const msg = data.toString().trim();
            process.stdout.write(emoji.emojify(`Client: ${msg}\n`));
            process.stdout.write(`Server (me): `)
        },
        error: (err) => {
            console.log(`Server error: ${err}`);
        },
        close: (err) => {
            if (err) console.log('Server transmission error');
            console.log('Server closed');
        },
        end: () => {
            console.log('FIN packet sent to client');
        }
    }
};

module.exports = socketEventHandlers;