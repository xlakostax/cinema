import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import {
  Main,
  Wrapper
} from "../styles/styled";
const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Main>
      <Wrapper>
      <h1>Welcome to the cinema</h1>
      {currentUser ? (
        <p>
          You are logged - <Link to="/dashboard">View Dashboard</Link>
        </p>
      ) : (
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          <Link to="/signin">Sign In</Link>
          
          <Link to="/signup">Don't have an account?</Link> 
        </div>
      )}
      </Wrapper>
    </Main>
  );
};

export default Home;