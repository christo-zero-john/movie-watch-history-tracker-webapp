<!-- Movie watch history tracker web app is a simple web app built on React JS. Using this web app users could track their movie watch history. It uses the TMDB database to fetch movies and local storage to save watched movie lists. Also the web app has a simple movie recommendation feature. -->


# ToDo

## Core functionalities

### 30 04 2025

- Create a new page for user dashboard ✅
- When user clicks on a search button open a form to search for the movie
- When user clicks on search button search for the text in tmdb and save the results in a `sarchResult` state ✅
- Display the search results in a list. ✅

### 1 05 2025

- Implement pagination for the search results. ✅
- Implement functionality for user to navigate through different pages of the search results. ✅
- When user clicks on a movie in the search results, add that movie to the watch history. ✅
- When user clicks on a movie in the search results, add that movie to the wishlist. ✅

### 02 05 2025

- Implement functionality for displaying movies in wish list and watch history. ✅

- Implement functinality to save movie in indexDB, so that movie data an be reused when needed. ✅
- Implement the user dashboard. In the user dashboard, show
  1. Movies in watch history ✅
  2. Movies in wish list ✅

## UI/UX

- Start oring on main UI. Implement the original design on the webapp.

### 02 05 2025

- Work on the Navbar. Implement the navbar design. ✅
- Work on the dashboard and implement ✅
  - user statistics section ✅
  - Add movie button ✅
  - watched movies section ✅
  - My genres section ✅

### 03 05 2025

- Continue: Work on the dashboard and implement
  - Movie item card
    - Basic item card ✅
    - Action buttons of item card ✅

### 04 05 2025

- Setup movie details page ✅ `overdue: 05 05 2025`
- Implement user data and user stats management ✅ `overdue: 05 05 2025`

# To Fix

- Userdata in statistics

  - Userdata in user stats is not initialized properly. It is set using a setTimeout method. If userData.initializeUserData takes more than takes more than 500ms, then the data will be incorrect.
  - Userdata in user stats in user dashboard wont update or listen to changes that happens in UserData.data.

- Fix how icons are imported.
  - Create a common Icon module and import images into it.
  - Whenever an icon is need to be used, refer to the Icon module.


Hello Guys,
I am very much happy to say that my very first webapp that was based on React JS is finally completed and is deployed for public usage. 