## Available Scripts

In the project directory, you can run:

### `npm install`
  
To install dependency packages.

### `npm start`

Runs the app in the development mode. 

Of course it is neccessary to first start the server so the frontend requests can actually receive responses and work.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.


## Solution

The application allows browsing github repositories, either a user or organization, by interacting with Github API through the frontend and the backend. 

### Browsing Github repositories

The home page allows the user to input a Github username account, and the frontend sends a request to the backend from where another request is sent to the Github API. When the promise is resolved and the response is received, before it is sent back to the frontend, the backend checks if any of the obtained repositories are already stored in the database as favorite repositories, so it can add a property to each repositorie resource which is going to be deliver to the frontend in order to mark it as favorite. I decided to inplement this little tweak in the solution, instead of showing the index repositories in the frontend and then offer the possibility to check if is included as favorite.

### Adding or removing repo from favorites

If a repository from the list is not showed as favorite, the user can add it to favorites by clicking the star. In this moment, a request is made to the backend and while is being processed, the star button is disabled to prevent further requests until the previous one gets resolved. When the backend receives the request and before adding the repo to favorites, I decided to get the repo data from the Github API, to make sure it has not been modified. To achieve this, the backend sends a new request to the Github API to get the specific repo.

### Pagination

Another cool feature I implemented was the pagination. By default, Github limits the response to 30 records, and also there is a way to fetch a specific page, so I took advantage of this including the page number to the request and build a basic logic to navigate forward a backward in groups of 30.

### Favorites

The second view corresponds to the favorite repositories which has been added by the user, offering the possibility to remove them from the list and database. There is also a detail button (eye icon) which is a feature I could not complete due to the extend of the test.

### Docker

To pull backend image
`docker pull mauvies/repo-zoom:backend`

To pull frontend image
`docker pull mauvies/repo-zoom:frontend`

Or there is another repository which I created to store the docker-compose.yml. At this point I really have no more time to continue working on the test (Friday 21/05/2021 08:57:00), because in a few hours I am leaving with my girlfriend to Granada for her birthday. So, I suggest to create a parent folder with this file (docker-compose.yml) and include the other two projects inside of it (api and frontend). After the following command can be run and it will start the docker container.


### To do

The app is still missing important features such as testing and error handleling, which I have thought about how to implement it, but it woult take much more time. Another cool feature could be filters, since Github API already offers some of them.


