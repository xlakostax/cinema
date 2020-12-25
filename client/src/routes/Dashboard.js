import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import firebaseConfig from "../FirebaseConfig.js";

import {Wrapper, Main} from "../styles/styled";

const Dashboard = () => {
  const [button, setButton] = useState({
    disabled: false,
  })
  const [booked, setBooked] = useState(0);
  const [order, setOrder] = useState({
    checked: false,
  })
  const [seats, setSeats] = useState({
    seats: [
      {
        id: 1,
        isBooked: false
      },
      {
        id: 2,
        isBooked: false,
      }
    ]
  });
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/signin" />;
  }
  
  const onChangeHandler = (event) => {
    console.log(event.target.checked, event.target.id)
    let tempSeats = {...seats};
    tempSeats.seats[event.target.id-1] = {
      id: event.target.id,
      isBooked: event.target.checked,
    }
    setSeats({
      ...tempSeats
    })
  };
  return (
    <Main>
      <Wrapper>
        <h1>This is our small but cozy cinema</h1>
        <p>Please, choose a seat and enjoy the best movie ever</p>
        <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
        <form onSubmit={() => {return}}>
          {seats.seats.map((el, i) => {
            const style = {
              display: "flex",
              padding: "1rem",
              alignItems: "center"
            }
            return (
              <p key={i}>
                <label style={(el.isBooked) ? {...style, backgroundColor: "red"} : {...style, backgroundColor: "blue"}}>
                {el.id}
                <input
                  id={el.id}
                  type="checkbox"
                  name={el.id}
                  value={el.id}
                  onChange={onChangeHandler}
                />
            </label>
            </p>
            )
          })}
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

export default Dashboard;