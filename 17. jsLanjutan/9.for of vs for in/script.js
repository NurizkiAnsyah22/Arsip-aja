//for of pake for biasanya

// const mhs = [`nurizki`, `ansyah`, `ananda`];
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i);
// }

//pake forEach lebih simple
// const mhs = [`nurizki`, `ansyah`, `ananda`];
// mhs.forEach((m) => console.log(m));

//pake for of
// const mhs = [`nurizki`, `ansyah`, `ananda`];
// for (m of mhs) {
//   console.log(m);
// }

//di atas adAlah beberapa cara untuk looping isi dari array,

//2. looping string tiap tiap karakter dari string
// const nama = `Nurizkiansyah`;
// for (n of nama) {
//   console.log(n);
// }

//pake forEach
// const mhs = [`nurizki`, `ansyah`, `ananda`];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa yang ke-${i + 1} `);
// });

//pake for of gabisa, tpi bisa di akalin dengan entries
// const mhs = [`nurizki`, `ansyah`, `ananda`];
// for ([i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa yang ke-${i + 1} `);
// }

//3.NodeList

// const liNama = document.querySelectorAll(`.nama`);

// // liNama.forEach((n) => console.log(n.textContent));
// //pake for of
// for (n of liNama) {
//   console.log(n.innerHTML); //fyi innerHTML dan textContent sama aja
// }

//4. arguments

// function jumlahkan() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

//5. for in

const mhs = {
  nama: `Nurizki`,
  umur: 25,
  email: `Nurizki@gmail.com`,
};
for (m in mhs) {
  console.log(m); // atau  console.log(mhs[m]);
}
