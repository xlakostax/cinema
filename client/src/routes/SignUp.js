import React, {useState} from "react";

/* Import libraries */
import {Redirect} from 'react-router-dom';

/* Import providers and configs*/
import {firebaseConfig} from "../FirebaseConfig";

/* Import styles */
import {
  Wrapper,
  Main
} from "../styles/styled";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  const [button, setButton] = useState({
    disabled: false,
  })

  const [currentUser, setCurrentUser] = useState(null)

  const onChangeHandler = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    // console.log(name, value)
    // console.log(credentials.email, credentials.password)
    setCredentials({
      ...credentials,
      [name]: value /* The ES6 computed property name syntax is used to update the state key corresponding to the given input name:*/
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setButton({
      disabled: true
    });
    let password = credentials.password;
    let email = credentials.email;
    firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // console.log(user)
      setCurrentUser(user)
    })
    .catch((error) => {
      alert(error.message)
      setButton({
        disabled: false
      });
    });
  };

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Main>
      <Wrapper className="wrapper">
        <h1>Sign up:</h1>
        <br />
        <form onSubmit={onSubmitHandler}>
          <p>
            <label>
              Your email:
              <input
                id="email"
                type="email"
                name="email"
                value={credentials.email}
                onChange={onChangeHandler}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Your password:
              <input
                id="password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={onChangeHandler}
                required
              />
            </label>
          </p>
          <div>
            <button type="submit" name="signup" disabled={button.disabled}>
              Sign Up
            </button>
          </div>
        </form>
      </Wrapper>
    </Main>
  );
}

export default SignUp;
