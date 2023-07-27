//latihan membaca logika di bawah secara otodidak bersama penjelasan yang di berikan

function outerFunction() {
  var outerVariable = 3; // Ubah nilai variabel outerVariable

  for (var i = 1; i < outerVariable; i++) {
    var innerVariable = i * 2;

    function innerFunction() {
      return innerVariable; // Mengembalikan nilai innerVariable
    }

    var hasilInner = innerFunction();
    console.log(hasilInner);
  }

  function tambah() {
    var hasil = 0;
    for (var j = 0; j < arguments.length; j++) {
      hasil += arguments[j];
    }
    return hasil;
  }

  var coba = tambah(1, 2, 3, 4, 5);
  console.log(coba);

  return "Nilai yang ingin Anda kembalikan";
}

var hasil = outerFunction();
console.log(hasil);
