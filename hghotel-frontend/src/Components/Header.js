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
      <Navbar bg="dark" variant="light">
        <Container>
          <Navbar.Brand href="/">HGHotel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/restaurant">Restaurant</Nav.Link>
            {username==="luca91garau@gmail.com" && <Nav.Link href="/admin">Admin area</Nav.Link>}
            {isAuthenticated && <p>{`Welcome ${user.name}`}</p>}
            <Login />
            <Logout />
            <DropdownMenu />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
