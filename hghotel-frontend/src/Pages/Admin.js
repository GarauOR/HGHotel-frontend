import React, { useState } from "react";
import AddRoom from "../Components/AddRoom";
import axios from "axios";
import AdminCard from "../Components/AdminCard";
import AdminUpdateModal from "../Components/AdminUpdateModal";

function Admin(props) {
  const server = process.env.REACT_APP_SERVER_URL;
  const [roomList, setRoomList] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [item, setItem] = useState("");

  const roomListCall = async () => {
    const allRooms = await axios.get(`${server}/room`);
    setRoomList(allRooms.data);
  };
  roomListCall();

  return (
    <div>
      <h2>Room Database</h2>
      {roomList.map((item, idx) => {
        return <AdminCard item={item} handleShow={handleShow} setItem={setItem} setRoomList={setRoomList} key={idx} />;
      })}

      <AddRoom setRoomList={setRoomList} />

      <AdminUpdateModal 
        show={show}
        handleClose={handleClose} 
        item={item}
        setRoomList={setRoomList}
        />
    </div>
  );
}

export default Admin;
