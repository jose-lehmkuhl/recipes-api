# Recipes API

Simple api that returns recipes based on ingredients sent by user

## Prerequisites
You'll need a couple of things to install/run the server:
  - node and npm
  - a Giphy api key named `GIF_API_KEY` wich should be put inside an .env file in the project root directory
  - Docker (optional)

## Getting Started

- Download/Clone the project from this repository.
    - While on the project directory in your terminal:
        - run `docker build . -t recipes-api`
        - then `docker run -p 8000:8000 recipes-api`
    - or, in case you dont want to run with docker
        - `npm i`
        - `npm start`
- The server will run at [http://localhost:8000/](http://localhost:8000/).



## Running the tests

docker runs the tests automatically on image build, otherwise you can run `npm test` after `npm i` on the project directory to run the tests.

## Using the api
API responds to a GET request at `/recipes/`, expecting a `i` query parameter that refers to comma separated ingredients(3 at most), your endpoint should end up looking like `/recipes/?i=cheese,onion`

## Folder Structure

    .
    ├── src                     # Source files
    │   ├── controllers         # App Logic related files
    │   ├── routes              # Routing related files
    │   └── services            # External api calls file
    └── test                    # Automated tests (**.spec.js)

## License

This project is licensed under the MIT License.
