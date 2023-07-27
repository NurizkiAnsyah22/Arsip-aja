//template literal atau template string

// const nama = `Nurizki`;
// const umur = `25`;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);

//embeded expression

// console.log(`${1 + 1}`);
// console.log(`${alert(`Hallo!`)}`);

// const x = 10;
// console.log(`${x % 2 == 0 ? `genap` : `ganjil`}`);

//HTML PRAGMENTS

const mhs = {
  nama: `Nurizki`,
  umur: 25,
  npm: `06201940022`,
  email: `Nurizkiansyah02@gmail.com`,
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="npm">${mhs.npm}</span>
</div>`;

const container = document.getElementById("container");

container.innerHTML = el;


div