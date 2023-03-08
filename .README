# MoviesApp by Giovanni

## Overview

Movies app gives us ability to search for movies, review movie details and save favorite movies that we like. Application is done only for Android, since it was developed on Windows.

## Functionality

In general movie app contains of next amount of functionality:

- Home screen, with the top rated movies feed
- Search screen, with most popular movies, filter to search by:
  - Title
  - Year
  - Rating
  - Genres
- Favorites screen, with the list of saved movies
- Details screen, with the details for the selected movie such as:
  - Overview of the movie
  - Genres
  - Rating
  - Budget
  - Production companies
  - Cast
- Profile screen, for editing profile data
- Splash screen, viewed before app is loaded

Authentication is managed by serverless functions, which let's us Sign In and Sign Up, with small amount of validations on the backend.

## Technologies

- Common technologies used:
  - React Native
  - Typescript
  - React Navigation (navigation)
    - Stack
    - Bottom tabs
  - Redux (state management)
    - Core
    - Persist
    - Thunk
  - Async Storage (community package for working with async storage)
  - Lottie (for animations)
  - react-native-vector-icons
  - ESlint
- UI Components
  - @react-native-community/checkbox
  - @react-native-community/slider
  - react-native-date-picker
  - react-native-fast-image
  - react-native-spin-picker
- Debugging
  - react-native-flipper
  - redux-flipper

## Screens description

- Home screen (Top rated movies feed)
  - Initially we have 20 movies loaded
  - When scrolling to the end of the list we are able to load more by pressing the button
  - While scrolling we have automatic zoom into the movie which takes most part of the screen
  - When scrolling under the second movie you have the button to navigate you back to the top and hide after the action
  - When pressing the particular movie you are redirected to the movie details screen
  - For images FastImage component is used for the performance optimizations
- Search screen (Popular movies feed)
  - Initially we have 20 movies loaded
  - When scrolling to the end of loaded amount of movies action to fetch more is automatically triggered
  - For the header component of the page we have a search filter:
    - Search by title
    - Button to trigger additional filters
      - Search by year
      - Search by rating
      - Search by genres
      - Clear filter button
      - Search button
- PreAuth screen
  - When not logged in into the app you see this screen with Authenticate button
  - On button press you are redirected to the Sign In screen
- Sign In screen
  - On the Sign In screen you can login with email and password
  - If credentials are invalid you are getting validation error messages
  - Also if you have no account you can navigate to the Sign Up screen
  - On action you see the loader while authenticating
- Sign Up screen
  - On the Sign Up screen you can create your profile
    - Email
    - Password
    - First name
    - Last name
    - Birth date
    - About me
  - If any of required fields is not provided you can see the validation error
  - On action you see the loader while authenticating
- Favorites screen
  - On the Favorites screen we have a list of all saved favorite movies on the device
  - In the list we are able to scroll the item description, when scrolling exactly the text, or we can scroll the list itself when scrolling on images
  - When pressing the movie image we are redirected to the movie details page, and have favorites button filled since this movie is in the favorites data list
  - In the header we have button to clear whole favorites list
- Profile screen
  - On the Profile screen we can modify our profile data, except email, which is disabled
  - From the header component you can log out of the application and get to the pre auth screen
  - On action you have a loader while data is updating
- Movie details screen
  - On this screen all the movie details for the selected movie are displayed by sections:
    - Header
      - Back
      - Save/Un-save favorites button
    - Overview section
      - Poster
      - Release date
      - Description
      - Genres
      - Rating
      - Age rating
      - Original language
      - Votes
    - Budget section
      - General budget spent
      - Revenue
      - Status of the movie
    - Production companies
      - List of all companies which took a part in the production
      - Title and country of the production company
    - Cast
      - Vertically scrollable list with all cast member
      - For each member you can see:
        - Image
        - Name
        - Character in the movie
        - Gender
        - Proficiency

# Start instruction

For the first step you need to install all the dependencies with one of this scripts:

```
yarn
npm install
```

Second step would be to start the metro:

```
yarn start
npm start
```

Last step would be to run the dev build:

```
yarn run android
npm run android
```
