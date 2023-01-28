import React from "react";
import Nav from "react-bootstrap/Nav";

function Summary(props) {
  return (
    <div>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="#" className="summary-link">Our Partners</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="summary-link">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="summary-link">Careers</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Summary;
