const os = require("os");

console.log(os.cpus());
console.log(os.freemem() / 1024 / 1024);
