function jumlahVolDuaKubus(a, b) {
  //membuat function
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total; //menjalankan functio
}
alert(jumlahVolDuaKubus(8, 3));
alert(jumlahVolDuaKubus(10, 15)); //menampilkan function
