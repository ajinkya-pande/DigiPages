# digiPages - Books and Journals Webpage

<p>This website is developed to demonstrate the use and functioning of REST API, User authenticaion and database connectivity in MERN stack.</p>


## Overview
<ul>
    <li>The frontend is developed in REACT.js and styling in CSS.</li>
    <li>The backend is developed in Node.js, Express.js and Mongodb.</li>
    <li>The react app uses the Google Books API to fetch the data for the search and display the output to the user.</li>
    <li>The backend is used for the storage and authentication of the user data during the login.</li>
</ul>

## Running
<ul>
    <li>To run the app, you must have Node.js installed in your system.</li>
    <li>The frontend and backend must be started seperately.</li>
    <li>Frontend by default runs on localhost:3000 and backend on localhost:5000.</li>
    <li>During the authentication, the post request is sent to the given API server present on localhost:5000 , i.e., the server side.</li>
    <li>In the backend, you must have the [Mongodb Atlas](https://www.mongodb.com/cloud/atlas/register/) account active to create and connect to the database. You must replace the atlas connect URL with your database connection URL.</li>
    <li>In the frontend, you must replace the Google Books API key with your personal API key for authentication. The API key is free, and can be easily generated from [Google Cloud API](https://console.cloud.google.com/apis/).</li>
    <br>
    <li>Start the frontend using npm start and backend using npx nodemon index.js</li>
</ul>

## Output
