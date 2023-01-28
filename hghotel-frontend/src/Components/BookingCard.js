import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BookingDelete from "./BookingDelete";

function BookingCard(props) {
  return (
    <Card className="centre bookingCard">
      <Card.Body>
        <div style={{width:"100%"}}>
        <img
          src="https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="booking-img"
        />
        </div>
      </Card.Body>
      <Card.Footer style={{borderTop:"none", backgroundColor:"white"}}>
        <p className="h6 color">{`${props.item.description}.`}</p>
        <p className="h6 color">{`Check-in: ${props.item.checkin}`}</p>
        <p className="h6 color">{`Check-out: ${props.item.checkout}`}</p>
        <Button variant="book" onClick={() => BookingDelete(props)}>
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default BookingCard;
