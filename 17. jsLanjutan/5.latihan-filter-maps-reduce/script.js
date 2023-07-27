// ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yang 'javascript lanjutan'
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVA SCRIPT LANJUTAN"))

  // ambil durasi masing masing video
  .map((item) => item.dataset.duration)

  //ubah durasi string menjadi float dan ubah menit jadi detik
  .map((waktu) => {
    //durasi nulis nya gini 10:30 di pecah split jadi  [10,30]
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  //jumlahkan semua detiknya
  .reduce((total, detik) => total + detik);

//ubah formatnya jadi jam menit detik

const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

//simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;
const jmlVideo = videos.filter((video) => video.textContent.includes("JAVA SCRIPT LANJUTAN")).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(jmlVideo);
