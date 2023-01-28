import React from "react";
import Nav from "react-bootstrap/Nav";

function Summary(props) {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#">Our Partners</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Careers</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Summary;
