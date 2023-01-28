import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AdminDelete from './AdminDelete';


function AdminCard(props) {
    const handleUpdate = () => {
        props.setItem(props.item);
        props.handleShow();
    };

    return <Card body>{`Room number ${props.item.number} | ${props.item.description} | £${props.item.price} `}
    <Button variant="secondary" onClick={handleUpdate}>Update</Button>
    <Button variant="secondary" onClick={()=>AdminDelete(props)}>Delete</Button>
    </Card>;
}

export default AdminCard;