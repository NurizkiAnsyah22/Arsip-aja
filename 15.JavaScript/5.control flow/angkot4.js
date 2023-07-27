var jumlahAngkot = 10;
var angkotBeroprasi = 6;

for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("angkot no." + noAngkot + " beroprasi dengan baik");
  } else if (noAngkot ===8) {
    console.log("angkot no." + noAngkot + "sedang lembur");
  } else {
    console.log("angkot no." + noAngkot + "sedang tidak beroprasi");
  }
}
