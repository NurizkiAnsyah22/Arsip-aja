//destucturing function
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah);
// console.log(kali);

//di atas ribet ,makanya gunakan destructuring d bawah ini

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

//kasus berikutnya return value nya nambah
// const [jumlah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);
// console.log(kurang);

//dengan destucturing object

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { kurang, bagi, tambah, kali } = kalkulasi(2, 3);
// console.log(kali);

//Destucturing function arguments

// const mhs1 = {
//   nama: "Nurizkiansyah",
//   umur: 25,
//   email: "Nurizkiansyah02@gmail.com",
// };

// function cetakMhs(nama, umur) {
//   return `Halo nama saya ${nama}, dan umur saya ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

//cara yang lain
// const mhs1 = {
//   nama: "Nurizkiansyah",
//   umur: 25,
//   email: "Nurizkiansyah02@gmail.com",
// };

// function cetakMhs(mhs) {
//   return `Halo nama saya ${mhs.nama}, dan umur saya ${mhs.umur} tahun`;
// }
// console.log(cetakMhs(mhs1));

//bersarang lebih kompleks

const mhs1 = {
  nama: "Nurizkiansyah",
  umur: 25,
  email: "Nurizkiansyah02@gmail.com",
  nilai: {
    tugas: 90,
    uts: 85,
    uas: 80,
  },
};
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo nama saya ${nama}, dan umur saya ${umur} tahun , dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
