import { useEffect, useState } from "react";

/* Import config */
import firebaseConfig from "../FirebaseConfig";

/*Import libraries*/
import {Redirect} from 'react-router-dom';
import dompurify from "dompurify";
import { loadProgressBar } from "axios-progress-bar";
import Modal from "react-modal";

/*Import styles*/
import "axios-progress-bar/dist/nprogress.css";
import {Wrapper} from "../styles/styled";

const SignedInForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLogged: "",
    info: "",
    showModal: false,
    disabled: false,
  })

  useEffect(() => {
    loadProgressBar();
  });

  const onChangeHandler = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value)
    console.log(state.email, state.password)
    setState({
      ...state,
      [name]: value /* The ES6 computed property name syntax is used to update the state key corresponding to the given input name:*/
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); /* Prevent form submit from reloading the page */
    setState({
      ...state,
      disabled: true
    });
    let password = state.password;
    let email = state.email;
    firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        setState({
            ...state,
            isLogged: true,
            showModal: true,
            info: `Successfully signed</span>.`
        });
        console.log("Successful");
    })
    .catch((error) => {
        setState({
            ...state,
            showModal: true,
            info: `<span>Error.</span> ${error.message}.`
        });
    });
  };

  if (state.isLogged) {
        return <Redirect to="/dashboard" />;
    }

  const resetForm = () => {
    setState(
      {
        password: "",
        email: "",
        message: "",
        showModal: false,
        info: "",
        disabled: false,
      }
    );
  };

  const handleCloseModal = () => {
    resetForm();
  };

  const sanitizer = dompurify.sanitize;

  return (
    <Wrapper className="wrapper">
      <Modal
        isOpen={state.showModal}
        contentLabel="onRequestClose"
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
        shouldCloseOnOverlayClick={false}
      >
        <i
          className="fas fa-times"
          onClick={handleCloseModal}
          style={{ cursor: "pointer", marginRight: "1rem" }}
        />
        <p dangerouslySetInnerHTML={{ __html: sanitizer(state.info) }} />
      </Modal>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>
            Your email:
            <input
              id="email"
              type="email"
              name="email"
              value={state.email}
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
              value={state.password}
              onChange={onChangeHandler}
              required
            />
          </label>
        </p>
        <div>
          <button type="submit" name="send" disabled={state.disabled}>
            Send
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
export default SignedInForm;