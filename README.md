# Berkeley Pi Sigma Epsilon
A website for UC Berkeley's marketing & business fraternity Pi Sigma Epsilon, Zeta Chi Chapter.

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
  - [Packages Used](#packages-used)
  - [Authors](#authors)

## Getting Started

### GitHub

### Installing Node & npm

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

### How to Contribute
- Clone the repository as explained in [Cloning this Repository](#cloning-this-repository)
- Open a terminal and navigate to where you cloned the repository.
- Run:
```bash
cd berkeleypse
npm install // install the node_modules for the server
cd client
npm install // install the node_modules for the client
cd ..
npm run dev // this starts the server and client concurrently
```
- A new browser window should `localhost:3000`. Do this manually, if necessary.

### Immediate Changes

### Changes within a Semester
- Open & close the recruitment application 
- When the recruitment application is closed, be sure to update the Pre-Registration form and mLab database with the next semester

### Changes between Semesters
- Update the recruitment timeline
- Update the brotherhood page with the newly-crossed class members
- Update the executive board page with the new members (if necessary)

### Future Changes

## Appendix

### Packages Used

This project uses the following npm packages. 

#### Client
- [aphrodite]
- [axios]
- [query-string]
- [react-animations]
- [react-burger-menu]
- [react-dd-menu]
- [react-slick]
- [react-social-media-bar]
- [react-table]
- [redux-form]

#### Server
- [body-parser]
- [concurrently]
- [express]
- [lodash]
- [mongodb]
- [mongoose]
- [nodemon]

### Authors
- Rahul Rangnekar
  - B.A. Computer Science & B.A. Economics, UC Berkeley 2018
  - Vice President of Marketing, PSE Zeta Chi, 2016-2017
  - [GitHub](https://github.com/rahrang)
  - [LinkedIn](https://linkedin.com/in/rahrang)
  - [Website](http://rahrang.xyz)
