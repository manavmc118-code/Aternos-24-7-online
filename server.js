const http = require("http");
const fs = require("fs");

// Railway પોતે PORT પર્યાવરણ ચલ (Environment Variable) આપશે
const PORT = process.env.PORT || 30021;

const Server = http.createServer((req, res) => {
  res.end("server started");
});

Server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
