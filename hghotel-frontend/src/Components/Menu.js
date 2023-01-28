import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Menu(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header style={{backgroundColor:"whitesmoke"}} closeButton>
          <Modal.Title><h2 className="h4 menuTitle color">The Fisherman Menu</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:" 0px 40px 20px"}} className="color" >
          <h3 className="h5 centre menuMargin">Appetizers</h3>
          <p>Crawfish Pistolet <span className="h6 menuFloat">$4.49</span></p>
          <p>Crawfish Queso & Chips <span className="h6 menuFloat">$11.99</span></p>
          <p>Boudin Balls <span className="h6 menuFloat">$5.99</span></p>
          <p>Bacon Crab Stuffed Jalapeños <span>$12.99</span></p>
          <p>Crab Stuffed Jalapeños <span className="h6 menuFloat">$11.99</span></p>
          <h3 className="h5 centre menuMargin">Mains</h3>
          <p>Etouffee - (crawfish, shrimp or combo) served with white rice and toast <span>$16.99</span></p>
          <p>Shrimp & Sausage Alfredo <span className="h6 menuFloat">$17.99</span></p>
          <p>Tuscan Shrimp Fettuccine - with sun-dried tomato and spinach cream sauce <span className="h6 menuFloat">$17.99</span></p>
          <p>Steak & Shrimp - served with loaded mashed potatoes, green beans & toast <span className="h6 menuFloat">$29.99</span></p>
          <p>Baja Fish or Shrimp Tacos <span className="h6 menuFloat">$12.99</span></p>
          <p>Shrimp Cuatro - 3 fried, 3 coconut, 3 grilled and 3 diablo served with fries & shrimp fried rice <span className="h6 menuFloat">$22.99</span></p>
          <h3 className="h5 centre menuMargin">Desserts</h3>
          <p>Key Lime Pie <span className="h6 menuFloat">$3.99</span></p>
          <p>Cheesecake <span className="h6 menuFloat">$3.99</span></p>
          <p>Chocolate Pie <span className="h6 menuFloat">$3.99</span></p>
          <p>Homemade Banana Pudding <span className="h6 menuFloat">$3.99</span></p>
          <p>Bread Pudding <span className="h6 menuFloat">$6.99</span></p>
          <p>Deep Sea Sundae <span className="h6 menuFloat">$6.99</span></p>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"whitesmoke"}}>
          <Button variant="search" style={{width:"100px", letterSpacing:"0.05rem"}} onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Menu;
