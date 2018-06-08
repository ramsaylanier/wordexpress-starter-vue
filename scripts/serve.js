const { spawn } = require("child_process");
const serve = spawn("npx", ["vue-cli-service", "serve"]);
const start = spawn("npm", ["run", "start"]);

const log = console.log;
const errAndExit = err => {
  console.log(err);
  process.exit(1);
};

serve.on("data", log);
serve.on("error", errAndExit);
serve.on("close", log);

start.on("data", log);
start.on("error", errAndExit);
start.on("close", log);
