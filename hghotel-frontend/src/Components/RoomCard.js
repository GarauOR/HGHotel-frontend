import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import PaymentModal from "./PaymentModal";
import PaidModal from "./PaidModal";
import Card from "react-bootstrap/Card";

function RoomCard(props) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [checkedRooms, setCheckedRooms] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [visible, setVisible] = useState(false);
  const handleX = () => {
    setVisible(false);
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
      <Form onSubmit={handleSubmit} className="centre">
        
          {props.roomArray.map((item, idx) => {
            return (
            <Card body key={item._id} className="martop marbtm">
                  <Form.Check
                  type="checkbox"
                  id="availableRoom"
                  label={<div className="img-cont"><img className="searchRoom-img" src="https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" /></div>}
                  value={idx}
                  onChange={handleChange}
                  className="roomCard"
                  
                />
                <p className="p color search-auto-margin">{item.description}</p>
                <p  className="h6 color search-auto-margin">£{item.price}</p>
              </Card>
            );
          })}
          {isAuthenticated ? (
            <Button variant="outline-dark" type="submit" className="book-btn">
              Book
            </Button>
          ) : (
            <Button variant="outline-dark"  className="book-btn" onClick={() => loginWithRedirect()}>
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
      <PaidModal visible={visible} handleX={handleX} />
    </div>
  );
}

export default RoomCard;
