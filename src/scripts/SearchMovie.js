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
      event.target.classList.remove("selected");
    } else {
      window.searchOptions.push(option);
      event.target.classList.add("selected");
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
    searchResultDiv.innerHTML = `Searching for ${searchTerm}...`;
    if (searchTerm.length < 1) {
      window.confirm("Search term too short. Atleast 1 character required");
    } else {
      let results = await this.getResults(searchTerm);
      this.displaySearchResults(results);
    }
  }

  async getResults(searchTerm) {
    // Fetch search results from tmdb
    let response = ["", "", "", "", ""];
    let results = [];
    response.forEach((movie) => {
      let movieItem = window.displayManager.constructMovieItem(movie);
      results.push(movieItem);
    });

    return results;
  }

  displaySearchResults(searchResults) {
    console.log("Displaying Search Results: ", searchResults);
    const searchResultDiv = document.getElementById("movie-search-result");
  }
}


