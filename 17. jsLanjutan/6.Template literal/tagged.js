//tagged template

// const nama = "Nurizkiansyah";
// const umur = 25;

// function coba(strings, ...values) {
//   //   let result = ``;
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result;

//   //code di atas bisa di singkat pakai pakai reduce

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }

// const str = coba`Halo nama saya ${nama}, Dan umur saya ${umur} Tahun`;
// console.log(str);

const nama = "Nurizkiansyah";
const umur = 25;
const email = `Nurizkiansyah@gmail.com`;

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Halo nama saya ${nama}, Dan umur saya ${umur} Tahun, Dan Email saya adalah ${email}.`;

document.body.innerHTML = str;
