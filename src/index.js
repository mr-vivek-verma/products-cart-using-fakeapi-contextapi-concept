import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import CartState from "./Context/Cart/CartState";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CartState>
      <App />
    </CartState>
  </StrictMode>
);
