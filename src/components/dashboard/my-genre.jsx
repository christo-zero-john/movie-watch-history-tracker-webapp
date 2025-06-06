export default function MyGenre({ genres }) {
  return (
    <div class="genre-section col-12 col-md-11 rounded-0 rounded-md-2 mx-auto my-3 mb-5 my-md-4">
      <h2 class="fs-6">Your Movie Genre</h2>
      <div
        class="my-genre p-3 pb-2 p-md-4 rounded d-flex flex-row justify-content-start align-items-center flex-nowrap overflow-auto no-scrollbar"
        id="my-genre"
      >
        {genres.length == 0 ? (
          <p className="text-center text-warning w-100">
            Add some movies to your watch history to see your genre
          </p>
        ) : (
          genres.map((genre) => (
            <button
              key={genre.id}
              className="genre-btn text-orange border-0 m-2 px-3 py-2 rounded text-nowrap"
            >
              {genre.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
