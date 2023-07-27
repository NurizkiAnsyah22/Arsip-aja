// // tambah penumpang ()
// - nama pengumpang
//     - array pengumpang

//     - rules :
//     jika angkot kosong, penumpang naik duduk di kursi utama
//     penumpang berikutnya duduk dikursi selanjutnya secara berurutan
//     jika ada kursi kosong(karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
//     asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang yang akan naik
//     nama penumpang tidak boleh sama, untuk menghindari kebingungan.

var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    //jika angkot kosong
    penumpang.push(namaPenumpang); //tambah penumpang di awal array
    return penumpang; //kembalikan isi array dan keluar dari funciton
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      //terlurusi seluruh kursi dari awal
      if (penumpang[i] == undefined) {
        //jika ada kursi kosong
        penumpang[i] = namaPenumpang; //tambah penumpang di kursi tersebut
        return penumpang; //kembalikan isi array dan keluar dari funtion
      } else if (penumpang[i] == namaPenumpang) {
        //jika sudah ada nama yang sama
        console.log(namaPenumpang + "sudah ada di dalam angkot"); //tampilkan pesan kesalahnya
        return penumpang; //kembalikan isi array dan keluar dari function
      } else if (i == penumpang.length - 1) {
        //jika seluruh kursi terisi
        penumpang.push(namaPenumpang); //tambah penumpang di akhir array
        return penumpang; //kembalikan isi array dan keluar dari function
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) { //jika angkot kosong
    console.log("angkot masih kosong"); // tampilakn pesan angkot kosogng
  } else {
    for (var i = 0; i < penumpang.length; i++) { // telusuri seluruh kursi dri awal
      if (penumpang[i] == namaPenumpang) { //jika nama penumpang sesuai
        penumpang[i] = undefined; //hapus penumpang dan ubah jadi undefined
      } else if (i == penumpang.length - 1) { //jika tidak ada nama yang sesuai
        console.log(namaPenumpang + "tidak ada di dalam angkot"); //tampilkanpesan kesalahan
        return penumpang;
      }
    }
  }
};
