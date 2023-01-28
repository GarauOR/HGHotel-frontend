import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <Button variant="outline-light" onClick={() => loginWithRedirect()}>Log In</Button>
    )
  );
};

export default Login;
