//callback
//1. synchronous callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilPesan(callback) {
//   const nama = prompt(`Masukan nama :`);
//   callback(nama);
// }
// tampilPesan(halo);

//1.1 code di atas bisa di singkat menjadi
// function tampilPesan(callback) {
//     const nama = prompt(`Masukan nama :`);
//     callback(nama);
//   }
//   tampilPesan((nama) => alert(`Halo,${nama}`S));

// const mhs = [
//   {
//     nama: `nurizki`,
//     npm: `0620940200`,
//     jurusan: `si`,
//     email: `nurizki@gmail.com`,
//     idDosen: `1`,
//   },
//   {
//     nama: `ansyah`,
//     npm: `0620940200`,
//     jurusan: `si`,
//     email: `nurizki@gmail.com`,
//     idDosen: `2`,
//   },

//   {
//     nama: `ananda`,
//     npm: `0620940200`,
//     jurusan: `si`,
//     email: `nurizki@gmail.com`,
//     idDosen: `3`,
//   },
// ];

// console.log(`mulai`);

// mhs.forEach((m) => {
//     for (let i = 0, i < 10000000; 1++) {
//         let date = new date();
//     }
//     console.log(m.nama)
// }

// console.log(`selesai`);

//2. asynchronous callback ( ubah kode di atas menjadi asynchronous)

// function getDataMhs(url, succes, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         succes(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open(`get`, url);
//   xhr.send();
// }
// // function succes() {} //pake anonymous function di bawah
// // function error() {}//pake anonymous function di bawah
// // getDataMhs(
// //   `json/mhs.json`,
// //   (results) => console.log(JSON.parse(results)), //call back succses
// //   () => {} //call back error
// // );
// //tampilkan nama saja

// console.log(`mulai`);
// getDataMhs(
//   `json/mhs.json`,
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log(`selesai`);

//pake JQuery
console.log("mulai");
$.ajax({
  url: "json/mhs.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {},
});
console.log("selesai");
