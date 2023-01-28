import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer(props) {
  return (
    <div>
      <Navbar className="footer">
        <Container>
        <Navbar.Text className="footerColor">All rights reserved</Navbar.Text>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="footerColor">
              Made by: <a  href="https://github.com/GarauOR">Luca Garau</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
