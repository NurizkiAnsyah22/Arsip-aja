//2.1. EXECUTION CONTECT, HOISTING,scope

// console.log(nama);
// var nama = "Nurizki";
//cretion phase pada global context
//nama var = undefined
//nama function = fn()
//hoisting

//windows=global object
//this = windows

//execution phase

// var nama = "nurizki";
// var umur = 25;
// console.log(sayHello());
// function sayHello() {
//   console.log("Halo, nama saya ${nama}, saya ${umur} tahun.");
// }
// console.log(sayHello());
// var nama = "nurizki";
// var umur = 25;

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

//function membuat local execution context
//yang di dalamnya terdapat creation dan execution phase
//window
//arguments
//hoisting

// var nama = "Nurizki";
// var username = "@ryzphp";
// function cetakUrl(username) {
//   var instagramUrl = "http://instagram.com/";
//   return instagramUrl + username;
// }
// console.log(cetakUrl(username));

// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");
//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

function satu() {
  var nama = "Nurizki";
  console.log(nama);
}
function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Ansyah";
satu();
dua("ananda");
console.log(nama);
