// function jumlahVolDuaKubus(a, b) {
//membuat function
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// return total; //menjalankan functio
// }
// alert(jumlahVolDuaKubus(8, 3));

//refactoring kode d atas jadi seperi ini

function jumlahVolDuaKubus(a, b) {
  return a * a * a + b * b * b;
}
alert(jumlahVolDuaKubus(8, 3));
