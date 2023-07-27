// const tUbahWarna = document.getElementById("tUbahWarna");
// tUbahWarna.onclick = function () {
//   // document.body.style.backgroundColor = 'aqua';
//   // document.body.setAttribute('class', 'biru-muda');
//   document.body.classList.toggle("biru-muda");
// };

// const tAcakWarna = document.createElement("button");
// const teksTombol = document.createTextNode("Acak Warna");
// tAcakWarna.appendChild(teksTombol);
// tAcakWarna.setAttribute("type", "button");
// tUbahWarna.after(tAcakWarna);

// tAcakWarna.addEventListener("click", function () {
//   const r = Math.round(Math.random() * 255 + 1);
//   const g = Math.round(Math.random() * 255 + 1);
//   const b = Math.round(Math.random() * 255 + 1);
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + ", " + b + ")";
// });

// const sMerah = document.querySelector("input[name= sMerah]");
// const sHijau = document.querySelector("input[name= sHijau]");
// const sBiru = document.querySelector("input[name= sBiru]");

// sMerah.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// sHijau.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// sBiru.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// document.body.addEventListener("mousemove", function (event) {
//   // posisi mouse
//   //   console.log(event.clientY);
//   //ukuran browser
//   //
//   const xPos = Math.round((event.clientX / window.innerWidth) * 255);

//   const yPos = Math.round((event.clientY / window.innerHeight) * 255);
//   document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
// });



//refactoring code di atas
const tUbahWarna = document.getElementById("tUbahWarna");
const tAcakWarna = document.createElement("button");
const sMerah = document.querySelector("input[name= sMerah]");
const sHijau = document.querySelector("input[name= sHijau]");
const sBiru = document.querySelector("input[name= sBiru]");

tUbahWarna.addEventListener("click", function() {
  document.body.classList.toggle("biru-muda");
});

const acakWarna = () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
};

tAcakWarna.appendChild(document.createTextNode("Acak Warna"));
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);
tAcakWarna.addEventListener("click", acakWarna);

const updateBackground = () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
};

[sMerah, sHijau, sBiru].forEach(input => {
  input.addEventListener("input", updateBackground);
});

document.body.addEventListener("mousemove", function(event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
