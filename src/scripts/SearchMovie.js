export class SearchMovie {
  constructor() {
    window.searchOptions = ["name"];
    window.addOrRemoveSearchOption = this.addOrRemoveSearchOption;
  }

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

                <div
                class="search-options md-w-fit p-md-2 px-md-4 my-2 d-md-flex flex-row align-items-center flex-nowrap overflow-auto no-scrollbar"
                >
                <button
                    class="selected so-btn px-2 px-md-4 m-2 m-md-3 m-md-0 mx-md-1 text-nowrap"
                    onclick="window.addOrRemoveSearchOption(event, 'name')" id="name-option"
                >
                    Name
                </button>
                <button
                    class="so-btn px-2 px-md-4 m-2 m-md-3 m-md-0 mx-md-1 text-nowrap"
                    onclick="window.addOrRemoveSearchOption(event, 'description')"
                >
                    Description
                </button>
                <button
                    class="so-btn px-2 px-md-4 m-2 m-md-3 m-md-0 mx-md-1 text-nowrap"
                    onclick="window.addOrRemoveSearchOption(event, 'genres')"
                >
                    Genres
                </button>
                <button
                    class="so-btn px-2 px-md-4 m-2 m-md-3 m-md-0 mx-md-1 text-nowrap"
                    onclick="window.addOrRemoveSearchOption(event, 'cast-crew')"
                >
                    Cast & Crew
                </button>
                <button
                    class="so-btn px-2 px-md-4 m-2 m-md-3 m-md-0 mx-md-1 text-nowrap"
                    onclick="window.addOrRemoveSearchOption(event, 'release-date')"
                >
                    Release Date
                </button>
                <button
                    class="so-btn px-2 px-md-4 m-2 m-md-3 m-md-0 mx-md-1 text-nowrap"
                    onclick="window.addOrRemoveSearchOption(event, 'keywords')"
                >
                    Keywords
                </button>
                <button
                    class="so-btn px-2 px-md-4 m-2 m-md-3 m-md-0 mx-md-1 text-nowrap"
                    onclick="window.addOrRemoveSearchOption(event, 'production-companies')"
                >
                    Production Companies
                </button>
                <button
                    class="so-btn px-2 px-md-4 m-2 m-md-3 m-md-0 mx-md-1 text-nowrap"
                    onclick="window.addOrRemoveSearchOption(event, 'language')"
                >
                    Language
                </button>
                </div>
            </div>

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

  addOrRemoveSearchOption(event, option) {
    if (window.searchOptions.includes(option)) {
      let index = window.searchOptions.indexOf(option);
      window.searchOptions.splice(index, 1);

      // We can pass null as event to add or remove an option dynamically from other methods javascript. So to prevent an error in such case we should explicitly check whether the evnt has happened or not. Add or Remove class 'selected' from the button only if we got a valid event.

      event && event.target.classList.remove("selected");
    } else {
      window.searchOptions.push(option);
      event && event.target.classList.add("selected");
    }
    if (window.searchOptions.length <= 0) {
      window.searchOptions.push("name");
      document.getElementById("name-option").classList.add("selected");
    }
    console.log(window.searchOptions);
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
      this.displaySearchResults(results);
    }
  }

  async getResults(searchTerm) {
    // Fetch search results from tmdb
    let response = [];
    let results = [];
    // for each search option in window.searchOptions, check whether the search term is valid and search for those, then push movie into the results array

    let searchOptions = window.searchOptions;
    console.log(`searching for ${searchTerm} in ${searchOptions.join(", ")}`);

    // We should check whether the searchOptions are valid for the give search term. It is mandatory to check this except for  certain options like name, description, production-companies, keywords etc...
    searchOptions.forEach(async (option) => {
      // If the options are not equal to excluded options then validate searchTerm for those options
      const excludeOptions = [
        "name",
        "description",
        "production-companies",
        "keywords",
      ];

      if (!excludeOptions.includes(option)) {
        let validationStatus = await this.validateSearchOptions(
          option,
          searchTerm
        );
        console.log(validationStatus);
        if (!validationStatus.success) {
          console.log(
            "Some unexpected error while validating option: ",
            option
          );
        } else {
          if (!validationStatus.valid) {
            // If search term is invalid then remove that option and do not search for that option
            console.log(`Search Term invalid for ${option}`);
            let removeIndex = searchOptions.indexOf(option);
            searchOptions.splice(removeIndex, 1);
          } else {
            console.log(
              `Search Term valid for ${option}. Starting to fetch movies`
            );
          }
        }
      }
    });
    console.log("Search Options: ", searchOptions);

    searchOptions.forEach((option) => {
      let searchResults = this.searchMovies(searchTerm, option);
      response.push(searchResults);
    });

    response.forEach((movie) => {
      let movieItem = window.displayManager.constructMovieItem(movie);
      results.push(movieItem);
    });

    return results;
  }

  async searchMovies(searchOptions, searchTerm) {
    // Similar to multiple methods to validate searchOptions, we need multiple methods to search for different searchOptions. So we can define a key value pair object with 'option name' and 'tmdb search endpoint' and fetch movies from these endpoints.

    const searchEndPoints = {};
  }

  async validateSearchOptions(option, searchTerm) {
    // We need to validate searchTerm the search option, to make it simple I defined seperate methods to do the validation for each option and stored the 'option name' and 'validator function name' as key value pairs in the 'validators' object
    const validators = {
      genres: this.checkValidGenres,
      "cast-crew": this.checkValidCastCrew,
      language: this.checkValidLanguage,
      "release-date": this.checkValidReleaseDate,
    };

    // console.log(validators[option]);
    let validationStatus = validators[option](searchTerm);

    return validationStatus;
  }

  // Validators methods for searchOptions
  async checkValidGenres(searchTerm) {
    console.log("Validating Genres for search term: ", searchTerm);
    return {
      success: true,
      valid: false,
      data: "some data",
    };
  }

  async checkValidCastCrew(searchTerm) {
    console.log("Validating CastCrew for search term: ", searchTerm);
    return {
      success: true,
      valid: true,
      data: "some data",
    };
  }

  async checkValidLanguage(searchTerm) {
    console.log("Validating Language for search term: ", searchTerm);
    return {
      success: true,
      valid: true,
      data: "some data",
    };
  }

  async checkValidReleaseDate(searchTerm) {
    console.log("Validating ReleaseDate for search term: ", searchTerm);
    return {
      success: true,
      valid: true,
      data: "some data",
    };
  }

  displaySearchResults(searchResults) {
    console.log("Displaying Search Results: ", searchResults);
    const searchResultDiv = document.getElementById("movie-search-result");
  }
}
