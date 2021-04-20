# Your Repo Story

Are you as popular on GitHub as you think you are? Well now you can find out! Our repo tracker allows you to search for a particular GitHub user and retrieve their list of repos, including data such as description and the number of forks, stars and watches. A link to the repo is also auto-generated.

This app was created by [@roselynle](https://github.com/roselynle), [@emmanuel-sobamowo](https://github.com/emmanuel-sobamowo) and [@theduckfliesagain](https://github.com/theduckfliesagain) as part of Futureproof's Coding Challenge.

### Installation

-   Clone or download this repo 

### Usage

-   Open your terminal and navigate to the `your-repo-story` folder
-   Run `npm run dev` which should start up the webpage on localhost:8080/
-   Run `npm run test` to start up the unit tests

## Technologies

-   HTML, CSS, React, Webpack, Babel. Refer to package.json file for the list of dependencies.

## Process

-   Create React App and set up file structure from scratch
-   Include the relevant components
-   Make API fetch requests to the GitHub API
-   Perform unit testing
-   Add styling to improve user interface

## Task Requirements

-   [x] Your app should make use of React
-   [x] Your repo tracker should have an input for users to give their GitHub username
-   [x] After submitting their username, use the GitHub API to retrieve that user's list of repos
-   [x] When selecting a repo, a User should be shown some data about that repo eg. issue count, stargazers, forks etc.

## Wins & Challenges

### Wins

-   Making successful calls to the GitHub API in order to retreive the data we wanted
-   Using the react icons library to include icons for forks, stars and watchers
-   Managing to style the page in a 'timeline' format (although repos are displayed in alphabetical order - perhaps sorting by oldest to newst can be a future feature)

### Challenges

-   Coming up with error messages when trying to retrieve user data. This was due to the app attempting to render the UserCard component before the data had been fetched, the bug was later solved
-   Git flow issues due to having to rename components part way through. The components were initially named in camel case whereas react requires it to be in upper case
-   Hitting the API rate limit on a number of occasions whilst building the app

## Bugs

-   No known bugs currently