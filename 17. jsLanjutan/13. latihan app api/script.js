      // $.ajax({
//   url: "http://www.omdbapi.com/?i=tt3896198&apikey=9d825435&s=avengers",
//   success: (results) => {
//     const movies = results.Search;
//     let cards = "";
//     movies.forEach((m) => {
//       cards += `<div class="col-md-4 my-3">
//                   <div class="card">
//                   <img src="${m.Poster}">
//                       <div class="card-body">
//                       <h5 class="card-title">${m.Title}</h5>
//                       <p class="card-subtitle mb-2 text-muted">${m.Year}</p>
//                       <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
//                       </div>
//                   </div>
//                   </div>`;
//     });
//     $(".movie-container").html(cards);

//     //ketika tombol detail di klik
//     $(".modal-detail-button").on("click", function () {
//       $.ajax({
//         url: "http://www.omdbapi.com/?i=tt3896198&apikey=9d825435&i=" + $(this).data("imdbid"),
//         success: (m) => {
//           const movieDetail = ` <div class="container-fluid">
//                                 <div class="row">
//                                     <div class="col-md-3">
//                                     <img src="${m.Poster}" class="img-fluid" alt="" />
//                                     </div>
//                                     <div class="col-md">
//                                     <ul class="list-group">
//                                         <li class="list-group-item"><h4>${m.Title} , ${m.Year}</h4></li>
//                                         <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
//                                         <li class="list-group-item"><strong>Actors :</strong> ${m.Actors}</li>
//                                         <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
//                                         <li class="list-group-item"><strong>Plot :</strong><br />${m.Plot}</li>
//                                     </ul>
//                                     </div>
//                                 </div>
//                                 </div>
//                                 `;

//           $(".modal-body").html(movieDetail);
//         },
//         error: (xhr, status, error) => {
//           console.log(xhr.responseText);
//         },
//       });
//     });
//   },
//   error: (xhr, status, error) => {
//     console.log(xhr.responseText);
//   },
// });

// tombol pencarian
$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=9d825435&s=" + $('.input-keyword').val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += `<div class="col-md-4 my-3">
                      <div class="card">
                      <img src="${m.Poster}">
                          <div class="card-body">
                          <h5 class="card-title">${m.Title}</h5>
                          <p class="card-subtitle mb-2 text-muted">${m.Year}</p>
                          <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
                          </div>
                      </div>
                      </div>`;
      });
      $(".movie-container").html(cards);

      //ketika tombol detail di klik
      $(".modal-detail-button").on("click", function () {
        const imdbID = $(this).data("imdbid");
        $.ajax({
          url: `http://www.omdbapi.com/?i=${imdbID}&apikey=9d825435`,
          success: (m) => {
            const movieDetail = ` <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-3">
                                        <img src="${m.Poster}" class="img-fluid" alt="" />
                                        </div>
                                        <div class="col-md">
                                        <ul class="list-group">
                                            <li class="list-group-item"><h4>${m.Title} , ${m.Year}</h4></li>
                                            <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
                                            <li class="list-group-item"><strong>Actors :</strong> ${m.Actors}</li>
                                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                                            <li class="list-group-item"><strong>Plot :</strong><br />${m.Plot}</li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                    `;

            $(".modal-body").html(movieDetail);
          },
          error: (xhr, status, error) => {
            console.log(xhr.responseText);
          },
        });
      });
    },
    error: (xhr, status, error) => {
      console.log(xhr.responseText);
    },
  });
});
