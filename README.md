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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

To run locally one needs to:
1. Create a project in Firebase console. https://firebase.google.com/docs/web/setup
2. Get a config snippet like

  ```
    const firebaseConfig = {
      apiKey: "AIzaSyCGz.......JULeOSwrjmG4kE",
      authDomain: "valamis-cinema.firebaseapp.com",
      databaseURL: "https://<database-name>.firebaseio.com", //add this row after database create
      projectId: "valamis-cinema",
      storageBucket: "valamis-cinema.appspot.com",
      messagingSenderId: "9609.......2380",
      appId: "1:.......a7ea87b653bd4e9",
      measurementId: "G-Z.......B8E"
    };
  ```
3. Add authentication to a project and choose 
4. Add database
5. Create JSON file with data like:

  ```
  {
    seats:[ 
      {
        "bookedBy" : "",
        "id" : "1",
        "isBooked" : false
      }, {
        "bookedBy" : "",
        "id" : "2",
        "isBooked" : false
      },{
        ...
      }, {
        "bookedBy" : "",
        "id" : "10",
        "isBooked" : false
      }
    ]
  }
  ```
6. Import JSON to firebase database
7. Create a FirebaseConfig.js ins src folder and fill with the code below:
```
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyCGz.......JULeOSwrjmG4kE",
      authDomain: "valamis-cinema.firebaseapp.com",
      databaseURL: "https://<database-name>.firebaseio.com", //add this row after database create
      projectId: "valamis-cinema",
      storageBucket: "valamis-cinema.appspot.com",
      messagingSenderId: "9609.......2380",
      appId: "1:.......a7ea87b653bd4e9",
      measurementId: "G-Z.......B8E"
    };

  let firebaseConfig = firebase.initializeApp(config);
  let database = firebase.database();

export {firebaseConfig, database};
```





