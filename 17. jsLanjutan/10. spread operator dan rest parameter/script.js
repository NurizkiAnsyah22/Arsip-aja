//spread operator
// { memecah iterabel menjadi single element}

// const mhs = ["nurizki", "ansyah", "ananda"];

// console.log(...mhs); // ... sebagai pemecah isi array mhs
// console.log(...mhs[0]); // pemecah single aray (string) yang sudah di pecah

//menggabungkan 2 array atau lebih
// const mhs = ["nurizki", "ansyah", "ananda"];
// const dosen = ["Putri", "rama", "dansyah"];
// const orang = [...mhs, ...dosen]; // atau
// // const orang = mhs.concat(dosen);
// console.log(orang);

//mengcopy array

// const mhs = ["nurizki", "ansyah", "ananda"];
// const mhs1 = [...mhs];
// mhs1[0] = "japar";
// console.log(mhs1);
// console.log(mhs);

// const liMhs = document.querySelectorAll("li");
// console.log(liMhs[0].textContent); // nurizki

// const liMhs = document.querySelectorAll("li");
// //pake for looping biasa / manual
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

//permudah dengan hire order funtion
// const liMhs = document.querySelectorAll("li");
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
