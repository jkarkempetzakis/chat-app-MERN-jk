import { Server } from 'socket.io'
import http from 'http';
import express from 'express'

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

//returns the socket id from the map by passing the user id
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

//getting online users
const userSocketMap = {}; //{userId:socketId}

io.on('connection', (socket) => {
    console.log('a user has connected', socket.id)
    const userId = socket.handshake.query.userId; // getting the userId from the connected socket
    if (userId != "undefined") userSocketMap[userId] = socket.id;
    //since the socket map was updated, send event to all connected clients\
    //whenever a user connects this event will be fired to fetch the online/offline users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})









export { app, io, server }