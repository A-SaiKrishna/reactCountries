import { useState, useContext } from "react";
import { DarkMode } from "./main";

let Dropdown = ({ regionData }) => {
  let darkValue = useContext(DarkMode);
  let darkStyle = {
    backgroundColor: "white",
    color: "hsl(200, 15%, 8%)",
  };
  if (darkValue === "dark") {
    darkStyle.backgroundColor = "hsl(209, 23%, 22%)";
    darkStyle.color = "white";
  }
  let [styObj, setStyObj] = useState({
    display: "none",
  });
  let Style = { height: "1rem", width: "20%", position: "relative" };
  return (
    <div className="drop z-1" style={Style}>
      <button
        className="btn-primary border-0 shadow "
        style={{ height: "3rem", width: "100%", ...darkStyle }}
        onClick={() => {
          if (styObj.display === "block") {
            setStyObj({ display: "none" });
          } else {
            setStyObj({ display: "block" });
          }
        }}
      >
        Filter by Region <i className="bi bi-caret-down-fill"></i>
      </button>
      <div
        className="list bg-white "
        style={{ width: "100%", ...darkStyle }}
        onClick={(e) => {
          //   console.log(e.target.innerHTML);
          regionData(e.target.innerHTML);
        }}
      >
        <a
          className="ps-4  text-decoration-none"
          style={{ ...styObj, ...darkStyle }}
        >
          Africa
        </a>
        <a
          className="ps-4  text-decoration-none"
          style={{ ...styObj, ...darkStyle }}
        >
          Americas
        </a>
        <a
          className="ps-4  text-decoration-none"
          style={{ ...styObj, ...darkStyle }}
        >
          Asia
        </a>
        <a
          className="ps-4  text-decoration-none"
          style={{ ...styObj, ...darkStyle }}
        >
          Europe
        </a>
        <a
          className="ps-4  text-decoration-none"
          style={{ ...styObj, ...darkStyle }}
        >
          Oceania
        </a>
      </div>
    </div>
  );
};
export default Dropdown;
