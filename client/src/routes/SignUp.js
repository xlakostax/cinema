import React, {useState} from "react";

/* Import libraries */
import dompurify from "dompurify";
import Modal from "react-modal";
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

  const [modal, setModal] = useState({
    info: "",
    visible: false,
  })

  const [button, setButton] = useState({
    disabled: false,
  })

  const [currentUser, setCurrentUser] = useState(null)

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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setButton({
      disabled: true
    });
    let password = credentials.password;
    let email = credentials.email;
    firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user)
      setCurrentUser(user)
      setModal({
        showModal: true,
        info: `Successfully signed</span>.`
      });
      console.log("Successful");
    })
    .catch((error) => {
      setModal({
        showModal: true,
        info: `<span>Error.</span> ${error.message}.`
      });
    });
  };

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  const resetForm = () => {
    setCredentials({
      email: "",
      password: "",
    });
    setModal({
      showModal: false,
      info: "",
    })
    setButton({
      disabled: false,
    })
  };

  const handleCloseModal = () => {
    resetForm();
  };

  const sanitizer = dompurify.sanitize;

  return (
    <Main>
      <Wrapper className="wrapper">
        <Modal
          isOpen={modal.showModal}
          contentLabel="onRequestClose"
          onRequestClose={handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
          shouldCloseOnOverlayClick={false}
        >
          <i
            className="fas fa-times"
            onClick={handleCloseModal}
            style={{cursor: "pointer", marginRight: "1rem"}}
          />
          <p dangerouslySetInnerHTML={{__html: sanitizer(modal.info)}} />
        </Modal>
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
