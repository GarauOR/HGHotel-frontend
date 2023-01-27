import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingCard from "../Components/BookingCard";
import { useAuth0 } from "@auth0/auth0-react";

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
      <h2>My Bookings</h2>
      {roomList.map((item, idx) => {
        return <BookingCard item={item} setRoomList={setRoomList} key={idx} username={user.email || user.nickname} />;
      })}
    </div>
  );
}

export default Bookings;
