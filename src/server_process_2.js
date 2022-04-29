const { Server } = require("socket.io");
const { io } = require("socket.io-client");

const socket_process1 = new Server(3000);
const socket_process3 = io("ws://localhost:3001");

socket_process1.on("connection", (socket) => {
  socket.emit("hello", "hello world");

  socket.on("howdy", (arg) => {
    console.log("numeros recebidos da conexao: " + socket.id);
    console.log("numeros: " + arg);
    socket_process3.emit("process_3_3001", arg);
    console.log();
  });
});
