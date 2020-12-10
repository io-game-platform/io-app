# io-app
Web-based platform for hosting io games. io games are simple web-based projects where you 
compete against a large number of bots in a sort of 100 player free for all, single winner type game. For example, agar.io and paper.io. 
Only a small percentage of games in this genre have achieved enough success to make their creators rich, 
thus in order to profit these games need to be pumped out like a factory.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The backend consists of Express and Node and is built using npm. We use knex.js to interface with a mySQL database.

## Usage

### Requirements

You will need to have Node and npm installed in order to run this app.
Make sure to run:

#### `npm install`

in order to load all the required Node modules.

### Running

To start the front-end, `cd` into the project directory `io-app`, then run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

In a separate terminal instance, `cd` into the `io-app/api` directory and run:

#### `node app.js`

which will start up the Express app on localhost:8081.
### Navigation

- [/games](http://localhost:3000/games): A catalog of all the games displayed in a card format
- [/games/1](http://localhost:3000/games/1): Details page for the game corresponding to the id provided in the URL. 
An id of 1 is used as an example here.

## Structure

- `api`: Holds code for the API, such as endpoints and queries
    - `queries`: Helper classes/methods for issuing mySQL queries through knex
    - `routes`: Defines endpoints for requests from the client, often uses helpers from `queries`
    - `app.js`: Sets up the Express app and defines routers for `routes` endpoints
- `src`: Holds code for the front-end, such as components and styling
    - `components`: Reusable components that can be shared across multiple pages.
    Each component is paired with a `.scss` file for styling
    - `views`: pages of the site, often using `components`,
     along with fetch requests to the API to retrieve and display data
    - `App.js`: Defines the URL routes to each page
    
## Hosting

To host this site we used a Fedora Server Machine running Nginx. To host the server properly, Nginx configuration
must be done correctly, otherwise the site and the api will have issues communicating. In the hosting folder is the
nginx.conf and io.binaryaura.net.conf nginx configuration files relavent to hosting.

Once io-app is cloned the games must be installed in games/#/ where # is the game id found in the database. Then
the app can be started with:

```bash
npm install
pm2 start api/app.js
```

Note you can also use node instead of pm2.
