const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));

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
  const contacts = loadContact();
  console.log(contacts);
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "contact",
    contacts: contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail contact",
    contact: contact,
  });
});
app.use("/", (req, res) => {
  res.status(404);
  res.render("404", {
    layout: "layouts/main-layout",
    title: "404",
  });
});
app.listen(port, () => {
  console.log(`Server Berjalan on port ${port}`);
});
