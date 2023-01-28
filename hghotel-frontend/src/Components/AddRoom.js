import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function AddRoom(props) {
    const server = process.env.REACT_APP_SERVER_URL;
    const [addRoomNumber, setAddRoomNumber] = useState(0);
    const [addRoomDescription, setAddRoomDescription] = useState("0");
    const [addRoomRate, setAddRoomRate] = useState(0);

    const handleAddSubmit = (e) => {
        e.preventDefault();
        const req = {
            number:addRoomNumber,
            description:addRoomDescription,
            price:addRoomRate,
        }
        const addRoomCall = async () => {
            const addRoom = await axios.post(`${server}/room`, req);
            props.setRoomList(addRoom.data);
        };
        addRoomCall();
    };

  return (
    <div style={{marginTop:"70px"}} className="centre">
      <h2>Add a room</h2>
      <Form onSubmit={handleAddSubmit}>
        <Form.Group style={{textAlign:"start"}} className="mb-3" controlId="roomNumber">
          <Form.Label>Room Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter room number"
            onChange={(e) => setAddRoomNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group style={{textAlign:"start"}} className="mb-3" controlId="roomDescription">
          <Form.Label>Room Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter room description"
            onChange={(e) => setAddRoomDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group style={{textAlign:"start"}} className="mb-3" controlId="roomPrice">
          <Form.Label>Room Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter room rate"
            onChange={(e) => setAddRoomRate(e.target.value)}
          />
        </Form.Group>

        <Button variant="book" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddRoom;
