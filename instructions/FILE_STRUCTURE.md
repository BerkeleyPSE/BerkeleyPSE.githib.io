# File Structure

This project is structured as such
```
berkeleypse
  instructions/
  client/
    src/
      actions/
      containers/
      reducers/
      stylesheets/
      index.js
    public/
      images/
      index.html
    package.json
    static.json
  config/
  models/
  routes/
  index.js
  package.json
  README.md
  .gitignore
```

`berkeleypse` is the top-level directory and name of this GitHub repository.

The `instructions` directory contains information on this project, including how to get started, contribute to this website, and make changes. All files in this directory are markdown (`.md`) and easily viewable in GitHub.

**The `client` directory and all sub-directories and files contain all code for the front-end.**

The `actions` and `reducers` directories contain the Redux actions and reducers, used solely for the `ApplicationForm` and `PreregistrationForm` components.

The `containers` directory contains all components used to build this website. You'll make the majority of your changes throughout files in this directory.

The `stylesheets` directory contains styles needed to modify third-party components (e.g. `react-dd-menu`) and any other styles that are used throughout the website and can be declared once in a single file.

`index.js` is the root of the front-end of this application.

The `public` directory contains all assets public to users.

The `images` directory contains all images used throughout this website.

`index.html` contains website metadata, as well as any non-npm libraries (e.g. FontAwesome, Google Fonts) used.

`package.json` contains all dependencies and scripts for the front-end. 

**The following files and directories consist of the back-end of this website.**

The `config` directory contains logic to determine which keys to use to transact with the MongoDB database. If in development (`localhost:3000`), the keys in `dev.js` will be used. If in production ([berkeleypse.org](http://berkeleypse.org)), the keys in `prod.js`, which are stored in the Heroku application, are used. You should **never** need to modify `keys.js`.

The `models` directory contains files with information on how the `ApplicationForm` and `PreregistrationForm` fields are structured on the front-end __and__ in the MongoDB database.

The `routes` directory contains endpoints for the `ApplicationForm` and Registration form (`PreregistrationForm` on the front-end, `RegForm` on the back-end).

`index.js` is the root of the back-end of the website. All page changes, endpoint requests, etc. are routed through this file.

`package.json` contains all dependencies and scripts for the back-end. `nodemon` and `concurrently` are development dependencies -- they're helpful for developing the website but not necessary in the production version. 