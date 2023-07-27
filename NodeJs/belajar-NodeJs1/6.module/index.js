// const nama = "nurizki";
// const cetakNama = (nama) => `hai nama saya ${nama}`;
// console.log(cetakNama(nama));
// const fs = require("fs"); // core module
// const panggilCetakNama = require("./coba"); // local module
// const moment = require("moment"); //third party module // npm module// node_modules
// console.log(panggilCetakNama("nurizki"));

const coba = require("./coba");

// console.log(coba.cetakNama("nurizki"), coba.PI, coba.mahasiswa); //atau
console.log(coba.cetakNama("nurizki"), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
