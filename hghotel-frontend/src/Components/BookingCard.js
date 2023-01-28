import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BookingDelete from './BookingDelete';

function BookingCard(props) {
    
    return (<Card body><p>{`${props.item.description}.`}</p><p>{`Check-in: ${props.item.checkin}`}</p>
    <p>{`Check-out: ${props.item.checkout}`}</p>
    <Button variant="secondary" onClick={()=>BookingDelete(props)}>Delete</Button>
    </Card>);
}
 
export default BookingCard;