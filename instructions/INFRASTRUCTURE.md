# Infrastructure

## Table of Contents
- [React](#react)
  - [Aphrodite](#aphrodite)
  - [Redux](#redux)
- [Node](#node)
- [MongoDB](#mongodb)
- [Zapier](#zapier)
- [Heroku](#heroku)
- [GoDaddy](#godaddy)
- [Git & GitHub](#git-&-github)

## React

React -- [a JavaScript library](https://reactjs.org/) -- is used on the front-end of this website. It combines regular HTML to structure components and JavaScript for logic to render the components. The website's creator (Rahul Rangnekar) chose React for quite a few reasons:

1. He learned React during a summer internship and decided that migrating code from separated HTML, CSS, and JavaScript to the React blend would make the website easier to develop for himself and future contributors.
2. React is easier to scale with a library than with regular HTML, CSS, and JavaScript individually. Components are reusable, making for far less repetitive code.
3. React is widely used in industry -- developing this website gives brothers experience with React.
4. React is maintained by Facebook, and it has a wonderful developer community.

### Aphrodite
Aphrodite, [developed by Khan Academy](https://github.com/Khan/aphrodite) is a tool for writing CSS-in-JS. We chose to use it because we found it easier to declare styles in the same file/component in which they are used, rather than importing a CSS file for every component.

### Redux
[Redux](https://redux.js.org/) is a "predictable state container". It's used in this website along with [Redux Form](https://redux-form.com/7.2.0/) for the `ApplicationForm` and `RegForm` prospective member applications. The `app-reducer` redux store holds information for each form until it is submitted to the back-end and into the MongoDB.

## Node
Our simple back-end server is built on [Node](https://nodejs.org/en/) via [Express](https://expressjs.com/).

## MongoDB
We use a [MongoDB](https://www.mongodb.com/) database hosted by [mLab](https://mlab.com) to store our `ApplicationForm` and `RegForm` responses.

## Heroku
[Heroku](https://heroku.com) is used to deploy our website to [berkeleypse.org](http://berkeleypse.org). It's free, easy-to-use via its command line interface, and supports dynamic websites. The final reason is why we migrated from GitHub Pages to Heroku -- we needed a server to receive application responses. Heroku was the best choice. 

## GoDaddy
The website domain is hosted by [GoDaddy](https://www.godaddy.com/).

## Git & GitHub
Git is a version control system. It tracks different versions of our code, synchronizes them across machines, and makes for easy collaboration with others.
[Here's a great guide](https://git-scm.com/book/en/v1/Getting-Started) to Git. GitHub hosts Git as a service.