import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AdminDelete from "./AdminDelete";

function AdminCard(props) {
  const handleUpdate = () => {
    props.setItem(props.item);
    props.handleShow();
  };

  return (
    <Card body className="marbtm">
      <div className="alignAdmin">
        {`Room number ${props.item.number} | ${props.item.description} | £${props.item.price} `}
      </div>
      <div className="adminCard">
        <Button variant="search" onClick={handleUpdate}>
          Update
        </Button>
        <Button variant="search" onClick={() => AdminDelete(props)}>
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default AdminCard;
