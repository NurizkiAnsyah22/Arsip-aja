alert('hello world!');
alert('saya rizki');

var nama = prompt('masukan nama anda');
alert(nama);

// pengkondisian sederhana
var tes = confirm('kamu yakin?');
if (tes === true) {
    alert('user menekan ok');
    
} else {
    alert('user menakan cancel');
}


alert('selamat datang');
var lagi = true;

while (lagi) {
    var nama = prompt('masukan nama:');
    alert('halo' + nama);
    lagi = confirm('coba lagi?');
}

alert('terima kasih');