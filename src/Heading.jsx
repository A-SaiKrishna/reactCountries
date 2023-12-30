import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
import { DarkMode } from "./main";

let Heading = ({ dark }) => {
  let darkValue = useContext(DarkMode);
  let darkStyle = {
    backgroundColor: "white",
    color: "hsl(200, 15%, 8%)",
  };
  let Style = {
    margin: "0 3rem",
    backgroundColor: "white",
    color: "hsl(200, 15%, 8%)",
  };
  if (darkValue === "dark") {
    darkStyle.backgroundColor = "hsl(209, 23%, 22%)";
    darkStyle.color = "white";
    Style.backgroundColor = "hsl(209, 23%, 22%)";
    Style.color = "white";
  }

  return (
    <div
      className="Heading d-flex justify-content-between   py-3  shadow border-0"
      style={darkStyle}
    >
      <h1 className="fs-4 fw-bold " style={Style}>
        Where in the world?
      </h1>
      <button
        className="dark-mode border-0 "
        style={Style}
        onClick={() => {
          let value = "light";
          // console.log(darkValue);
          if (darkValue === "light") {
            value = "dark";
          }
          dark(value);
        }}
      >
        <i className="bi bi-moon fw-600"></i> Dark Mode
      </button>
    </div>
  );
};
export default Heading;
