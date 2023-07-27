//dom manipulation

//nambah paragraf baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("paragraf baru");
//simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);
//simpan pBaru di akhir sesion a
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

//menambah item baru di urutan kedua

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector("section#b ul");
const li2 = document.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

//remove

const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("judul h2 baru!");

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'aqua';
liBaru.style.backgroundColor = 'aqua';
h2Baru.style.backgroundColor = 'aqua';