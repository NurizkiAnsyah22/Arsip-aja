const http = require("http");
const port = 3000;
const fs = require("fs");
const path = require("path");

const renderHtml = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("error");
    } else {
      res.write(data);
    }
    res.end();
  });
};
http
  .createServer((req, res) => {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const url = req.url;

    switch (url) {
      case "/about":
        renderHtml("./about.html", res);
        break;
      case "/contact":
        renderHtml("./contact.html", res);
        break;
      default:
        renderHtml("./index.html", res);
    }
    // if (url === "/about") {
    //   fs.readFile("./about.html", (err, data) => {
    //     if (err) {
    //       res.write(404);
    //       res.write("halaman Error");
    //     } else {
    //       res.write(data);
    //     }
    //     res.end();
    //   });
    // } else if (url === "/contact") {
    //   res.write(`<h1> ini adalah halaman contact </h1>`);
    //   res.end();
    // } else {
    //   //   res.write(`Hello World!`);
    //   fs.readFile("./index.html", (err, data) => {
    //     if (err) {
    //       res.write(404);
    //       res.write("halaman Error");
    //     } else {
    //       res.write(data);
    //     }
    //     res.end();
    //   });
    // }
  })
  .listen(3000, () => {
    console.log(`server is lintening on port ${port}...`);
  });
