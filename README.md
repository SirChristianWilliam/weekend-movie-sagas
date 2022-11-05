#  Redux Sagas and a Movie List

## Description

This project was completed over the course of three days. The information is pulled from the database to display each movie and title on the home screen. When a movie poster is clicked on it opens a details view for that movie and displays title, description, genres and a bach button. To do this I used url params and two queries. One query to get movie information and another to get genres. I map through the genres to display in a flexbox side by side.

I styled using vanilla CSS because I still need practice with it. I am getting better at layouts and controlling the responsiveness of the page. I still need to practice overall designing. I am happy with how it turned out though.

I also went through the database.sql and fixed the genre assignments since they were non-sensical (ie. starwars was a musical).

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [React.js]
- [Redux]
- [Sagas]
- [Express]
- [PostgreSQL]

## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. View the movie list.
2. Click on movie you would like details for.
3. Read details then return home with back button.


## Built With

Built using React, Redux, Sagas, Node.js, Express, BodyParser, axios, React-Router-Dom and Redux-Logger


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you to Tormod for an assist on an async bug I was having.

## Support
If you have suggestions or issues, please email me at [samuel.v.phipps@gmail.com]