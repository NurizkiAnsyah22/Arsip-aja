const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

const mahasiswa = [
  {
    nama: "NurizkiANsyah",
    email: "Nurizki@gmail.com",
  },
  {
    nama: "Putri",
    email: "Putri@gmail.com",
  },
  {
    nama: "Ananda",
    email: "Ananda@gmail.com",
  },
];

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  res.render("index", {
    nama: "Nurizki",
    mahasiswa: mahasiswa,
    layout: "layouts/main-layout",
    title: "Home",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "about",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", { layout: "layouts/main-layout", title: "contact" });
});

app.get("/product/:id", (req, res) => {
  res.send(`Produk ID : ${req.params.id} <br> Category ID : ${req.query.categori}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.render("404");
});

app.listen(port, () => {
  console.log(`Server Berjalan on port ${port}`);
});
