# Contributing

## Table of Contents
- [Contributing](#contributing)
- [How To Contribute](#how-to-contribute)
- [Cloning this Repository](#cloning-this-repository)
- [Installing Node & npm](#installing-node-&-npm)
- [Heroku](#heroku)
- [MongoDB](#mongodb)

## Contributing

I recommend all Collaborators on this repository use their personal GitHub account to contribute to this repository, rather than the BerkeleyPSE account. 

You must be a Collaborator on this repository to contribute officially.
As VP of Marketing, you can add a Collaborator by logging into the BerkeleyPSE GitHub account.

Then, click on the `Settings` tab in the navigation bar. Click on the `Collaborators` option in the side bar. Add a Collaborator by their username. This new collaborator must accept access to contribute to this repository -- they will then have "push access".

## How to Contribute
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

## Cloning this Repository
To clone this repository, open a terminal window and run
```bash
git clone https://github.com/BekreleyPSE/berkeleypse
```

## Installing Node & npm
Node and npm are required to contribute to this repository.

You can download them both [here](https://nodejs.org/en/download/)

After download, ensure installation. Open a new terminal window, then run:
```bash
node -v # Confirm node is installed
npm -v  # Confirm npm is installed
```

## Heroku

## MongoDB

