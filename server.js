const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 32003;

const Server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("server is running....");
});

Server.listen(PORT, "0.0.0.0", ()=> {
  console.log(`Server started`)
});