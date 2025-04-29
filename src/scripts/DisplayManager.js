export class DisplayManager {
  constructor() {
    console.log("Display Manager is ready");
  }

  displayMyMovies() {
    // This method is used to displays Movies in watch history
    const myMovies = [];
    myMovies.push(this.constructMovieItem());
    console.log("Displaying Your Movies");
    let html = "";
    console.log("My Movies", myMovies);
    html += myMovies.map((movie, index) => {
      movie.rating = this.constructStarRating(movie.rating);
      return `
            <div class="movie-item col-6 col-md-2 me-3">
                <img
                src="${movie.poster_image}"
                alt="Cover Image"
                class="cover-image img-fluid rounded"
                />

                <div class="hover-varient ps-2 rounded">
                <div
                    class="top-side w-fit m-3 ms-auto md-hd-50 d-flex flex-column justify-content-start align-items-center"
                >
                    <img
                    src="/src/assets/images/icons/movie-in-watch-history.png"
                    alt=""
                    class="icon my-1"
                    />
                </div>

                <p class="movie-name small">${movie.name}</p>
                <div class="movie-date-time mt-1 d-flex flex-row">
                    <p class="time me-2 small">
                        ${movie.duration[0]}h 
                        ${movie.duration[1]}m
                    </p>
                    <p class="date small">
                        ${movie.release_date.join(" ")}
                    </p>
                </div>
                <div
                    class="rating mt-1 d-flex flex-row align-items-center justify-content-center w-fit"
                >
                ${movie.rating
                  .map(
                    (star) => `<img src="${star}" alt="" class="rating-star"/>`
                  )
                  .join("")}
                </div>
                <div
                    class="genre d-flex flex-row justify-content-center align-items-center float-end mt-3 me-md-2"
                >
                    ${movie.genres
                      .map(
                        (genre) =>
                          `<p class="mx-1 small text-orange">${genre}</p>`
                      )
                      .join("")}
                </div>
                </div>
            </div>
    `;
    });
    const myMoviesDiv = document.getElementById("my-movies");
    myMoviesDiv.innerHTML = html;
  }

  displayMyGenre() {
    // This method is used to display genre of movies in watch history
    let myGenre = [
      "Action",
      "Adventure",
      "Biography",
      "Animation",
      "Comedy",
      "Documentary",
      "Sci-Fi",
      "Superhero",
      "Fantasy",
    ];

    let html = "";
    html = myGenre
      .map(
        (genre) =>
          `<button class="genre-item border-0 m-2 px-3 py-2 rounded text-nowrap">
        ${genre}
        </button>`
      )
      .join("");

    document.getElementById("my-genre").innerHTML = html;
  }


  constructStarRating(rating) {
    // This method is used to construct html of rating stars
    // console.log("Original rating: ", rating);
    const fourStarRating = (rating / 10) * 4;
    const stars = [];

    for (let i = 0; i < 4; i++) {
      const remainingValue = fourStarRating - i;
      let starImage;

      if (remainingValue >= 1) {
        starImage = "/src/assets/images/rating-stars/100-star.png";
      } else if (remainingValue >= 0.75) {
        starImage = "/src/assets/images/rating-stars/80-star.png";
      } else if (remainingValue >= 0.5) {
        starImage = "/src/assets/images/rating-stars/50-star.png";
      } else if (remainingValue >= 0.25) {
        starImage = "/src/assets/images/rating-stars/40-star.png";
      } else if (remainingValue < 0.25 && remainingValue > 0.1) {
        starImage = "/src/assets/images/rating-stars/10-star.png";
      } else {
        starImage = "/src/assets/images/rating-stars/0-star.png";
      }
      stars.push(starImage);
    }

    return stars;
  }
}
