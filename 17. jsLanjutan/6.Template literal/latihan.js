//1. html fragments

// const mhs = {
//   nama: "Nurizkiansyah",
//   npm: 06201940022,
//   umur: 25,
//   email: "Nurizkiansyah02@gmail.com",
// };

// const el = ` <div class="mhs">
// <h2 class="nama">${mhs.nama}</h2>
// <span class="npm">${mhs.npm}</span>
// </div>`;

//2. looping

// const mhs = [
//   { nama: "Nurizki", email: "nurizki@gmail.com" },
//   {
//     nama: "Ansyah",
//     email: "Ansyah@gmai.com",
//   },
//   {
//     nama: "Putri",
//     email: "Putri@gmail.com",
//   },
// ];

// const el = ` <div class="mhs">
// ${mhs
//   .map(
//     (m) => `<ul>
//   <li>${m.nama}</li>
//   <li>${m.email}</li>
//   </ul >`
//   )
//   .join("")}
// </div>
// `;

// document.body.innerHTML = el;

//3. Conditional

// const lagu = {
//   judul: `cinta pertama`,
//   Band: `Dewa`,
//   feat: `Ariel`,
// };

// const el = ` <div class="lagu">
//     <ul>
//       <li>${lagu.judul}</li>
//       <li>${lagu.Band} (feat. ${lagu.feat})</li>
//     </ul>
//   </div>`;
// document.body.innerHTML = el;

//kasih pengkodisian biar object feat di atas tidak undefined
// const lagu = {
//   judul: `cinta pertama`,
//   Band: `Dewa`,

// };

// const el = ` <div class="lagu">
//       <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.Band} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//       </ul>
//     </div>`;
// document.body.innerHTML = el;

//4. Nested
//html fragments bersarang

const mhs = {
  nama: `Nurizkiansyah`,
  semeter: 8,
  mataKuliah: [`web php`, `analisis sistem`, `Seminar`, `Skripsi akhir`],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
    ${mataKuliah.map((mk) => ` <li>${mk}</li>`).join("")}
    </ol>`;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="smester">Semester : ${mhs.semeter}</span>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
