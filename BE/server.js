const http = require("http");
const router = require("./server/routes/api");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });

  router.register(req, res);
});
server.listen(3001);
