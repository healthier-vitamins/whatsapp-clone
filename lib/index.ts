import pingDb from "./loaders/dbConnection";
import express from "./loaders/express";
import http from "http";

require("dotenv").config();

// ================================================
// initialise database
// ================================================
pingDb();

// ================================================
// initialise express
// ================================================
express.init();

// ================================================
// to catch and handle errors thrown gracefully
// ================================================
process
  .on("unhandledRejection", (reason, promise) => {
    console.error(
      new Date().toLocaleString() + " " + reason,
      " unhandledRejection:",
      promise
    );
  })
  .on("uncaughtException", (err) => {
    console.error(
      new Date().toLocaleString() + " uncaughtException:",
      err.message
    );
    console.error(err.stack);
    process.exit(1);
  });

const app = express.getAppInstance();
const httpServer = http.createServer(app);

const ports = String(process.env.PORTS).split(";;");
let servers = <any>[];

// ================================================
// for each port set in env, to attach a server to it
// ================================================
for (let i = 0; i < ports.length; i++) {
  httpServer.listen(parseInt(ports[i]), () => {
    console.log(`Server is listening to port ${ports[i]}`);
  });
  servers.push(httpServer);
}

module.exports = servers;
