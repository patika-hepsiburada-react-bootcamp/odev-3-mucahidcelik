const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.end('realtime colors app');
});

const votes = {
};

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit('new-vote', votes);

    socket.on('new-vote', (vote) => {
        console.log('New Vote:', vote);
        if (votes[vote]) {
            votes[vote] += 1;
        } else {
            votes[vote] = 1;
        }
        io.emit('new-vote', votes);
    });

    socket.on('disconnect', () => console.log('a user disconnected'));
});

server.listen(80, () => {
    console.log('listening on *:80');
});