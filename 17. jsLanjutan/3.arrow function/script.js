// //function expresion
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Nurizki"));

//arrow function
// const tampilNama = (nama) => {
//   return `halo, ${nama}`;
// };
// console.log("Nurizki Ansyah");

//parameter lebih dari satu
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Nurizki", "Malam"));

//parameter satu gaperlu pake kurung
// const tampilNama = nama => {
//       return `halo, ${nama}`;
//     };
// console.log("Nurizki Ansyah");

//inplisit return / gaperlu tulis return kalau isinya ringkas
// const tampilNama = nama => `halo, ${nama}`;
//     console.log("Nurizki Ansyah");

//tanpa paramater wajib ()
// const tampilNama = () => `Hello world!`;
// console.log(tampilNama());

//

// let mahasiswa = ["Nurizki i", "ansyah", "putri ananda"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

//versi arrow function
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

//mengembalikan dalam bentuk objeck bykan array
// let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jumlahHuruf: nama.length }));
// console.table(jumlahHuruf);

//konsep this pada arrow function
//contructor function
// const Mahasiswa = function () {
//   this.nama = "Nurizki";
//   this.umur = 25;
//   this.sayHello = function () {
//     console.log(`Halo Saya ${this.nama}, dan saya saya ${this.umur} tahun.`);
//   };
// };
// const nurizki = new Mahasiswa();

//ubah di atas menjadi arrow function
// const Mahasiswa = function () {
//   this.nama = "Nurizki";
//   this.umur = 25;
//   this.sayHello = () => {
//     console.log(`Halo Saya ${this.nama}, dan saya saya ${this.umur} tahun.`);
//   };
// };
// const nurizki = new Mahasiswa();

//pake buat object literal
// const mhs1 = {
//   nama: "Nurizki",
//   umur: "25",
//   sayHello: function () {
//     console.log(`Halo Saya ${this.nama}, dan saya saya ${this.umur} tahun.`);
//   },
// };

//jadi undifined
// const mhs1 = {
//   nama: "Nurizki",
//   umur: "25",
//   sayHello: () => {
//     //   console.log(`Halo Saya ${this.nama}, dan saya saya ${this.umur} tahun.`);
//     console.log(this);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "Nurizki";
//   this.umur = 25;
//   this.sayHello = function () {
//     console.log(`Halo Saya ${this.nama}, dan saya saya ${this.umur} tahun.`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const nurizki = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
