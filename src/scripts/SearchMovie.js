export class SearchMovie {
  openSearchForm() {
    window.offcanvas.setTitle("Search a Movie");
    window.offcanvas.setContent(`
        <img
            src="./src/assets/images/bg-slideshow/img 0.jpg"
            alt="dynamic-background"
            class="bg-slideshow-img"
          />

        <div class="content">
            <!-- movie search form -->
            <div class="form-section ms-md-5 mt-3">
                <form action="" class="" onsubmit="window.searchMovie.searchMovieHandler(event)">
                    <input
                        type="text"
                        id="movie-search-term"
                        class="col-9 col-md-10 bg-transparent border-0 border-bottom border-3 placeholder-light text-light fs-5 fw-100"
                        placeholder="SEARCH FOR ANYTHING"
                    />
                    <button
                        class="btn search-form-btn fs-5 fw-600 px-3 py-1 ms-2"
                        type="submit"
                        id="search-movie-btn"
                    >
                        GO
                    </button>
                </form>               

            <div class="search-results w-100" id="movie-search-result">
              <h4 class="nothing col-md-7 op-07 mx-4 mx-md-auto mt-5 pt-5">
                Search for something to appear here.... <br />
                You can also choose what to search for in the options....
              </h4>
            </div>

        </div>    
    `);

    window.offcanvas.show();
  }

  async searchMovieHandler(event) {
    event.preventDefault();
    let searchTerm = document.getElementById("movie-search-term").value;
    let searchResultDiv = document.getElementById("movie-search-result");
    if (searchTerm.length < 1) {
      window.confirm("Search term too short. Atleast 1 character required");
    } else {
      searchResultDiv.innerHTML = `Searching for ${searchTerm}...`;
      let results = await this.getResults(searchTerm);
      console.log("Displaying search results");
      this.displaySearchResults(results);
    }
  }

  async getResults(searchTerm) {
    // Fetch search results from tmdb
    let searchResponse = [];
    let searchResults = [];
    // search for movie, construct search results as HTML, return results

    searchResponse = await this.searchMovies(searchTerm);

    if (searchResponse.results.length > 0) {
      console.log(
        `${searchResponse.total_results} Results found. Constucting movie items from search results.`
      );
      searchResponse.results.forEach((result) => {
        searchResults.push(this.constructMovieItem(result));
      });
    } else {
      console.log("No results found!!");
    }

    if (searchResults.length > 0) {
      console.log("Searh results constructed successfully");
    }

    return searchResults;
  }

  async searchMovies(searchTerm) {
    searchTerm = encodeURIComponent(searchTerm);
    console.log("Searching for ", searchTerm);

    const token =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzFiMDU4N2E5ODQ5ZDQyOTIyZmQwYzI2YWE0YmY5NiIsIm5iZiI6MTczODM0NTAwMS4yNTIsInN1YiI6IjY3OWQwYTI5YTliNGIxMjhmYjRkMzk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sUL84tE8A-zqqvpXiEqRZ1O70pqBTrjGSCLoskvRA5o";

    const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`;
    const request = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };

    try {
      return fetch(searchURL, request)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        });
    } catch (error) {
      window.confirm("Something went wrong. See console for error!!");
      console.log(error);
    }
  }

  constructMovieItem(movie) {
    // This method is used to construct movie item
    console.log(movie);

    function constructReleaseDate(release_date) {
      const MonthIDs = {
        1: "JAN",
        2: "FEB",
        3: "MAR",
        4: "APR",
        5: "MAY",
        6: "JUN",
        7: "JUL",
        8: "AUG",
        9: "SEP",
        10: "OCT",
        11: "NOV",
        12: "DEC",
      };
      release_date = release_date.split("-");

      // convert month in number to month in words. Uses the + so that it is converted to number as the keys of MonthIDs object is a number
      release_date[1] = MonthIDs[+release_date[1]];

      return release_date;
    }

    const movieItem = {
      id: movie.id,
      name: movie.title,
      duration: 0,
      release_date: constructReleaseDate(movie.release_date),
      rating: movie.popularity,
      poster_image: movie.poster_path,
      background_image: movie.backdrop_path,
      genres: [],
      original_name: movie.original_title,
    };

    // console.log(movieItem);
    return movieItem;
  }

  displaySearchResults(searchResults) {
    console.log("Displaying Search Results: ", searchResults);
    const searchResultDiv = document.getElementById("movie-search-result");
    searchResultDiv.innerHTML = "Displaying Results";
    searchResultDiv.innerHTML = ""; // Clear the search results div
    searchResultDiv.classList.remove("nothing");
    searchResultDiv.classList +=
      " d-flex flex-row justify-content-center flex-wrap";
    searchResults.forEach((result) => {
      searchResultDiv.innerHTML += this.constructMovieHTML(result);
    });
  }

  /**
   * @description - This method is used to construct the movie item to be displayed in the search results. It Takes in a movie object and return the movie item to be displayd in the search results
   * @param {Object} movie - The movie object to be displayed
   * @returns {string} - The HTML string to be displayed in the search results
   */
  constructMovieHTML(movie) {
    // console.log("Constructing movie item: ", movie);
    return `
      <div
        class="result-item hover-scale-11 col-12 col-md-5 m-2 pe-2 rounded d-flex flex-row justify-content-start align-items-center"
      >
        <img
          src="./src/assets/images/temp/cover-image.jpg"
          alt=""
          class="result-cover me-2"
        />
        <div class="result-content">
          <p class="movie-name fw-500">${movie.name}${
      movie.original_name &&
      `<span class="original-name small fw-100"> [${movie.original_name}]</span>`
    }</p>
          <div class="mid-section d-flex flex-row">
            <div
              class="rating mt-1 d-flex flex-row align-items-center justify-content-center w-fit me-2"
            >
              <img
                src="./src/assets/images/rating-stars/100-star.png"
                alt=""
                class="rating-star"
              />
              <img
                src="./src/assets/images/rating-stars/80-star.png"
                alt=""
                class="rating-star"
              />
              <img
                src="./src/assets/images/rating-stars/50-star.png"
                alt=""
                class="rating-star"
              />
              <img
                src="./src/assets/images/rating-stars/40-star.png"
                alt=""
                class="rating-star"
              />
            </div>

            <div class="movie-date-time mt-1 d-flex flex-row">
              <p class="date small">${movie.release_date}</p>
            </div>
          </div>

          <div class="action-buttons fs-4">
            <a href="/details?movie=${movie.id}"
              class="nav-link text-info fs-6 small p-0 px-2 d-inline-block"
            >
              Details
            </a>
            <button>+</button>
            <button>☆</button>
          </div>
        </div>
      </div>
    `;
  }
  demoDune() {
    this.displaySearchResults([
      {
        id: 347201,
        name: "Boruto: Naruto the Movie",
        duration: 0,
        release_date: ["2015", "AUG", "07"],
        rating: 12.7244,
        poster_image: "/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg",
        background_image: "/51oaRzcFOAZzxOVbQQHnSbbuSJU.jpg",
        genres: [],
      },
      {
        id: 118406,
        name: "Road to Ninja: Naruto the Movie",
        duration: 0,
        release_date: ["2012", "JUL", "28"],
        rating: 4.6453,
        poster_image: "/xLal6fXNtiJN6Zw6qk21xAtdOeN.jpg",
        background_image: "/sKh3GJ7eMStObW5BsgkztTmpg5H.jpg",
        genres: [],
      },
      {
        id: 317442,
        name: "The Last: Naruto the Movie",
        duration: 0,
        release_date: ["2014", "DEC", "06"],
        rating: 14.9513,
        poster_image: "/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
        background_image: "/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg",
        genres: [],
      },
      {
        id: 20982,
        name: "Naruto Shippuden the Movie",
        duration: 0,
        release_date: ["2007", "AUG", "04"],
        rating: 13.1148,
        poster_image: "/vDkct38sSFSWJIATlfJw0l3QOIR.jpg",
        background_image: "/sZIJkZPKySo398Me4HLeUM7eCy0.jpg",
        genres: [],
      },
      {
        id: 16907,
        name: "Naruto the Movie: Ninja Clash in the Land of Snow",
        duration: 0,
        release_date: ["2004", "AUG", "21"],
        rating: 10.3076,
        poster_image: "/eUNRUeSNzm8LktH4HRaYiAReB6R.jpg",
        background_image: "/bW0Hr19Xo7LDnMmywXuH5YoTMY5.jpg",
        genres: [],
      },
      {
        id: 16910,
        name: "Naruto the Movie: Legend of the Stone of Gelel",
        duration: 0,
        release_date: ["2005", "AUG", "06"],
        rating: 9.4157,
        poster_image: "/itKMldwL6uhUZYO3X78NOFU4zzO.jpg",
        background_image: "/ldwWnaWoW8ziEFflimoraZouyvB.jpg",
        genres: [],
      },
      {
        id: 50723,
        name: "Naruto Shippuden the Movie: The Lost Tower",
        duration: 0,
        release_date: ["2010", "JUL", "31"],
        rating: 10.3908,
        poster_image: "/6e2YvN1tQK4xQHlmy7GJTuXOt2u.jpg",
        background_image: "/a4MrZ711OIObIhSGF8SqcZQTyZo.jpg",
        genres: [],
      },
      {
        id: 17581,
        name: "Naruto Shippuden the Movie: Bonds",
        duration: 0,
        release_date: ["2008", "AUG", "02"],
        rating: 10.6535,
        poster_image: "/bBqEiQbbfyt4MWR3NhDZMbS4Wp8.jpg",
        background_image: "/xzIaIFXs14vr5BGoAQ2IJsQ60EB.jpg",
        genres: [],
      },
      {
        id: 75624,
        name: "Naruto Shippuden the Movie: Blood Prison",
        duration: 0,
        release_date: ["2011", "JUL", "30"],
        rating: 9.5798,
        poster_image: "/4WT7zYFpe0fsbg6TitppiHddWAh.jpg",
        background_image: "/Abv3ZtGV2NXxPimArb3LDLg2bDH.jpg",
        genres: [],
      },
      {
        id: 36728,
        name: "Naruto Shippuden the Movie: The Will of Fire",
        duration: 0,
        release_date: ["2009", "AUG", "01"],
        rating: 11.4014,
        poster_image: "/pZzdFmztwmg0FUOVCMa7vReHhQN.jpg",
        background_image: "/fq5r99Uwr0TEG1yc903LgPNNA9k.jpg",
        genres: [],
      },
      {
        id: 18861,
        name: "Naruto the Movie: Guardians of the Crescent Moon Kingdom",
        duration: 0,
        release_date: ["2006", "AUG", "05"],
        rating: 10.4193,
        poster_image: "/mmKiJ93x6uhTwJlrxCoY38R4qo6.jpg",
        background_image: "/j2oX7UeZJJD6tUczrVECcJCdLaG.jpg",
        genres: [],
      },
      {
        id: 1017204,
        name: "The Day Naruto Became Hokage",
        duration: 0,
        release_date: ["2016", "JUL", "06"],
        rating: 3.6453,
        poster_image: "/7Zp4LaCbFNd1hxfxRDTdFqMzqxi.jpg",
        background_image: "/eOI4aC1ZqYgHcJIPmi9YcAolrAd.jpg",
        genres: [],
      },
      {
        id: 609197,
        name: "Naruto, the Genie, and the Three Wishes, Believe It!",
        duration: 0,
        release_date: ["2010", "JUL", "31"],
        rating: 3.114,
        poster_image: "/zuydzpfVgPDFZrBxauAUJMbBbXe.jpg",
        background_image: "/9izS6dYvrytS7w69oSPlpSRrfQb.jpg",
        genres: [],
      },
    ]);
  }
}
