import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import Body from "./Body";

const App = () => {
  return (
    <div className="restCountries">
      <Heading />
      <Body />
    </div>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
