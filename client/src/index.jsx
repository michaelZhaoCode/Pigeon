import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-fs1aio2oyvsjflh2.us.auth0.com";
const clientId = "AmVYUUE99lhXLs42cMUjhB0znHPrIJya";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      directUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
