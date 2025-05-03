import { Modal, Button, Image } from "react-bootstrap";

export default function ResultItemDetails({
  show = true,
  handleClose = () => "",
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal-width"
      contentClassName="bg-transparent"
    >
      <Modal.Body className="p-0 m-0">
        <Image
          src="./src/assets/images/bg-slideshow/img 3.jpg"
          alt=""
          className="movie-summary-bg-img rounded w-100"
        />
        <div className="movie-summary-content d-flex flex-row p-3 h-fit">
          <Image
            src="./src/assets/images/temp/cover-image.jpg"
            alt=""
            className="movie-summary-cover-img rounded"
          />
          <div className="movie-details-summary ms-3">
            <h3 className="name text-nowrap px-2">
              The Last: Naruto the movie
            </h3>

            <div className="d-flex flex-row rating-date-time">
              <div className="movie-date-time mt-1 d-flex flex-row fs-5">
                <p className="time me-2">1h 52m</p>
                <p className="date">Dec 06 2014</p>
              </div>
            </div>

            <div className="genre mt-2">
              <p className="me-2 text-orange d-inline-block fs-5">Action</p>
              <p className="me-2 text-orange d-inline-block fs-5">Adventure</p>
              <p className="me-2 text-orange d-inline-block fs-5">Romance</p>
            </div>

            <p className="small movie-summary-description">
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

            <div className="action-buttons">
              <Button className="w-fit me-2">
                <Image
                  src="./src/assets/images/icons/check-mark-icon.png"
                  alt=""
                  className="d-inline"
                />
                <span>Add to Watch History</span>
              </Button>
              <Button className="me-2">
                <Image
                  src="./src/assets/images/icons/star-icon.png"
                  alt=""
                  className="d-inline"
                />
                <span>Add to Wishlist</span>
              </Button>
              <Button>
                <Image
                  src="./src/assets/images/icons/play-icon.png"
                  alt=""
                  className="d-inline"
                />
                <span>Play Trailer</span>
              </Button>

              <a
                href="./details.html"
                className="link-orange my-3 d-block text-decoration-none"
              >
                More Details &gt;
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
