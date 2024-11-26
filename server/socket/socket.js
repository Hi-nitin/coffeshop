
const socketIo = require('socket.io');

const socket = (server) => {

  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],

    }
  });

  io.on('connection', (socket) => {
    console.log('A user connected');

 
    socket.on('me', () => {
      io.emit('neworderplaced')
    })
    // Handle client disconnect
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
}

module.exports = socket;