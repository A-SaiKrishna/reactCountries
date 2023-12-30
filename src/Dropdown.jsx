import { useState, useContext } from "react";
import { DarkMode } from "./main";

let Dropdown = ({ regionData, list, name }) => {
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
        {name} <i className="bi bi-caret-down-fill"></i>
      </button>
      <div
        className="list bg-white "
        style={{ width: "100%", ...darkStyle }}
        onClick={(e) => {
          //   console.log(e.target.innerHTML);
          regionData(e.target.innerHTML);
        }}
      >
        {Array.isArray(list) &&
          list.map((eachList, index) => (
            <a
              key={index}
              className="ps-4 text-decoration-none"
              style={{ ...styObj, ...darkStyle }}
            >
              {eachList}
            </a>
          ))}
      </div>
    </div>
  );
};
export default Dropdown;
