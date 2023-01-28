import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import DropdownMenu from "./DropdownMenu";

function Header(props) {
  const { user, isAuthenticated } = useAuth0();
  const [username, setUsername] = useState("");
  
  useEffect(()=>{
    if(user){
      setUsername(user.email);
    }
  }, [user])

  return (
    <div>
      <Navbar bg="personal" variant="dark">
        <Container>
          <Navbar.Brand className="logo">HGhotel</Navbar.Brand>
          <Nav className="me-auto dtDispFlex">
          <Nav.Link href="/" style={{color:"azure"}}>Hotel</Nav.Link>
            <Nav.Link href="/restaurant" style={{color:"azure"}}>Restaurant</Nav.Link>
            {isAuthenticated && <Nav.Link style={{color:"azure"}} href="/bookings">My Bookings</Nav.Link>}
            {username==="luca91garau@gmail.com" && <Nav.Link style={{color:"azure"}} href="/admin">Admin area</Nav.Link>}
            
          </Nav>
          <section className="dtDispFlex rightSide">
            <Nav.Link disabled="true" style={{color:"azure"}}>{isAuthenticated && `Welcome ${user.name}`}</Nav.Link>
            <Login />
            <Logout />
            </section>
          <DropdownMenu />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
