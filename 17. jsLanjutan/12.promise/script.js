//promise
//obejct yang merepresentasikan keberhasilan dan kegagalan sebuah event yang asynchronous yang akan terjadi di masa yang akan datang

//janji (terpenuhi / ingkar)
//states (full filled / reject / pending)
// callback ( resolve / reject/ finally)
// aksi( than / catch)

//contoh
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji di tepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// janji1.then((response) => console.log("ok :" + response)).catch((response) => console.log("No its :" + response));

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji di tepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// janji1.then((response) => console.log("ok :" + response)).catch((response) => console.log("No its :" + response));

//contoh 2

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("janji di tepati");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("kamu inkar");
//     }, 2000);
//   }
// });
// console.log("mulai");
// // console.log(janji2.then((Response) => console.log("OK:" + Response)));
// // console.log(janji2.catch((response) => console.log("Ok :" + response)));
// janji2
//   .finally(() => console.log("selesai menunggu"))
//     .then((response) => console.log("ok! :" + response))
//   .catch((response) => console.log("Not ok! :" + response));
// console.log("selesai");

// -------------------------------------------------------------------------
//promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      judul: "avenger",
      sutradara: "rizki",
      pemeran: "ansyah,nanda",
    });
  }, 2000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "jakarta",
        temperatur: 25,
        cuaca: "cerah",
      },
    ]);
  }, 1000);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));
//jalanin di atas sekaligus
Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  //pake spread operator biar array terpisah
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
