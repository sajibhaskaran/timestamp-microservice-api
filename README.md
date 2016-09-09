# Timestamp Microservice API

### What is this?

This is a microservice API project for Free Code Camp that will accept either a human readable date or a unix formatted date and return a json response with the date formatted as both. If the input is neither it will return null values.

You can test it at https://aqueous-tor-13950.herokuapp.com/

### Usage

https://aqueous-tor-13950.herokuapp.com/August 20, 2016 

https://aqueous-tor-13950.herokuapp.com/1471701715

### Sample Output

{
  normal: "August 20, 2016",
  unix: "1471701715"
}

### Running this project

Simply launch it with node using npm run start or node server.js.
