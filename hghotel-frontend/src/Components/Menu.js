import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Menu(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>The Fisherman Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Appetizers</h3>
          <p>Crawfish Pistolet $4.49</p>
          <p>Crawfish Queso & Chips $11.99</p>
          <p>Boudin Balls $5.99</p>
          <p>Bacon Crab Stuffed Jalapeños $12.99</p>
          <p>Crab Stuffed Jalapeños $11.99</p>
          <h3>Mains</h3>
          <p>Etouffee - (crawfish, shrimp or combo) served with white rice and toast $16.99</p>
          <p>Shrimp & Sausage Alfredo $17.99</p>
          <p>Tuscan Shrimp Fettuccine - with sun-dried tomato and spinach cream sauce $17.99</p>
          <p>Steak & Shrimp - served with loaded mashed potatoes, green beans & toast $29.99</p>
          <p>Baja Fish or Shrimp Tacos $12.99</p>
          <p>Shrimp Cuatro - 3 fried, 3 coconut, 3 grilled and 3 diablo served with fries & shrimp fried rice $22.99</p>
          <h3>Desserts</h3>
          <p>Key Lime Pie $3.99</p>
          <p>Cheesecake $3.99</p>
          <p>Chocolate Pie $3.99</p>
          <p>Homemade Banana Pudding $3.99</p>
          <p>Bread Pudding $6.99</p>
          <p>Deep Sea Sundae $6.99</p>
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

export default Menu;
