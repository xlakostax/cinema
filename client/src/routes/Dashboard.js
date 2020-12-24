import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import firebaseConfig from "../FirebaseConfig.js";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/signin" />;
  }
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is the dashboard, if you can see this you're logged in.</p>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Dashboard;