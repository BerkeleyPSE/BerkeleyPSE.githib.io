# Berkeley Pi Sigma Epsilon
The website for UC Berkeley's marketing & business fraternity Pi Sigma Epsilon, Zeta Chi Chapter.

## Table of Contents
- [Getting Started](#getting-started)
  - [Github](#github)
  - [Installing Node & npm](#installing-node-&-npm)
  - [Cloning this Repository](#cloning-this-repository)
  - [Heroku](#heroku) 
- [File Structure](#file-structure)
  - [The Client](#the-client)
  - [The Server](#the-server)
  - [The Database](#the-database)
- [Design Choices](#design-choices)
  - [High Level Overview](#high-level-overview)
  - [Why This Project](#why-this-project)
  - [Why React](#why-react)
  - [Why Heroku](#why-heroku)
  - [Why Aphrodite](#why-aphrodite)
  - [Redux](#redux)
- [Contributing](#contributing)
  - [How to Contribute](#how-to-contribute)
  - [Immediate Changes](#immediate-changes)
  - [Changes within a Semester](#changes-within-a-semester)
  - [Changes between Semesters](#changes-between-semesters)
  - [Future Changes](#future-changes)
- [Appendix](#appendix)
  - [Packages Dependencies](#package-dependencies)
  - [Authors](#authors)

## Getting Started

### GitHub
- Create a personal GitHub account, if you do not already have one
- As VP of Marketing, add your personal GitHub account as a collaborator (follow the directions in [Contributing](#contributing))

### Installing Node & npm
Node and npm are required to contribute to this repository.

You can download them both [here](https://nodejs.org/en/download/)

After download, ensure installation. Open a new terminal window, then run:
```bash
node -v # Confirm node is installed
npm -v  # Confirm npm is installed
```

### Cloning this Repository
To clone this repository, open a terminal window and run
```bash
git clone https://github.com/BekreleyPSE/berkeleypse
```

### Heroku

## File Structure
This project is structured as such
```
server
  client
    src
      actions
      components
      reducers
      stylesheets
      index.js
    public
    package.json
    static.json
  config
  models
  routes
  index.js
  package.json
  README.md
  .gitignore
```

`server` is the implicit top-level directory of the repository. 

### The Client

### The Server

### The Database

## Design Choices

### High-Level Overview

### Why This Project

### Why React

### Why Heroku

### Why Aphrodite

### Redux

## Contributing

I recommend all Collaborators on this repository use their personal GitHub account to contribute to this repository, rather than the BerkeleyPSE account. 

You must be a Collaborator on this repository to contribute officially.
As VP of Marketing, you can add a Collaborator by logging into the BerkeleyPSE GitHub account.

Then, click on the `Settings` tab in the navigation bar. Click on the `Collaborators` option in the side bar. Add a Collaborator by their username. This new collaborator must accept access to contribute to this repository -- they will then have "push access".

### How to Contribute
Once added as a Collaborator on this repository:
- Clone the repository as explained in [Cloning this Repository](#cloning-this-repository)
- Open a terminal and navigate to where you cloned the repository.
- Run:
```bash
cd berkeleypse
npm install # install the node_modules for the server
cd client
npm install # install the node_modules for the client
cd ..
npm run dev # this starts the server and client concurrently
```
- A new browser window should `localhost:3000`. Do this manually, if necessary.

### Immediate Changes
- Connect the mLab MongoDB databases to Google Spreadsheets for easier collaboration

### Changes within a Semester
- Open & close the recruitment application 
- When the recruitment application is closed, be sure to update the Pre-Registration form and mLab database with the next semester

### Changes between Semesters
- Update the recruitment timeline
- Update the brotherhood page with the newly-crossed class members
- Update the executive board page with the new members (if necessary)

### Future Changes
- An "Experiences" table should be added to each brother's profile in the `Brother` component
- An "Internships" table should be added to the `Careers` page

## Appendix

### Package Dependencies

This project depends on the following npm packages. 

#### Client
- [aphrodite](https://github.com/Khan/aphrodite)
- [axios](https://github.com/axios/axios)
- [query-string](https://github.com/sindresorhus/query-string)
- [react-animations](https://github.com/FormidableLabs/react-animations)
- [react-burger-menu](https://github.com/negomi/react-burger-menu)
- [react-dd-menu](https://github.com/mlaursen/react-dd-menu)
- [react-slick](https://github.com/akiran/react-slick)
- [react-social-media-bar](https://github.com/rahrang/react-social-media-bar)
- [react-table](https://github.com/react-tools/react-table)
- [redux-form](https://github.com/erikras/redux-form)

#### Server
- [body-parser](https://github.com/expressjs/body-parser)
- [concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [express](https://github.com/expressjs/express)
- [lodash](https://github.com/lodash/lodash)
- [mongodb](https://github.com/mongodb/node-mongodb-native)
- [mongoose](https://github.com/Automattic/mongoose)
- [nodemon](https://github.com/remy/nodemon)

### Authors
- Rahul Rangnekar
  - B.A. Computer Science & B.A. Economics, UC Berkeley 2018
  - Vice President of Marketing, PSE Zeta Chi, 2016-2017
  - [GitHub](https://github.com/rahrang)
  - [LinkedIn](https://linkedin.com/in/rahrang)
  - [Website](http://rahrang.xyz)
