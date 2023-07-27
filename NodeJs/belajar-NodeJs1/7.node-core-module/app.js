//core module

//file system

// const { error } = require("console");
const fs = require("fs");

//menuliskan string ke file secara synchronous

// try {
//   fs.writeFileSync("data/test.txt", "Heloo World secara synchronous!");
// } catch (e) {
//   console.log(e);
// }

//menuliskan string ke file yang asynchronous

// fs.writeFile("data/test.txt", " halo world secara asynchronous", (error) => {
//   console.log(error);
// });

//membaca isi file secara synchronous

// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data.toString());

//membaca file asynchronous
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//read line

const readline = require("readline");
const { json } = require("stream/consumers");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Masukkan nama anda: ", (nama) => {
//   console.log(`Terima kasih, ${nama}`);

//   rl.question("Berapa umur anda: ", (umur) => {
//     console.log(`Ok, umur anda adalah ${umur} Tahun!`);
//     rl.close();
//   });
// });

rl.question("masukan nama anda :", (nama) => {
  rl.question("masukan nomor phone anda :", (nomor) => {
    const contact = { nama, nomor };

    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("terima kasih sudah masukan data");
    rl.close();
  });
});
