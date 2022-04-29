const child_process = require("child_process");

function openProcess() {
  for (var port = 3001; port < 3005; port++) {
    child_process.exec(
      `start cmd.exe /K node src/server_process_3.js --port=${port}`
    );
  }

  for (var port = 3005; port < 3009; port++) {
    child_process.exec(
      `start cmd.exe /K node src/server_process_2.js --port=${port}`
    );
  }

  for (var port = 3009; port < 3013; port++) {
    child_process.exec(
      `start cmd.exe /K node src/client_process_1.js --port=${port}`
    );
  }

  child_process.exec("start cmd.exe /K node src/server_process_4.js");
  //child_process.exec("start cmd.exe /K node src/client_process_1.js");
}

openProcess();
