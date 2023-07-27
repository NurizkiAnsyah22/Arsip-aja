var item = prompt("masukan nama makanan/minuman : \n (cth:nasi, daging, susu, gorengan,softdrink)");
switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan/minuman sehat");
    break;
  case "gorengan":
  case "softdrink":
    alert("makanan tidak sehat");
    break;
  default:
    alert("makanan/minuman yang anda masukan salah");
    break;
}
