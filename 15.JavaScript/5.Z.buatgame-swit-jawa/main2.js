var ulang = true;
while (ulang) {
  var chance = 3;
  var c = Math.floor(Math.random() * 10) + 1;
  var hasil = "";

  while (chance >= 1) {
    alert("memulai permainan dengan" + chance + "kesempatan");
    var p = parseInt(prompt("tebak angka 1-10"));
    if (p === c) {
      hasil = "BENAR!";
      alert("anda" + hasil + "angka yang anda tebak adalah" + c);
      break;
    } else if (p < c) {
      hasil = "RENDAH";
      chance -= 1;
      alert("terlalu" + hasil + "angka yang anda tebak adalah " + p + "\ntersisa" + chance + "kesempatan lagi");
    } else if (p > c) {
      hasil = "TINGGI";
      chance -= 1;
      alert("terlalu" + hasil + "angka yang anda tebak adalah" + p + "\ntersisa" + chance + "kesempatan lagi");
    }
    if (chance === 0) {
      alert("anda gagal\nangka yang dicari adalah" + c);
    }
  }
  ulang = confirm("ulangi lagi?");
}
alert("terima kasih");
