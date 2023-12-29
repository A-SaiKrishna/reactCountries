// import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import Body from "./Body";
import { createContext, useState } from "react";
export let DarkMode = createContext(null);
const App = () => {
  let [darkState, setDarkState] = useState("light");
  // console.log(darkState);
  return (
    <DarkMode.Provider value={darkState}>
      <div className="restCountries">
        <Heading
          dark={(data) => {
            if (data != null && data != darkState) {
              setDarkState(data);
              // console.log(data);
            }
          }}
        />
        <Body />
      </div>
    </DarkMode.Provider>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
