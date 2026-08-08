const http = require("http");
const fs = require("fs");

// Railway આપોઆપ PORT સેટ કરશે, ન મળે તો જ 30021 લેશે
const PORT = process.env.PORT || 30021;

const Server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("server started");
});

// "0.0.0.0" લખવું જરૂરી છે જેથી Railway બહારથી આવતી Request સાંભળી શકે
Server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
