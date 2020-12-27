# "The Cinema" application
Available at: https://valamis-cinema.web.app/

Allows to:
1. Authenticate (Sign up / sign in)
2. Book a seat in a mock cinema

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Specifications
1. React: hooks, context 
2. styled-components
3. Firebase:
  3.1 Firebase Authentication (for authentication purposes)
  3.2 Firebase Database (for data storing)
  3.3 Firebase Hosting (for the app hosting)

To run locally one needs to (for more information, please, use https://firebase.google.com/docs/web/setup):
1. Create a Firebase account and add a project. In the example:
  Project name: test
  Project ID: test-ae5d0 (auto generated)
2. Add Firebase to the app using the web option (</>).
3. Specify an authentication method. Authentication -> Get started. This time use the email and password method.
4. Create a database with Realtime Database in test mode. Realtime Databas -> Get started
5. Create JSON file with data like:

  ```
  {
    "seats": [ 
      {
        "bookedBy" : "",
        "id" : "1",
        "isBooked" : false
      }, 
      {
        "bookedBy" : "",
        "id" : "2",
        "isBooked" : false
      }, 
      {
        "bookedBy" : "",
        "id" : "3",
        "isBooked" : false
      }, 
      {
        "bookedBy" : "",
        "id" : "4",
        "isBooked" : false
      }, 
      {
        "bookedBy" : "",
        "id" : "5",
        "isBooked" : false
      }, 
      {
        "bookedBy" : "",
        "id" : "6",
        "isBooked" : false
      },
      {
        "bookedBy" : "",
        "id" : "7",
        "isBooked" : false
      }, 
      {
        "bookedBy" : "",
        "id" : "8",
        "isBooked" : false
      }, 
      {
        "bookedBy" : "",
        "id" : "9",
        "isBooked" : false
      }, 
      {
        "bookedBy" : "",
        "id" : "10",
        "isBooked" : false
      } ]
  }
  ```
6. Import JSON to firebase database. Database is ready.
7. Create a new file in the following location – src/FirebaseConfig.js
8. Get a config snippet: Project Overview -> Settings -> General -> Firebase SDK snippet -> Config

  ```
    const firebaseConfig = {
      apiKey: "AIzaSyDpUXczaZefA9vhzbpz6OOI1Gl7PsmpeLY",
      authDomain: "test-ae5d0.firebaseapp.com",
      databaseURL: "https://test-ae5d0-default-rtdb.firebaseio.com",
      projectId: "test-ae5d0",
      storageBucket: "test-ae5d0.appspot.com",
      messagingSenderId: "1037763320253",
      appId: "1:1037763320253:web:f06d3d7d1eeadb093adad4",
      measurementId: "G-TV29WKRGK9"
    };
  ```

7. In FirebnseConfig.js add the code below with the database path:
```
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
      apiKey: "AIzaSyDpUXczaZefA9vhzbpz6OOI1Gl7PsmpeLY",
      authDomain: "test-ae5d0.firebaseapp.com",
      databaseURL: "https://test-ae5d0-default-rtdb.firebaseio.com",
      projectId: "test-ae5d0",
      storageBucket: "test-ae5d0.appspot.com",
      messagingSenderId: "1037763320253",
      appId: "1:1037763320253:web:f06d3d7d1eeadb093adad4",
      measurementId: "G-TV29WKRGK9"
    };
  
  let firebaseConfig = firebase.initializeApp(config);
  let database = firebase.database();

export {firebaseConfig, database};
```
8. In the project directory, you can run:
  ### `npm start`
  This runs the app in the development mode.
9. ...
10. Profit!