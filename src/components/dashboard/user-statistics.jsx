export default function UserStatistics() {
  return (
    <section class="stats-container rounded md-w-fit mx-3 mx-md-auto my-4 p-3 px-0 pb-0 pb-md-3 d-flex flex-row align-items-center flex-nowrap overflow-auto no-scrollbar">
      <div class="stat-item small d-flex flex-row w-fit mx-4">
        <p class="stat-value text-nowrap fw-bold mx-2">
          120HRS
          <br />
          42MINS
        </p>
        <p class="stat-label text-nowrap">
          TOTAL
          <br />
          WATCH TIME
        </p>
      </div>

      <div class="stat-item small d-flex flex-row align-items-center w-fit mx-4">
        <p class="stat-value text-nowrap fw-bold mx-2 fs-5">22</p>
        <p class="stat-label text-nowrap">
          MOVIES
          <br />
          WATCHED
        </p>
      </div>

      <div class="stat-item small d-flex flex-row w-fit mx-4">
        <p class="stat-value text-nowrap fw-bold mx-2 text-end">
          15
          <br />
          DAYS
        </p>
        <p class="stat-label text-nowrap">
          CURRENT
          <br />
          STREAK
        </p>
      </div>

      <div class="stat-item small d-flex flex-row align-items-center w-fit mx-4">
        <p class="stat-value text-nowrap fw-bold mx-2 fs-5">37</p>
        <p class="stat-label text-nowrap">
          GENRES
          <br />
          WATCHED
        </p>
      </div>
    </section>
  );
}
