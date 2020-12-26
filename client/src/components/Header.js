import React, {useContext} from 'react';

/*Import providers and configs*/
import {firebaseConfig} from "../FirebaseConfig.js";
import {AuthContext} from "./AuthProvider";

/*Import components*/
import {HeaderTag} from "../styles/styled";

const Header = () => {
  const {currentUser} = useContext(AuthContext);
  return(
    <HeaderTag>
      <p>{currentUser.email}!</p>
      <a href="#" onClick={() => firebaseConfig.auth().signOut()}>Sign out</a>
    </HeaderTag>
  )
}

export default Header;
