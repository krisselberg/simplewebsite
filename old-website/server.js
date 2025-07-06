const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use((req, res, next) => {
  const filePath = req.path === "/" ? "./index.html" : `.${req.path}`;
  const ext = path.extname(filePath);
  let contentType;

  switch (ext) {
    case ".pdf":
      contentType = "application/pdf";
      break;
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
      res.status(404).type("text/html").send("404 Not Found");
    } else {
      res.status(200).type(contentType).send(data);
    }
  });
});

app.listen(30000, () => {
  console.log("Server running at http://localhost:30000/");
});
