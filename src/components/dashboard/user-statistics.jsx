export default function UserStatistics({ userdata }) {
  // This component is used to display the user statistics in the dashboard. It is a horizontal scrollable container with some stats inside it.

  /**
   * Renders a styled statistic item with a value and a label.
   */
  function oneLineValue(right, left) {
    //
    return (
      <div className="stat-item small d-flex flex-row align-items-center w-fit mx-4">
        <p className="stat-value text-nowrap fw-bold mx-2 fs-5">{left}</p>
        <p className="stat-label text-nowrap">
          {right[0]}
          <br />
          {right[1]}
        </p>
      </div>
    );
  }

  function twoLineValues(right, left) {
    return (
      <div className="stat-item small d-flex flex-row w-fit mx-4">
        <p className="stat-value text-nowrap fw-bold mx-2 text-end">
          {left[0]}
          <br />
          {left[1]}
        </p>
        <p className="stat-label text-nowrap">
          {right[0]}
          <br />
          {right[1]}
        </p>
      </div>
    );
  }

  return (
    <section className="stats-container rounded md-w-fit mx-3 mx-md-auto my-4 p-3 px-0 pb-0 pb-md-3 d-flex flex-row align-items-center flex-nowrap overflow-auto no-scrollbar">
      {twoLineValues(
        ["TOTAL", "WATCH TIME"],
        [`${userdata.watchTime[0]}HRS`, `${userdata.watchTime[1]}MINS`]
      )}
      {oneLineValue(["MOVIES", "WATCHED"], userdata.totalMoviesWatched)}

      {twoLineValues(
        ["CURRENT", "STREAK"],
        [`${userdata.currentStreak}`, "DAYS"]
      )}

      {oneLineValue(["GENRES", "WATCHED"], userdata.genres.length)}
    </section>
  );
}
