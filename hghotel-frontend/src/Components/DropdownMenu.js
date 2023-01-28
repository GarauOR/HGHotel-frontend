import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAuth0 } from "@auth0/auth0-react";

function DropdownMenu(props) {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [username, setUsername] = useState("");
  
  useEffect(()=>{
    if(user){
      setUsername(user.email);
    }
  }, [user])

  return (
    <div>
      <div className="mbDispBlock">
        {['start'].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            variant="outline-light"
            drop={direction}
            title="Menu"
          >
            <Dropdown.Item eventKey="1" href="/" className="centre">
              Home
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/restaurant" className="centre">
              Restaurant
            </Dropdown.Item>
            {isAuthenticated && <Dropdown.Item className="centre" eventKey="3" href="/bookings">My Bookings</Dropdown.Item>}
            {username==="luca91garau@gmail.com" && <Dropdown.Item className="centre" eventKey="4" href="/admin">Admin area</Dropdown.Item>}


            <Dropdown.Divider />
            {!isAuthenticated && (
              <Dropdown.Item className="centre" eventKey="3" onClick={() => loginWithRedirect()}>
                Log In
              </Dropdown.Item>
            )}
            {isAuthenticated && (
              <Dropdown.Item
                eventKey="3"
                className="centre"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Dropdown.Item>
            )}
          </DropdownButton>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
