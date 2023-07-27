const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts } = require("./utils/contacts");
const { body, validationResult, check } = require("express-validator");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public")); //build in middleware
app.use(express.urlencoded({ extended: true }));

//konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());

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
    msg: req.flash("msg"),
  });
});

//halaman form tambah data contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Tambah data contact",
    layout: "layouts/main-layout",
  });
});

//proses data contact
app.post("/contact", [
  body("nama").custom((value) => {
    const duplikat = cekDuplikat(value);
    if (duplikat) {
      throw new Error("Nama sudah terdaftar!");
    }
    return true;
  }),
  check("email", "email tidak valid!").isEmail(),
  check("noHp", "No hp tidak valid").isMobilePhone("id-ID"),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-contact", {
        title: "form tambah data contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      //kirimkan flash message
      req.flash("msg", "Data kontak berhasil di tambahkan!");
      res.redirect("/contact");
    }
  },
]);

//proses delete contact
app.get("/contact/delete/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  //jika contact tidak ada
  if (!contact) {
    res.status(404);
    res.send("Error 404");
  } else {
    deleteContact(req.params.nama);
    req.flash("msg", "Data kontak berhasil di Hapus!");
    res.redirect("/contact");
  }
});

//form edit contact
app.get("/contact/edit/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("edit-contact", {
    title: "ubah data contact",
    layout: "layouts/main-layout",
    contact: contact,
  });
});

//proses ubah data
app.post("/contact/update", [
  body("nama").custom((value, { req }) => {
    const duplikat = cekDuplikat(value);
    if (value !== req.body.oldNama && duplikat) {
      throw new Error("Nama sudah terdaftar!");
    }
    return true;
  }),
  check("email", "email tidak valid!").isEmail(),
  check("noHp", "No hp tidak valid").isMobilePhone("id-ID"),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("edit-contact", {
        title: "form ubah data contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
        contact: req.body,
      });
    } else {
      updateContacts(req.body);
      //kirimkan flash message
      req.flash("msg", "Data kontak berhasil di ubah!");
      res.redirect("/contact");
    }
  },
]);
//halaman detail contact
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
