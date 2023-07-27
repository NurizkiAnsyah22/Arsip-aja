// $(".search-button").on("click", function () {
//   $.ajax({
//     url: "http://www.omdbapi.com/?i=tt3896198&apikey=9d825435&s=" + $(".input-keyword").val(),
//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += `<div class="col-md-4 my-3">
//                         <div class="card">
//                         <img src="${m.Poster}">
//                             <div class="card-body">
//                             <h5 class="card-title">${m.Title}</h5>
//                             <p class="card-subtitle mb-2 text-muted">${m.Year}</p>
//                             <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
//                             </div>
//                         </div>
//                         </div>`;
//       });
//       $(".movie-container").html(cards);

//       //ketika tombol detail di klik
//       $(".modal-detail-button").on("click", function () {
//         const imdbID = $(this).data("imdbid");
//         $.ajax({
//           url: `http://www.omdbapi.com/?i=${imdbID}&apikey=9d825435`,
//           success: (m) => {
//             const movieDetail = ` <div class="container-fluid">
//                                       <div class="row">
//                                           <div class="col-md-3">
//                                           <img src="${m.Poster}" class="img-fluid" alt="" />
//                                           </div>
//                                           <div class="col-md">
//                                           <ul class="list-group">
//                                               <li class="list-group-item"><h4>${m.Title} , ${m.Year}</h4></li>
//                                               <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
//                                               <li class="list-group-item"><strong>Actors :</strong> ${m.Actors}</li>
//                                               <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
//                                               <li class="list-group-item"><strong>Plot :</strong><br />${m.Plot}</li>
//                                           </ul>
//                                           </div>
//                                       </div>
//                                       </div>
//                                       `;

//             $(".modal-body").html(movieDetail);
//           },
//           error: (xhr, status, error) => {
//             console.log(xhr.responseText);
//           },
//         });
//       });
//     },
//     error: (xhr, status, error) => {
//       console.log(xhr.responseText);
//     },
//   });
// });

//menggunakan fetch

// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9d825435&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += ShowCards(m)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       //ketika tombol detail di klik
//       const modalDetailButton = document.querySelectorAll(".modal-detail-button");
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=9d825435&i=" + imdbid) //("http://www.omdbapi.com/?i=tt3896198&apikey=9d825435&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetail = showMovieDetail(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

//refactoring code diatas

// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", async function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   const movies = await getMovies(inputKeyword.value);
//   updateUI(movies);
// });

// //cara event binding
// document.addEventListener("click", async function (e) {
//   if (e.target.classList.contains("modal-detail-button")) {
//     const imdbid = e.target.dataset.imdbid;
//     const movieDetail = await getMovieDetail(imdbid);
//     updateUiDetail(movieDetail);
//   }
// });

// function getMovieDetail(imdbid) {
//   return fetch("http://www.omdbapi.com/?apikey=9d825435&i=" + imdbid)
//     .then((response) => response.json())
//     .then((m) => m);
// }

// function updateUiDetail(m) {
//   const movieDetail = showMovieDetail(m);
//   const modalBody = document.querySelector(".modal-body");
//   modalBody.innerHTML = movieDetail;
// }

// function updateUI(movies) {
//   let cards = "";
//   movies.forEach((m) => (cards += showCards(m)));
//   const movieContainer = document.querySelector(".movie-container");
//   movieContainer.innerHTML = cards;
// }

// function getMovies(keyword) {
//   return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9d825435&s=" + keyword)
//     .then((response) => response.json())
//     .then((response) => response.Search);
// }

// function showCards(m) {
//   // Logika untuk membuat kartu film
//   // Mengembalikan tampilan kartu film sebagai string HTML
//   return `<div class="col-md-4 my-3">
//       <div class="card">
//       <img src="${m.Poster}">
//           <div class="card-body">
//           <h5 class="card-title">${m.Title}</h5>
//           <p class="card-subtitle mb-2 text-muted">${m.Year}</p>
//           <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
//           </div>
//       </div>
//       </div>`;
// }

// function showMovieDetail(m) {
//   return `
//                                     <div class="container-fluid">
//                                     <div class="row">
//                                         <div class="col-md-3">
//                                         <img src="${m.Poster}" class="img-fluid" alt="" />
//                                         </div>
//                                         <div class="col-md">
//                                         <ul class="list-group">
//                                             <li class="list-group-item"><h4>${m.Title} , ${m.Year}</h4></li>
//                                             <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
//                                             <li class="list-group-item"><strong>Actors :</strong> ${m.Actors}</li>
//                                             <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
//                                             <li class="list-group-item"><strong>Plot :</strong><br />${m.Plot}</li>
//                                         </ul>
//                                         </div>
//                                     </div>
//                                     </div>
//                                     `;
// }


//refactoring by chat gpt

// Berikut adalah refaktorisasi dari kode yang Anda berikan:

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const searchURL = "http://www.omdbapi.com/?i=tt3896198&apikey=9d825435&s=" + inputKeyword.value;

  fetch(searchURL)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.Search;
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = createMovieCards(movies);

      const modalDetailButton = document.querySelectorAll(".modal-detail-button");
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          const detailURL = "http://www.omdbapi.com/?apikey=9d825435&i=" + imdbid;

          fetch(detailURL)
            .then((response) => response.json())
            .then((movie) => {
              const movieDetail = createMovieDetail(movie);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function createMovieCards(movies) {
  let cards = "";
  movies.forEach((movie) => {
    cards += `
      <div class="col-md-4 my-3">
        <div class="card">
          <img src="${movie.Poster}">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-subtitle mb-2 text-muted">${movie.Year}</p>
            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Detail</a>
          </div>
        </div>
      </div>
    `;
  });
  return cards;
}

function createMovieDetail(movie) {
  return `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <img src="${movie.Poster}" class="img-fluid" alt="" />
        </div>
        <div class="col-md">
          <ul class="list-group">
            <li class="list-group-item"><h4>${movie.Title} , ${movie.Year}</h4></li>
            <li class="list-group-item"><strong>Director :</strong> ${movie.Director}</li>
            <li class="list-group-item"><strong>Actors :</strong> ${movie.Actors}</li>
            <li class="list-group-item"><strong>Writer : </strong>${movie.Writer}</li>
            <li class="list-group-item"><strong>Plot :</strong><br />${movie.Plot}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}


// Pembaruan yang dilakukan pada kode tersebut meliputi:

// 1. Pemisahan fungsi: Fungsi `ShowCards` diubah menjadi `createMovieCards`, dan `showMovieDetail` diubah menjadi `createMovieDetail`. Pembaruan ini bertujuan untuk menggambarkan lebih jelas bahwa fungsi-fungsi tersebut bertanggung jawab untuk membuat tampilan HTML, bukan hanya menampilkan informasi seperti yang diindikasikan oleh nama awalnya.

// 2. Pembuatan URL: URL untuk pencarian film dan detail film disimpan dalam variabel terpisah (`searchURL` dan `detailURL`) agar lebih mudah dibaca dan dikelola.

// 3. Perubahan nama variabel: Variabel `m` diubah menjadi `movie` agar lebih deskriptif dan mudah dimengerti.

// 4. Perubahan struktur event listener: Event listener untuk tombol detail film sekarang dibuat dalam satu blok terpisah di dalam event listener klik tombol pencarian. Ini memastikan bahwa event listener hanya ditambahkan setelah kartu film selesai diperbarui.

// Dengan perbaikan tersebut, kode menjadi lebih mudah dibaca karena mengikuti konvensi penamaan yang jelas dan lebih terstruktur. Fungsi-fungsi terpisah memudahkan pemahaman terhadap bagian kode yang bertanggung jawab atas tugas tertentu. URL yang disimpan dalam variabel terpisah juga membuatnya lebih terlihat dan dapat dikelola dengan lebih baik.