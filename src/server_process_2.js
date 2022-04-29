const { Server } = require("socket.io");
const { io } = require("socket.io-client");

const getArgs = require("./getArgs.js");
var port = getArgs().port;

var socket_process1 = null;
var socket_process3= null;

const openPorts = async function(){
  socket_process1 = new Server(port);
  socket_process3 = io(`ws://localhost:${port-4}`); //socket process fazendo apenas em um deles
  console.log(port);
}

const openProcess = async function() {
  socket_process1.on("connection", (socket) => {
    
    socket.emit("hello", "hello world");
    socket.on("howdy", (arg) => {
      console.log("numeros recebidos da conexao: " + socket.id);
      console.log("numeros: " + arg);
      socket_process3.emit(`process_3_${port-4}`, arg); //aqui se passa pro processo 3
      console.log();
    });
  });
}

openPorts();
openProcess();





