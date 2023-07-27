// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}
const coba = cobaPromise();
coba.then(() => console.log(coba)).catch(() => console.log(coba));

// const coba = cobaPromise();
// console.log(coba);

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }
// cobaAsync();
