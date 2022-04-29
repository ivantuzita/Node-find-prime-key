const { Server } = require("socket.io");
const { performance } = require("perf_hooks");
const { io } = require("socket.io-client");

const getArgs = require("./getArgs.js");



const isPrime = (number) => {
  if ((number % 2 === 0 && number !== 2) || number <= 1) {
    return false;
  }

  const limit = Math.floor(Math.sqrt(number));

  for (let index = 3; index <= limit; index += 2) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
};

var port = getArgs().port;

const pocess3 = new Server(port);
console.log(`servidor 3 iniciado na porta ${port}`);

socket_process4 = io(`ws://localhost:3014`);

var primeCounterPost = 0;
var primeCounterAnt = 0;

var nPost = 0;
var nAnt = 0;
//var primeCounter = 0;

pocess3.on("connection", (socket) => {
  //socket.emit("hello", "hello world");

  socket.on(`process_3_${port}`, (arg) => {
    var IN = arg[0];
    var N = arg[1];
    var startTime = performance.now();
    // console.log(performance.now());
    nPost = IN + 1;
    while (primeCounterAnt != N && primeCounterPost != N) {
      if (isPrime(nPost)) {
        primeCounterPost++;
      }

      if (isPrime(nAnt)) {
        primeCounterAnt++;
      }

      if (primeCounterPost != N) {
        nPost++;
      }
      if (primeCounterAnt != N) {
        nAnt--;
      }
    }

    nPost = nPost - 1;
    nAnt = IN - 1;

    var endTime = performance.now();

    console.log("numero gerado: " + nPost + "" + nAnt);
    console.log(endTime - startTime);
    console.log();

    socket_process4.emit(`process_4_3014`,  (nPost + "" + nAnt));
    
  });
  //socket.disconnect(); assim que fecha? retorna onde?
});

// const httpServer = createServer();
