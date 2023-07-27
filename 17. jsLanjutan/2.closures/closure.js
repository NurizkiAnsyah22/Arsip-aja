// function init() {
//   //   let nama = "Nurizki";
//   return function (nama) {
//     console.log(nama);
//   };
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("urizki");
// panggilNama("Ansyah");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama} , Selamat ${waktu} , Semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("Nurizki");
// selamatMalam("Ansyah");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
counter = 100;
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
