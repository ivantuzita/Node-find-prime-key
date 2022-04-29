const { Server } = require("socket.io");
const { io } = require("socket.io-client");

const pocess4 = new Server(3014);
console.log(`servidor 4 iniciado na porta 3014`);

pocess4.on("connection", (socket) => {

    socket.on(`process_4_3014`, (arg) => {

        console.log(arg);

    });

});