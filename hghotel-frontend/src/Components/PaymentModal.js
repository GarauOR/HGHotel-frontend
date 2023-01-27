import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function PaymentModal(props) {
  const serverlink = process.env.REACT_APP_SERVER_URL;
  const { user } = useAuth0();

  const handlePayment = () => {
    //code snippet to take payment
    //if(payment is successful){
        let dates = props.checkedRooms[0].dates;
        for(let i=props.ini; i<props.outi; i++){
            dates[i].isBooked=true;
          }
    props.checkedRooms.map((item) => {
      const updateRoomCall = async () => {
        await axios.put(`${serverlink}/room/${item._id}`, dates);
      };
      updateRoomCall();
    });
    props.checkedRooms.map((item) => {
      const username = user.email || user.nickname;
      let booking = {description:item.description, checkin:props.checkin, checkout:props.checkout, username:username};
      const addBookingCall = async () => {
        await axios.post(`${serverlink}/booking`, booking);
      };
      addBookingCall();
    });
    props.handleV();
    props.handleClose();
  };

    

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please insert your card details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="paymentForm">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="paymentForm">
              <Form.Label>Card Holder Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="paymentForm">
              <Form.Label>CVC</Form.Label>
              <Form.Control type="number" placeholder="xxx" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="paymentForm">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" placeholder="xx/xx" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handlePayment}>
            Confirm Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PaymentModal;
