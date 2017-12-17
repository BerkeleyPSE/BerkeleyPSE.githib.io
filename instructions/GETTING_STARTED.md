# Getting Started

## Table of Contents
- [Contributing](#contributing)
- [Cloning this Repository](#cloning-this-repository)
- [Installing Node & npm](#installing-node-&-npm)
- [How To Contribute](#how-to-contribute)
- [Heroku](#heroku)
- [mLab](#mlab)

## Contributing

You must be a Collaborator on this repository to contribute officially.
As VP of Marketing, you can add a Collaborator by logging into the BerkeleyPSE GitHub account.

Then, click on the `Settings` tab in the navigation bar. Click on the `Collaborators` option in the side bar. Add a Collaborator by their username. This new Collaborator must accept access to contribute to this repository -- they will then have "push access".

Collaborators should contribute to this repository using their personal GitHub account rather than the BerkeleyPSE account.

## Cloning this Repository
To clone this repository, open a terminal window and run
```bash
git clone https://github.com/BekreleyPSE/berkeleypse
```

## Installing Node & npm
Node and npm are required to contribute to this repository.

You can download them both [here](https://nodejs.org/en/download/).

After download, ensure installation. Open a new terminal window, then run:
```bash
node -v # Confirm node is installed
npm -v  # Confirm npm is installed
```

## How to Contribute
Open a terminal and navigate to where you cloned the repository. Then, run:
```bash
cd berkeleypse
npm install # install the package dependencies for the server
cd client
npm install # install the package dependencies for the client
cd ..
npm run dev # this starts the server and client concurrently
```

A new browser window should open `localhost:3000`. Do this manually, if necessary.

## Heroku
[Heroku](#https://heroku.com) is used to deploy this website live at [berkeleypse.org](http://berkeleypse.org).

You must be a Collaborator on application to deploy it. As VP of Marketing, you can add a Collaborator by logging into the Heroku account.

Collaborators must use their personal Heroku accounts.

Click the `Access` tab, then `Add a Collaborator`. Enter the email of the future Collaborator.

Once you are given access a Collaborator, open a terminal and navigate to where you cloned this repository. Then, run:
```bash
cd berkeleypse
git add remote heroku https://git.heroku.com/berkeleypse.git
```

Ensure this remote was added:
```bash
git remote
# heroku
# origin
```

You must now download the [Heroku command line interface](https://devcenter.heroku.com/articles/heroku-cli). This will make it simple to deploy to Heroku via your terminal.

Once installed, navigate to where you cloned this repository. Then, run:
```bash
cd berkeleypse
heroku login
# Enter your Heroku username
# Enter your Heroku password
```
These must be the credentials given Collaborator access.

## mLab
Add yourself as an accessor on the mLab MongoDB instance for `pse-website-dev`.
- Create a file `dev.js` in the `config` directory.

In this file, copy and paste the following code EXACTLY as follows:

```javascript
module.exports = {
  mongoURI: 'mongodb://{USERNAME}:{PASSWORD}@ds113736.mlab.com:13736/pse-website-dev'
}
```
Replace `{USERNAME}` and `{PASSWORD}` with your personal user credentials.

For example, if your username is `rahul` and your password is `lovesPSE`, your `dev.js` file will look like:
```javascript
module.exports = {
  mongoURI: 'mongodb://rahul:lovesPSE@ds113736.mlab.com:13736/pse-website-dev'
}```

These steps are required for you to properly develop the forms on the `Application` page and ensure connection to the database.
