console.log("contoh pertama");

var a = 1;
function test1(a) {
  console.log(a);
}
test1(2);
console.log(a);

console.log("------------------------------");

console.log("dibawah ini contoh lain");

var b = 1; // a global
function test2(b) {
  // var a local
  console.log(b); //console log a local
}
test2(b); // mengacu ke nilai a global =1
console.log(b); //console untuk var a global =1

//maka output di konsol adalah :
// contoh pertama
// 2
// 1
// ------------------------------
// dibawah ini contoh lain
// 1
// 1





