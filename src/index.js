const child_process = require("child_process");

function openProcess() {
  for (var port = 3001; port < 3006; port++) {
    child_process.exec(
      `start cmd.exe /K node src/server_process_3.js --port=${port}`
    );
  }

  child_process.exec("start cmd.exe /K node src/server_process_2.js");
  child_process.exec("start cmd.exe /K node src/client_process_1.js");
}

openProcess();
