var jumlahAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;
while (noAngkot <= angkotBeroprasi) {
  console.log("Angkot No." + noAngkot + " beroprasi dengan baik.");
  noAngkot++;
}
for (noAngkot = angkotBeroprasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log("Angkot No." + noAngkot + " sedang tidak beroprasi");
}
