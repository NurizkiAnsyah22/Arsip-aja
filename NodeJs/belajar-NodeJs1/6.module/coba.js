function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "ansyah",
  umur: 25,
  cetakMhs() {
    return ` hal0, nama saya ${this.nama} , dan umur saya ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("objeck orang telah dibuat");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

//--dibuat dengan satu exports

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

//--lebih singkat

module.exports = { cetakNama, PI, mahasiswa, Orang };
