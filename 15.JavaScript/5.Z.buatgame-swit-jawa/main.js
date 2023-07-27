var tanya = true;
while ( tanya ) { 
    // menangkap pilihan player
    var p = prompt("pilih : gajah,semut,orang");

    //menangkap pilihan kompuer
    //membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
    comp = "gajah";
    } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
    } else {
    comp = "semut";
    }

    var hasil = "";
    //menentukan rules
    if (p == comp) {
    hasil = "SERI!";
    } else if (p == "gajah") {
    //if(comp == 'orang') {
    // hasil = 'MENANG!';
    //} else {
    // hasil = 'KALAH';
    //}
    //biar code lebih ringkas bisa gini
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
    } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
    } else if (p === "semut") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
    } else {
    hasil = " memasukan pilihan yang salah!!";
    }

    //tampilkan hasulnya

    alert("kamu memilih : " + p + " dan komputer memilih:" + comp + "\nMaka hasilnya kamu " +  hasil);
    tanya = confirm('lagi?');
}

alert('terima kasih sudah bermain');



