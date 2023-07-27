// // 1. destructuring array

// const perkenalan = ["Halo", "nama", "saya", "nurizki"];

// // const [salam, satu, dua, nama] = perkenalan;
// //skip string variabel nama dan saya
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//swap item / menukar isi array

// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//2. return value pada function

// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);
// console.log(b);

//3. rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

//4. destructuring object

// const mhs = {
//   nama: " Nurizkiansyah",
//   umur: 25,
// };
// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);

//5.assigmnet tanpa deklarasi object
// ({ nama, umur } = { nama: "nurizkiansyah", umur: 25 });
// console.log(nama);
// console.log(umur);

//6. assigment ke variabel baru
// const mhs = {
//   nama: "Nurizkiansyah",
//   umur: 25,
// };
// const { nama: n, umur: u } = mhs;
// console.log(n);

//7. memberikan default value

// const mhs = {
//   nama: "Nurizkiansyah",
//   umur: 25,
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

//8.memberi nilai default dan assigment ke variabel baru
// const mhs = {
//   nama: "Nurizkiansyah",
//   umur: 25,
//   email: "nurizkiansyah@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);
// console.log(n);

//9. Rest parameter

// const mhs = {
//   nama: "Nurizkiansyah",
//   umur: 25,
//   email: "nurizkiansyah@gmail.com",
// };

// const { nama, ...bebas } = mhs; //bebas = namain bebas
// console.log(nama); // string nama Nurizkiansyah
// console.log(bebas); // object
// console.log(bebas.umur); // memunculkan umur dalam object bebas

//10. mengambil field pada object, setelah dikirim sebagai parameter untuk function

// const mhs = {
//   id: 123,
//   nama: "Nurizkiansyah",
//   umur: 25,
//   email: "nurizkiansyah@gmail.com",
// };

// function getIdMhs(mhs) {
//   return mhs.id;
// }

// console.log(getIdMhs(mhs));
const mhs = {
  id: 123,
  nama: "Nurizkiansyah",
  umur: 25,
  email: "nurizkiansyah@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
