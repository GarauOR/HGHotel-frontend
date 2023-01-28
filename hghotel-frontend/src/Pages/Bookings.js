import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingCard from "../Components/BookingCard";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Components/Header";

function Bookings(props) {
  const server = process.env.REACT_APP_SERVER_URL;
  const [roomList, setRoomList] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      const roomListCall = async () => {
        const bookedRooms = await axios.get(
          `${server}/booking?username=${user.email || user.nickname}`
        );
        setRoomList(bookedRooms.data);
      };
      roomListCall();
    }
  }, [user]);

  return (
    <div>
      <section className="cover3 marbtm">
        <h4 className="h4 title3">My Bookings</h4>
        <Header />
      </section>
      
      <section style={{marginBottom:"20px"}}>
      {roomList.map((item, idx) => {
        return <BookingCard item={item} setRoomList={setRoomList} key={idx} username={user.email || user.nickname} />;
      })}
      </section>
    </div>
  );
}

export default Bookings;
