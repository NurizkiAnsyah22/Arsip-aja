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

// const methodMahasiswa = {
//     makan: function (porsi) {
//       this.energi += porsi;
//       console.log("halo $(this.nama), selamat makan!");
//     },
//     main: function (jam) {
//       this.energi -= jam;
//       console.log("Halo $(this.nama), selamat bermain");
//     },
//     tidur: function (jam) {
//       this.energi += jam * 2;
//       console.log("Halo $(this.nama), selamat tidur");
//     },
//   };
//   function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
//   }

//   let Nurizki = Mahasiswa("Nurizki", 10);
//   let Ansyah = Mahasiswa("Ansyah", 20);

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return "Halo $(this.nama), selamat makan";
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return "halo $(this.nama), Selamat main";
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return "Halo $(this.nama), selamat tidur";
// };

// let Nurizki = new Mahasiswa("Nurizki", 10);

// versi class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan = function (porsi) {
//     this.energi += porsi;
//     return "Halo $(this.nama), selamat makan";
//   };
//   main = function (jam) {
//     this.energi -= jam;
//     return "halo $(this.nama), Selamat main";
//   };
//   tidur = function (jam) {
//     this.energi += jam * 2;
//     return "Halo $(this.nama), selamat tidur";
//   };
// }

// let nurizki = new Mahasiswa("Nurizki", 10);
// let ansyah = new Mahasiswa("ansyah", 15);

let angka = [1, 2, 3];
console.log(angka);

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
