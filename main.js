var Server = require("./server.js");

let DEBUG = process.env.DEBUG || true;
let PORT = process.env.PORT || 8081;
let HOST = process.env.HOST || "0.0.0.0";
let instance;
if (DEBUG){
  instance = new Server(HOST, PORT, null);
} else {
  instance = new Server(HOST, PORT, process.env.TRACKING_ID || null);
}
instance.start();
