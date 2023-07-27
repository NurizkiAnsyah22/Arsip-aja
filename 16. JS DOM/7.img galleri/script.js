const container = document.querySelector(".container");
const gede = document.querySelector(".gede");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  //cek apakah yang di klik adalah thumb
  if (e.target.className == "thumb") {
    gede.src = e.target.src;
    gede.classList.add("fade");
    setTimeout(function () {
      gede.classList.remove("fade");
    }, 500);
    thumbs.forEach(function (thumb) {
      //   if (thumb.classList.contains("active")) {
      //     thumb.classList.remove("active");
      //   }
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
