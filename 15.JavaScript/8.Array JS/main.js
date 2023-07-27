var namaBinatang = ['sapi', 'kambing', 'ayam', 'kucing', 'kelinci'];

console.log(namaBinatang[1]);  //menampilkan index dalam araay namaBinatang di mulai dari 0-4 (5nama binatang sesuai array yang di panggil)
console.log(namaBinatang.length); // memunculkan ada berapa elemen yang ada dalam namaBinatang =


//array multi , bisa buat array berapapun dalam array
var myFunc = function () { alert('hello world!'); } //function ekpression
var myArray = ['text', 2, false, myFunc, [10, 20, 30]]

//menampilkan angka 20 panggil array luar daln array dalam nya seperti berikut
console.log(myArray[4][1]); //4 disini manggil index urutan lur, lalu 1 manggil index dalam aray =20