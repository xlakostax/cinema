import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import firebaseConfig from "../FirebaseConfig.js";

import {
  Main,
  Wrapper
} from "../styles/styled";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  const [button, setButton] = useState({
    disabled: false,
  })

  const onChangeHandler = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value)
    console.log(credentials.email, credentials.password)
    setCredentials({
      ...credentials,
      [name]: value /* The ES6 computed property name syntax is used to update the state key corresponding to the given input name:*/
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Main>
      <Wrapper className="wrapper">
      <h1>Sign In:</h1>
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
            <button type="submit" name="send" disabled={button.disabled}>
              Send
            </button>
          </div>
        </form>
      </Wrapper>
    </Main>
  );
};

export default SignIn;
