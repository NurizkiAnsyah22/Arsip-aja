const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// }); //gakepake lagi

//membuat folder data
const dirPatch = "./data";
if (!fs.existsSync(dirPatch)) {
  fs.mkdirSync(dirPatch);
}

//membuat file contact json jika belum ada

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };
  // const file = fs.readFileSync("data/contacts.json", "utf-8");
  // const contacts = JSON.parse(file);
  const contacts = loadContact();

  //cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(chalk.red.inverse.bold("nama contact sudah terdaftar! silahkan gunakan nama lain"));
    return false;
  }

  //cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("email tidak valid!"));
      return false;
    }
  }

  //cek no hp
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.red.inverse.bold("No Hp tidak valid!"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold("terima kasih sudah masukan data"));
  // rl.close(); //gakepake lagi
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.blue.inverse.bold("Daftar Kontak :"));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`);
  });
};
const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

  if (!contact) {
    console.log(chalk.red.inverse.bold(`Nama kontak ( ${nama}) : tidak ditemukan!`));
    return false;
  }
  console.log(chalk.yellow.inverse.bold(contact.nama));
  console.log(contact.noHp);
  if (contact.email) {
    console.log(contact.email);
  }
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }
  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));

  console.log(chalk.blueBright.inverse.bold(`data contact ${nama} berhasil di hapus`));
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
