# Validation Form using React and Passport.js

Application to view posts once the user logs in through a validation form that provides the option to log in with the google, github or facebook account.

It contains the following pages:

  - Home
  - Login / Sign In
  - Post

## Technologies used

- Node & Express
- Passport.js
- React

## Setup

This project requires the following dependecies:
    
    "cookie-session": "^2.0.0"
    "cors": "^2.8.5"
    "dotenv": "^16.0.1"
    "express": "^4.18.1"
    "nodemon": "^2.0.16"
    "passport": "^0.5.3"
    "passport-facebook": "^3.0.0"
    "passport-github2": "^0.1.12"
    "passport-google-oauth20": "^2.0.0"
    "@testing-library/jest-dom": "^5.15.0"
    "@testing-library/react": "^9.5.0"
    "@testing-library/user-event": "^7.2.1"
    "react": "^17.0.0"
    "react-dom": "^17.0.0"
    "react-icons": "^3.11.0"
    "react-router-dom": "^6.3.0"
    "react-scripts": "^4.0.3"
    
To install the project, just download it directly from terminal with "git clone https://github.com/JEDolce/validation-form-passport.git", 
and then run npm install or yarn add. 

After installing the project you'll need to set the env variables GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, FACEBOOK_APP_ID and FACEBOOK_APP_SECRET on the server side.
