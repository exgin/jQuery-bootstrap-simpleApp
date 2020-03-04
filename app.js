// Get input values

$('.movie-form').on('submit', function(e) {
  e.preventDefault();
  let movieTitle = $('#movie-title').val();
  let movieRating = $('#rate').val();

  let movieData = { movieTitle, movieRating };
  let dataToHTML = createMovie(movieData);

  $('.movie-body').append(dataToHTML);
});

$('.movie-body').on('click', '.btn.btn-danger', function(e) {
  $(e.target)
    .closest('tr')
    .remove();
});

function createMovie(input) {
  return `<tr>
          <th scope="row">${input.movieTitle}</th>
          <td>${input.movieRating}</td>
          <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>`;
}
