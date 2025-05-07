import placeholder_image from "/src/assets/images/icons/image-placeholder.png";
import movie_in_watch_history_icon from "../assets/images/icons/movie-in-watch-history.png";
import add_to_watch_history_icon from "../assets/images/icons/add-to-watch-history.png";
import movie_in_wishlist_icon from "../assets/images/icons/movie-in-wishlist.png";
import add_to_wishlist_icon from "../assets/images/icons/add-to-wishlist.png";
import more_actions_btn_icon from "../assets/images/icons/more-actions-btn.png";
import more_details_icon from "../assets/images/icons/more-details.png";
import add_movie_btn_icon from "../../assets/images/icons/add-movie-btn.png";
import go_back_icon from "../../assets/images/icons/go-back-icon.png";

/**
 * Module used to manage app icons
 */
class Icons {
  constructor() {
    if (!Icons.instance) {
      Icons.instance = this;
    }

    this.placeholder_image = placeholder_image;
    this.movie_in_watch_history_icon = movie_in_watch_history_icon;
    this.add_to_watch_history_icon = add_to_watch_history_icon;
    this.movie_in_wishlist_icon = movie_in_wishlist_icon;
    this.add_to_wishlist_icon = add_to_wishlist_icon;
    this.more_actions_btn_icon = more_actions_btn_icon;
    this.more_details_icon = more_details_icon;
    this.add_movie_btn_icon = add_movie_btn_icon;
    this.go_back_icon = go_back_icon;

    return Icons.instance;
  }
}
export default new Icons();
