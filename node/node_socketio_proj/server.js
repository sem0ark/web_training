const path = require("path");
const http = require("http");

const express = require("express");
const socketio = require("socket.io");

const { formatMsg } = require("./utils/messages");
const { getCurrentUser, userJoin, userLeave, getRoomUsers } = require("./users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const botName = "ChatCore bot";

// Run when client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);

    // Broadcast when user connects
    socket.broadcast
      .to(user.room)
      .emit("msg", formatMsg(botName, `${user.username} has joined the chat`));
    
      // Send user and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  
  });

  // runs when client disconnect
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    
    io.to(user.room).emit(
      "msg",
      formatMsg(botName, `${user.username} has left the chat`)
    );

    // Send user and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  socket.on("chatMsg", (msg) => {
    io.to(user.room).emit("msg", formatMsg(user.username, msg));
  });
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
