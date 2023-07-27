function tambah() {
  //tanpa parameter gapapa

  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var coba = tambah(1, 2, 3, 4, 5); //tambahkan angka di samping sesuai kebutuhan karena semua akan di kirimkan ke arguments.
console.log(coba);
