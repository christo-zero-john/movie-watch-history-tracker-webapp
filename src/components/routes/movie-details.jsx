import { useState } from "react";
import { useParams } from "react-router";
import NavBar from "../common/nav-bar";
import ActionButtons from "../common/action-buttons";

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  return (
    <div className="text-light">
      <NavBar active="explore" />
      <div class="content p-0 m-0">
        <img
          src="/src/assets/images/bg-slideshow/img-3.jpg"
          alt=""
          class="movie-details-bg-img rounded op-04"
        />

        <div class="ms-3 p-3">
          <button class="m-3 btn">
            <img
              src="/src/assets/images/icons/go-back-icon.png"
              alt=""
              class="go-back-icon"
            />
          </button>

          <div class="movie-details-content col-md-8 p-md-3 rounded">
            <h3 class="name text-nowrap px-2">The Last: Naruto the movie</h3>

            <div class="d-flex flex-row rating-date-time">
              <div class="movie-date-time mt-1 d-flex flex-row fs-5">
                <p class="time me-2">1h 52m</p>
                <p class="date">Dec 06 2014</p>
              </div>
            </div>

            <p class="small movie-summary-description">
              Two years after the events of the Fourth Great Ninja War, the moon
              that Hagoromo Otsutsuki created long ago to seal away the Gedo
              Statue begins to descend towards the world, threatening to become
              a meteor that would destroy everything on impact. Amidst this
              crisis, a direct descendant of Kaguya Otsutsuki named Toneri
              Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting
              her younger sister Hanabi. Naruto and his allies now mount a
              rescue mission before finding themselves embroiled in a final
              battle to decide the fate of everything.
            </p>

            <ActionButtons movie={movie} />

            <div class="movie-details-genre rounded d-flex flex-row justify-content-start flex-nowrap overflow-auto no-scrollbar">
              <button class="text-orange border-0 m-2 px-3 py-2 rounded text-nowrap">
                Action
              </button>
              <button class="text-orange border-0 m-2 px-3 py-2 rounded text-nowrap">
                Romance
              </button>
              <button class="text-orange border-0 m-2 px-3 py-2 rounded text-nowrap">
                Adventure
              </button>
              <button class="text-orange border-0 m-2 px-3 py-2 rounded text-nowrap">
                Fantasy
              </button>
            </div>
          </div>

          <div class="my-4">
            <h2 class="fs-5 p-0 text-orange">Recommended Movies</h2>
            <div class="recommended-movie-items p-3 rounded d-flex flex-row justify-content-start align-items-center flex-nowrap overflow-auto no-scrollbar">
              <div class="movie-item col-6 col-md-2 me-3">
                <img
                  src="/src/assets/images/temp/cover-image.jpg"
                  alt=""
                  class="cover-image img-fluid rounded"
                />

                <div class="hover-varient ps-2 rounded">
                  <div class="top-side w-fit m-3 ms-auto md-hd-50 d-flex flex-column justify-content-start align-items-center">
                    <img
                      src="/src/assets/images/icons/add-to-watch-history.png"
                      alt=""
                      class="small-icon my-1"
                    />
                    <img
                      src="/src/assets/images/icons/add-to-wishlist.png"
                      alt=""
                      class="small-icon my-1"
                    />
                  </div>

                  <p class="movie-name small">The Last: Naruto the movie</p>
                  <div class="movie-date-time mt-1 d-flex flex-row">
                    <p class="time me-2 small">1h 52m</p>
                    <p class="date small">Dec 06 2014</p>
                  </div>

                  <div class="genre d-flex flex-row justify-content-center align-items-center float-end mt-3 me-md-2">
                    <p class="mx-1 small text-orange">Action</p>
                    <p class="mx-1 small text-orange">Adventure</p>
                    <p class="mx-1 small text-orange">Romance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
