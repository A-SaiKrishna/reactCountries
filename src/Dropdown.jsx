import { useState } from "react";

let Dropdown = ({ regionData }) => {
  let [styObj, setStyObj] = useState({
    display: "none",
  });
  let Style = { height: "1rem", width: "20%", position: "relative" };
  return (
    <div className="drop z-1" style={Style}>
      <button
        className="btn-primary border-0 shadow bg-white"
        style={{ height: "3rem", width: "100%" }}
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
        style={{ width: "100%" }}
        onClick={(e) => {
          //   console.log(e.target.innerHTML);
          regionData(e.target.innerHTML);
        }}
      >
        <a className="ms-4 text-dark text-decoration-none" style={styObj}>
          Africa
        </a>
        <a className="ms-4 text-dark text-decoration-none" style={styObj}>
          Americas
        </a>
        <a className="ms-4 text-dark text-decoration-none" style={styObj}>
          Asia
        </a>
        <a className="ms-4 text-dark text-decoration-none" style={styObj}>
          Europe
        </a>
        <a className="ms-4 text-dark text-decoration-none" style={styObj}>
          Oceania
        </a>
      </div>
    </div>
  );
};
export default Dropdown;
