//manipulasi array

//1. menambah isi array
// var arr = ['a', 1, true];
// console.log(arr);

// console.log('-------------------');  //hanya tanda
// console.log('contoh var aray kosong'); //hanya tanda

// var arr1 = [];
// arr1[0] = 'nurizki';
// arr1[1] = 'ansyah';
// arr1[2] = 'ananda';

// //2.menghapus isi array
// var arr = ["nurizki", "ananda", "ansyah"];
// arr[1] = undefined; // output index 1(ananda) berubah jadi undefined karena di manipulasi oleh ini
// console.log(arr);

//3. menampilkan isi array

// var arr = ['nurizki', 'ansyah', 'ananda'];

// for (var i = 0; i < 3; i++) {
//     console.log(arr[i]);
// }

// var arr = ["nurizki", "ansyah", "ananda"];

// for (var i = 0; i < 3; i++) {
//   console.log("mahasiswa ke-" + i + ":" + arr[i]);
// }

// var arr = ["nurizki", "ansyah", "ananda",'putri','ramadansyah'];

// for (var i = 0; i < arr.length; i++) {
//   console.log("mahasiswa ke-" + i + ":" + arr[i]);
// }

//method pada array
//1.join = menggabungkan seluruh isi array dan mengubahnya menjadi setring

//  var arr = ['nurizki', 'ansyah','ganteng'];
// console.log(arr.join('-')); // - bisa di ganti sebagai pemisah isi array

//2.push & pop
// arr.push('putri'); // menambahkan isi aray dia= akhir element array di atas (putri setelah ganteng) dan bisa skaligus 2 atau lebih element baru di push

// arr.pop(); //element ganteng akan hilang karena dia terakhir

// 3. unshift dan shift

// arr.unshift('ganteng'); // element ganteng jadi posisi pertama
// arr.shift(); // menghilangkan element pertama dalam array arr
// console.log(arr.join('-'));

//4. splice untuk menyisipkan element di tengah2
//splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2 , ....)   <=== paramater
// var arr = ['nurizki', 'ansyah','ganteng'];
// arr.splice(1, 0, 'ramadansyah','bahenol'); //1 adalah menentukan posisi index awal dari 0(nurizki)

// arr.splice(1,2); //ansyah dan ganteng ilang karena mulai dari index1 = 2 hapus

// arr.splice(1,2,'putri'); // bisa langsung tambah element putri
// console.log(arr.join('-'));

// 5.slice // mengiris sebuah array menjadi array yang baru

//rumus = slice(awal,akhir); <== index awal & index akhir
// var arr = ["nurizki", "ansyah", "putri", "ananda", "ramad"];

// var arr2 = arr.slice(1, 3); //karena ini output hanya akan menampilkan ansyah dan putri (1,3 sebagai index untuk elemen ansyah dan putri)
// console.log(arr2.join("-"));

//6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// })
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['nurizki', 'putri', 'ansyah']
// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke ' + (i+1 ) + ' adalah ' + e);
// })

// 7. map
// var angka = [1, 2, 7, 5, 4, 6, 3, 8];
// var angka2 = angka.map(function (e) {
//     return e * 2;

// });
// console.log(angka2.join('-'));

// 8 short
// var angka = [1, 2, 7, 5, 4, 6, 3, 8];
// console.log(angka.join('-'));
// angka.sort();
// console.log(angka.join('-'));

//sort puluhan 2 angka
var angka = [1, 2, 7, 5, 4, 6, 3, 8,10,20,30];

angka.sort(function (a, b) {
    return a - b;
});
console.log(angka.join('-'));

//9. filter

//10. find

