import React, {
  useContext,
  useEffect,
  useState
} from "react";

/*Import libraries*/
import {Redirect} from "react-router-dom";

/*Import providers and configs*/
import {AuthContext} from "../components/AuthProvider";
import {firebaseConfig} from "../FirebaseConfig.js";

/*Import components*/
import Footer from "../components/Footer"
import Header from "../components/Header"
import {
  Main, 
  Wrapper
} from "../styles/styled";

const Dashboard = () => {
  const [seats, setSeats] = useState({
    seats: []
  });

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    let seatsRef = firebaseConfig.database().ref("seats/");
    seatsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      // console.log("Data from DB: ", data)
      setSeats({
        seats: [...data]
      })
    });
  }, [currentUser])

  if (!currentUser) {
    return <Redirect to="/signin" />;
  }
  
  const onChangeHandler = (event) => {
    // console.log(event.target.checked, event.target.id)
    let tempSeats = {...seats};
    tempSeats.seats[event.target.id-1] = {
      id: event.target.id,
      isBooked: event.target.checked,
      bookedBy: event.target.checked ? currentUser.uid : "",
    }
    setSeats({
      ...tempSeats
    })
    console.log(seats)
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(seats)
    firebaseConfig.database().ref().set(
      {
        ...seats,
      }
    )
  }

  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <p>Welcome to "The Cinema"! Please, choose a seat and enjoy the best movie ever!</p>
          <br />
          <p style={{color: "#46B29A"}}>Your booking</p>
          <p style={{color: "#FF6347"}}>Booked</p>
          <br />
          <form onSubmit={onSubmitHandler} className="seats">
            <div className="seats-area">
              {seats.seats.length===0 ? 
              <div>Loading...</div> : 
              seats.seats.map((el, i) => {
                return (
                  <label key={i} style={(el.isBooked && currentUser.uid===el.bookedBy) ? {backgroundColor: "#46B29A"} : (el.isBooked ? {backgroundColor: "#FF6347"} : {backgroundColor: "#FFF"})} className="checkbox-label">
                  {el.id}
                  <input
                    id={el.id}
                    type="checkbox"
                    name={el.id}
                    value={el.id}
                    disabled={(el.bookedBy===currentUser.uid || el.bookedBy==="") ? false : true}
                    onChange={onChangeHandler}
                    checked={el.isBooked}
                  />
                  </label>
                )
              })}
            </div>
            <br />
            <p className="screen">
              Screen
            </p>
            <br />
            <div>
              <button type="submit" name="book">
                Book
              </button>
            </div>
          </form>
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
};

export default Dashboard;