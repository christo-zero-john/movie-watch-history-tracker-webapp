import { Modal, Button, Image } from "react-bootstrap";

export default function ResultItemDetails({
  show = true,
  handleClose = () => "",
}) {
  return (
    <div className="">
      <div class="modal-body p-0 m-0">
        <img
          src="./src/assets/images/bg-slideshow/img 3.jpg"
          alt=""
          class="movie-summary-bg-img rounded"
        />

        <div class="movie-summary-content d-flex flex-row p-3 h-fit">
          <img
            src="./src/assets/images/temp/cover-image.jpg"
            alt=""
            class="movie-summary-cover-img rounded"
          />
          <div class="movie-details-summary ms-3">
            <h3 class="name text-nowrap px-2">The Last: Naruto the movie</h3>

            <div class="d-flex flex-row rating-date-time">
              <div class="movie-date-time mt-1 d-flex flex-row fs-5">
                <p class="time me-2">1h 52m</p>
                <p class="date">Dec 06 2014</p>
              </div>
            </div>

            <div class="genre mt-2">
              <p class="me-2 text-orange d-inline-block fs-5">Action</p>
              <p class="me-2 text-orange d-inline-block fs-5">Adventure</p>
              <p class="me-2 text-orange d-inline-block fs-5">Romance</p>
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

            <div class="action-buttons">
              <button class="w-fit">
                <img
                  src="./src/assets/images/icons/check-mark-icon.png"
                  alt=""
                  class="d-inline"
                />
                <p class="">Add to Watch History</p>
              </button>
              <button class="">
                <img
                  src="./src/assets/images/icons/star-icon.png"
                  alt=""
                  class="d-inline"
                />
                <p class="">Add to Wishlist</p>
              </button>
              <button class="">
                <img
                  src="./src/assets/images/icons/play-icon.png"
                  alt=""
                  class="d-inline"
                />
                <p class="">Play Trailer</p>
              </button>

              <a
                href="./details.html"
                class="link-orange my-3 d-block text-decoration-none"
              >
                More Details &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
