import React from "react";
import ReactDOM from "react-dom/client";
import { Shell } from "./shell";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Shell />
  </React.StrictMode>
);
