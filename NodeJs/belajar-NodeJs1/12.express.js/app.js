//dengan expressJs

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile("./index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  // res.send("ini adalah about!");
  res.sendFile("./about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  // res.send("ini adalah contact!");
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  res.send(`Produk ID : ${req.params.id} <br> Category ID : ${req.query.categori}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.sendFile("./404.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server Berjalan on port ${port}`);
});

//tidak dengan expressJs

// const http = require("http");
// const port = 3000;
// const fs = require("fs");
// const path = require("path");

// const renderHtml = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("error");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };
// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "content-type": "text/html",
//     });
//     const url = req.url;

//     switch (url) {
//       case "/about":
//         renderHtml("./about.html", res);
//         break;
//       case "/contact":
//         renderHtml("./contact.html", res);
//         break;
//       default:
//         renderHtml("./index.html", res);
//     }
//     // if (url === "/about") {
//     //   fs.readFile("./about.html", (err, data) => {
//     //     if (err) {
//     //       res.write(404);
//     //       res.write("halaman Error");
//     //     } else {
//     //       res.write(data);
//     //     }
//     //     res.end();
//     //   });
//     // } else if (url === "/contact") {
//     //   res.write(`<h1> ini adalah halaman contact </h1>`);
//     //   res.end();
//     // } else {
//     //   //   res.write(`Hello World!`);
//     //   fs.readFile("./index.html", (err, data) => {
//     //     if (err) {
//     //       res.write(404);
//     //       res.write("halaman Error");
//     //     } else {
//     //       res.write(data);
//     //     }
//     //     res.end();
//     //   });
//     // }
//   })
//   .listen(3000, () => {
//     console.log(`server is lintening on port ${port}...`);
//   });
