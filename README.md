# React GitHub User Repositories Viewer

A little react application for show GitHub Repositories of a user.
Type in a GitHub user and click on _Change User_. As result, you will get a list
of the user's public repositories with some additional information, e.g. stars count
and forks count.

## Getting Started with react-github-user-repositories-viewer

Clone the repository:
```
git clone git@github.com:dlabas/react-github-user-repositories-viewer.git
```

Go to the project root directory:

```
cd react-github-user-repositories-viewer
```

Install dependencies:
```
npm install
```

Run local development environment:
```
npm start
```

## Coding Task

```
Build a small React app which shows the public Github repositories of a user.
The app should show an input field where you can enter a Github username and 
a submit button. Please consider giving the user feedback while getting the 
data in the background.
 
The repositories should be shown as a list and for each repo the following 
information should be displayed: Repository name, the number of stars and 
forks. Each Repository item in the list should be clickable and open the 
repository on Github.

Optionally:
- There should be a reset button to clear the repository list
- A username can be provided as a URL parameter while opening the application
and automatically show the users repositories

Github API documentation https://developer.github.com/v3/repos/#list-user-repositories

Deliver the code as a public Github repository. Tests should be provided with the
code and can be unit or E2E (e.g. cypress.io) tests, deciding for one of them is
enough. Try to describe in a README.md file to the best of your ability what the
project does and how to run it.
 
You can use create-react-app to initialize the repository and the task should
take 2-3 hours.
```