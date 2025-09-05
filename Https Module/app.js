const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>welcome  world!</h1>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>welcome to about</h1>");
  } else if (req.url == "/node") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>welcome to  node js project</h1>");
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Page not found</h1>");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log("server started at", port);
});
