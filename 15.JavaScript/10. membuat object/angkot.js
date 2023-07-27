//membuat objek angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("angkot masih kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Nurizki", ["sukaraja", "kota"], [], 0);
var angkot2 = new Angkot("ansyah", ["kebonpedes", "cisaat"], [], 0);

// Kode JavaScript yang Anda berikan merupakan contoh implementasi objek "Angkot" dalam sebuah program. Saya akan menjelaskannya dalam bahasa yang sederhana dan mudah dipahami.

// Pada baris pertama, kita mendefinisikan fungsi "Angkot" yang akan digunakan untuk membuat objek angkot. Fungsi ini memiliki empat parameter: "sopir" (nama sopir angkot), "trayek" (rute atau trayek angkot), "penumpang" (daftar penumpang yang ada di angkot), dan "kas" (jumlah uang yang dikumpulkan oleh angkot).

// Selanjutnya, di dalam fungsi "Angkot", kita menggunakan "this" untuk menginisialisasi properti-properti objek angkot berdasarkan nilai-nilai parameter yang diberikan. Dengan kata lain, kita mengatur nilai "sopir", "trayek", "penumpang", dan "kas" untuk objek angkot yang akan dibuat.

// Setelah itu, terdapat dua metode di dalam objek angkot. Metode pertama adalah "penumpangNaik" yang digunakan untuk menambahkan penumpang baru ke dalam angkot. Fungsinya adalah menerima nama penumpang sebagai argumen, kemudian menambahkannya ke dalam daftar penumpang dan mengembalikan daftar penumpang yang telah diperbarui.

// Metode kedua adalah "penumpangTurun" yang digunakan untuk mengeluarkan penumpang dari angkot. Fungsinya adalah menerima nama penumpang dan jumlah uang bayar sebagai argumen. Pertama, kita periksa apakah angkot masih kosong atau tidak. Jika daftar penumpang kosong, maka akan muncul pesan "angkot masih kosong" dan fungsi ini akan mengembalikan false.

// Jika daftar penumpang tidak kosong, kita akan mencari penumpang dengan nama yang sesuai di dalam daftar penumpang. Jika penumpang ditemukan, kita mengubah nilainya menjadi "undefined" (artinya penumpang turun) dan menambahkan jumlah bayar ke dalam kas angkot. Terakhir, metode ini mengembalikan daftar penumpang yang telah diperbarui.

// Setelah kita mendefinisikan objek "Angkot" dan metodenya, kita membuat dua objek angkot baru dengan menggunakan kata kunci "new". Objek pertama disimpan dalam variabel "angkot1" dengan sopir "Nurizki" dan trayek ["sukaraja", "kota"]. Objek kedua disimpan dalam variabel "angkot2" dengan sopir "ansyah" dan trayek ["kebonpedes", "cisaat"]. Kedua objek angkot tersebut memiliki daftar penumpang awal yang kosong dan jumlah kas awal yang nol.

// Dengan menggunakan objek-objek angkot yang telah dibuat, Anda dapat menggunakan metode "penumpangNaik" dan "penumpangTurun" untuk memanipulasi daftar penumpang dan jumlah kas pada setiap objek angkot.

// Semoga penjelasan ini membantu Anda memahami kode JavaScript tersebut! Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk bertanya.
