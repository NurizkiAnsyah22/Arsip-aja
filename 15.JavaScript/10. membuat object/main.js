//membuat object
//object literal

var mhs1 = {
  nama: "Nurizki ansyah",
  npm: "06201940022",
  email: "nurizkiansyah02@gmail.com",
  jurusan: "sistem informasi",
};

var mhs2 = {
  nama: "Putri ananda",
  npm: "06201940023",
  email: "nurizkiansyah07@gmail.com",
  jurusan: "Farmasi",
};

//menggunakan function declaration

function buatObjectMahasiswa(nama, npm, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.npm = npm;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("Nuriz", "06201938849", "nurizki@gmail.com", "sistem informasi");
var mhs4 = buatObjectMahasiswa("putri", "8397494", "putri@mail.co", "farmasi");

// menggunakan constructor
function Mahasiswa(nama, npm, email, jurusan) {
  this.nama = nama;
  this.npm = npm;
  this.email = email;
  this.jurusan = jurusan;
}
var mhs5 = new Mahasiswa("Rizki", "072939793", "rizki@gg.com", "sistem informasi");

//this

console.log(this);

//membuat object
//cara 1 function declaration
function halo() {
  console.log("halo");
}
halo();

//cara2 object literal

var obj = {};
obj.halo = function () {
  console.log("halo");
};
obj.halo();

//cara 3 - contructor

function Halo() {
  console.log("halo");
}
new halo();
