# The Flask Test

## Introduction

This project is divided into 2 parts:

1. frontend: This is the frontend for accessing/using the API, written using React, Redux and Bootstrap.

2. the_flask_test: This is the backend flask api service.

## API Docs

Base path: `/api/v1`

- GET `/students` : Get all students
- POST `/student` : Add new student
- PUT `/student/<uuid>` : Update student by id
- DELETE `/student/uuid` : Delete student by id

## Getting up and running

Before we begin with the setup process I would like to point that we've the deployed version up and running and you can use it to try out with out going into any hassels:

- API: https://the-flask-test.herokuapp.com/api/v1/
- APP: https://frontend.shekhar.now.sh/

### Default Ports

- API: 8080
- App: 3000

### With Docker (recommended)

1. Clone the Repo
2. Go into the directory with: `cd the-flask-test`
3. Now run: `docker-compose up`
4. You can now access the below urls:
    - API: http://localhost:8080/api/v1
    - App: http://localhost:3000

#### Known issues

The react frontend sometimes does not automatically refreshes/updates the DOM. A manual reload/refresh is required to update the data. This issues seems related to docker
and nginx as we were unable to reproduce the same in production.

### and without Docker

#### Database

Install and start the Postgres 11 database server.
And update the `DATABASE_URL` accordingly in `.env` file

#### API

1. Clone the Repo
2. (Optional) Install and activate [venv](https://virtualenv.pypa.io/en/latest/installation.html)
3. Install the dependencies with `pip -r requirements.txt` or using [Poetry](https://python-poetry.org/) with `poetry install`
4. We need to setup some environment variables so please take a look at `example.env` file and if everything looks ok then just move it to an `.env` file using command: `mv example.env .env`
5. Prepare the database using: `make db-upgrade`
6. To start the dev server: `make dev-start` or to run in prod using gunicorn run: `make prod-start`

#### APP

1. Assuming you are in the project root `cd frontend`
2. Install dependencies using: `npm install` or `yarn install`
3. Start the app: `npm run start` or `yarn run start`
