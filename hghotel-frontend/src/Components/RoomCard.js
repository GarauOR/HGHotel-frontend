import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import PaymentModal from "./PaymentModal";
import PaidModal from "./PaidModal";

function RoomCard(props) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [checkedRooms, setCheckedRooms] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [visible, setVisible] = useState(false);
  const handleX = () => {
    setVisible(false)
    props.setRoomArray([]);
  };
  const handleV = () => setVisible(true);

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckedRooms([...checkedRooms, props.roomArray[e.target.value]]);
    } else {
      for (let i = 0; i < checkedRooms.length; i++) {
        if (checkedRooms[i] == props.roomArray[e.target.value]) {
          checkedRooms.splice(i, 1);
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkedRooms.length > 0) {
      handleShow();
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {props.roomArray.map((item, idx) => {
          return (
            <div key={item._id} className="mb-3">
              <Form.Check
                type="checkbox"
                id="availableRoom"
                label={`${item.description} £${item.price}`}
                value={idx}
                onChange={handleChange}
              />
            </div>
          );
        })}
        {isAuthenticated ? (
          <Button variant="secondary" type="submit">
            Book
          </Button>
        ) : (
          <Button variant="secondary" onClick={() => loginWithRedirect()}>
            Login to Book
          </Button>
        )}
      </Form>

      <PaymentModal
        show={show}
        handleClose={handleClose}
        checkedRooms={checkedRooms}
        ini={props.ini}
        outi={props.outi}
        handleV={handleV}
        checkin={props.checkin}
        checkout={props.checkout}
      />
      <PaidModal 
        visible={visible}
        handleX={handleX} 
        />
    </div>
  );
}

export default RoomCard;
