// // rest parameter

// function myFunc(...myArgs) {
//   //   return ` a =${a}, b=${b}, myArgs=${myArgs}`;
//   return myArgs;
// }

// function myFunc() {
//   //   return ` a =${a}, b=${b}, myArgs=${myArgs}`;
//   // return myArgs;
//   //   return Array.from(arguments);
//   return [...arguments];

// // silahkan pilih sama aja return nya
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//     //   let total = 0;
//     //   for (t of angka) {
//     //     total += t;
//     //   }
//     //   return total;
//     // }
//     //bisa di ringkas denganr reduce
//     return angka.reduce((a, b) => a + b);
// }
//     console.log(jumlahkan(1,2,3,4,5))

// //2. array destucturing
// const kelompok1 = ["Nurizki", "ansyah", "putri", "ananda", "ramadansyah"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// // 3.object destructuring
// const team = {
//   pm: "Nurizki",
//   fe: "Ansyah",
//   be: "putri",
//   devOps: "Ananda",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);
// console.log(pm);

// 4. filter
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("boolean", 1, 2, "nurizki", false, 10, true, "Ansyah"));
console.log(filterBy("string", 1, 2, "nurizki", false, 10, true, "Ansyah"));
console.log(filterBy("number", 1, 2, "nurizki", false, 10, true, "Ansyah"));
