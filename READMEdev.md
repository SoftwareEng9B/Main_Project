## _**IMPORTANT NOTE**_ Before making any changes:
*Never work/change anything on master branch
*Run `npm install` and then `npm run install-all`

#### if starting new work
- On desired/master (typically master) branch, pull from desired/master branch
- Create a branch from desired/master branch and name the branch with your initials and the feature desired
    - Ex: `db_createScraper`
- Start working on created branch

#### if continuing work
- On desired branch, pull from desired branch being worked on
- Continue working


## Scenarios

### dev

This is when you are coding and therefore prefer to test changes quickly.
- To ONLY test the server/Express/API/backend/etc, then run `npm run server`
- To ONLY test the client/React/UI/frontend/etc, then run `npm run client`
- To test both server and client together, you may run both scripts seperately or run `npm run dev`

### pre-prod

This is when you need to test entire project officially or before going into prod.
- Run 'build' script
- Run `npm run start`
Open [http://localhost:5000](http://localhost:5000) to access the project in the browser.

### prod

This is when you need to make the project public (put on public website).
- Make heroku account
    - https://heroku.com/
- Install 'heroku'
    - https://devcenter.heroku.com/articles/heroku-cli
- Make sure all changes on branch are committed
- Run `heroku create`
- (not on master branch) Run `git push heroku [branch]:master`
    - (on master branch) Run `git push heroku master`


## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.
Open [http://localhost:5000](http://localhost:5000) to access the server in the browser.


### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to access the server in the browser.



### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
