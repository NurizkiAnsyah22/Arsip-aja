// // //DOM selection
// // // document.getElementById() --> mengembalikan 1 element by id

// // const judul = document.getElementById("judul");
// // judul.style.color = "red";
// // judul.style.backgroundColor = "blue";
// // judul.innerHTML = "Nurizkiansyah";

// // //document.getElementsByTagName() --> HTMLCollections

// // const p = document.getElementsByTagName("p");

// // // p.style.backgroundColor = "aqua"; --> tidak bisa kaya gini

// // // p[2].style.backgroundColor = "aqua"; <--> untuk 1 p
// // //jika mau semua kaya di bawah ini pake looping
// // for (let i = 0; i < p.length; i++) {
// //   p[i].style.backgroundColor = "aqua";
// // }

// // const h1 = document.getElementsByTagName("h1")[0];
// // h1.style.fontSize = "50px";

// // //document.getELementByClassName --> HTMLCollections

// // // const p1 = document.getElementsByClassName("p1");
// // // p1[0].innerHTML = "ini di ubah dari javascript";
// // //sama ajaa kaya yang di atas
// // const p1 = document.getElementsByClassName("p1")[0];
// // p1.innerHTML = "ini di ubah dari javascript";

// //document.querySelector() --> 1 element
// const p4 = document.querySelector("#b p");
// p4.style.color = "blue";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "aqua";

// //document.querySelectorAll
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "red";
// }
// // p[2].style.backgroundColor = "red"; -> untuk 1 elemeent , yang di atas ini untuk semua element p dengan cara di looping

// const p4 = document.getElementsByTagName("p");
// p4[3].style.backgroundColor = "red";

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
p4.style.backgroundColor = "blue";
