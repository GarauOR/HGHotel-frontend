import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function AdminUpdateModal(props) {
  const server = process.env.REACT_APP_SERVER_URL;
  const [addRoomNumber, setAddRoomNumber] = useState(props.item.number);
  const [addRoomDescription, setAddRoomDescription] = useState(props.item.description);
  const [addRoomRate, setAddRoomRate] = useState(props.item.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    const req = {
      number: addRoomNumber,
      description: addRoomDescription,
      price: addRoomRate,
    };
    const updRoomCall = async () => {
      const updRoom = await axios.put(`${server}/adminroom/${props.item._id}`, req);
      props.setRoomList(updRoom.data);
    };
    updRoomCall();
    props.handleClose();
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Room Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="roomNumber">
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter room number"
                value={addRoomNumber}
                onChange={(e) => setAddRoomNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="roomDescription">
              <Form.Label>Room Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter room description"
                value={addRoomDescription}
                onChange={(e) => setAddRoomDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="roomPrice">
              <Form.Label>Room Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter room rate"
                value={addRoomRate}
                onChange={(e) => setAddRoomRate(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminUpdateModal;
