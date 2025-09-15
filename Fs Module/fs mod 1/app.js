const http = require("http");
const fs = require("fs");
const { text } = require("stream/consumers");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
            <form action="/message" method="POST"> 
            <label>Name: </label>
            <input type="text" name="username"/>
            <button type="submit">Add </button>
            </form>
            `);
  } else if (req.url == "/message") {
    res.setHeader("Content-Type", "text/html");
    let data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => {
      let concatData = Buffer.concat(data).toString().split("=");

      fs.writeFile("fsmod.txt", concatData[1], (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
      //   console.log(concatData);
    });
  }
});

const port = 3000;

server.listen(port, () => {
  console.log("server running at http://localhost:3000/");
});
