import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAuth0 } from "@auth0/auth0-react";

function DropdownMenu(props) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <div>
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            variant="secondary"
            title="Menu"
          >
            <Dropdown.Item eventKey="1" href="/">
              Home
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/restaurant">
              Restaurant
            </Dropdown.Item>
            <Dropdown.Divider />
            {!isAuthenticated && (
              <Dropdown.Item eventKey="3" onClick={() => loginWithRedirect()}>
                Log In
              </Dropdown.Item>
            )}
            {isAuthenticated && (
              <Dropdown.Item
                eventKey="3"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Dropdown.Item>
            )}
          </DropdownType>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
