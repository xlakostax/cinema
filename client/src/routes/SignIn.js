import React, {
  useContext,
  useState
} from "react";


/*Import libraries*/
import {Redirect} from "react-router-dom";

/*Import providers and configs*/
import {AuthContext} from "../components/AuthProvider";
import {firebaseConfig} from "../FirebaseConfig.js";

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
    // console.log(name, value)
    // console.log(credentials.email, credentials.password)
    setCredentials({
      ...credentials,
      [name]: value /* The ES6 computed property name syntax is used to update the state key corresponding to the given input name:*/
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let password = credentials.password;
    let email = credentials.email;    
    firebaseConfig.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      setButton({
        disabled: true
      });
    })
    .catch((error) => {
      alert(error.message)
      setButton({
        disabled: false
      });
    });
    
  };
  const {currentUser} = useContext(AuthContext);
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
            <button type="submit" name="signin">
              Sign In
            </button>
          </div>
        </form>
      </Wrapper>
    </Main>
  );
};

export default SignIn;
