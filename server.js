const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = req.url === "/" ? "./index.html" : `.${req.url}`;
  const ext = path.extname(filePath);
  let contentType;

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
    default:
      contentType = "text/html";
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.write(data);
    return res.end();
  });
});

server.listen(30000, () => {
  console.log("Server running at http://localhost:30000/");
});
