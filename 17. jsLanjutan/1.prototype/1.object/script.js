//cara untuk membuat object pada javascript

//1.object literal
// let mahasiswa1 = {
//   nama: "Nurizki",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };
// let mahasiswa2 = {
//     nama: "Ansyah",
//     energi: 20,
//     makan: function (porsi) {
//       this.energi = this.energi + porsi;
//       console.log(`Halo ${this.nama}, selamat makan!`);
//     },
// };

//2. function declaration

const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log("halo $(this.nama), selamat makan!");
  },
  main: function (jam) {
    this.energi -= jam;
    console.log("Halo $(this.nama), selamat bermain");
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log("Halo $(this.nama), selamat tidur");
  },
};
function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let Nurizki = Mahasiswa("Nurizki", 10);
let Ansyah = Mahasiswa("Ansyah", 20);

//3. constructor function
//keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log("halo $(this.nama), selamat makan!");
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log("Halo $(this.nama), selamat bermain");
//   };
// }
// let nurizki = new Mahasiswa("Nurizki", 10);

//4. object.create
