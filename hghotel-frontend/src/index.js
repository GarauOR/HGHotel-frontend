import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ca5t5iv3bthu7r8v.us.auth0.com"
    clientId="lAdtVFYjJzWtaSWuKHadunKtm9ZeArzY"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
    useRefreshTokens={true}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
