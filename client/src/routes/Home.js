import React, {useContext} from "react";

/*Import libraries*/
import {Link} from "react-router-dom";

/*Import congigs and providers*/
import {AuthContext} from "../components/AuthProvider";

/*Import components*/
import {
  Main,
  Wrapper
} from "../styles/styled";

const Home = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Main>
      <Wrapper>
        <h1>Welcome to "The Cinema"</h1>
        {currentUser ?
          <p style={{textAlign: "center"}}>You are signed in. <Link to="/dashboard">View Dashboard</Link></p> :
          <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Don't have an account?</Link> 
          </div>
        }
      </Wrapper>
    </Main>
  );
};

export default Home;