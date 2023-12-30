import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
let SubRegion = () => {
  let [displayStyle, setDisplayStyle] = useState({
    display: "none",
  });
  return (
    <div>
      <button
        onClick={() => {
          if (displayStyle.display === "none") {
            setDisplayStyle({
              display: "block",
            });
          } else {
            setDisplayStyle({
              display: "none",
            });
          }
        }}
      >
        Filter by SubRegion
      </button>
      <div style={displayStyle} className="bg-light border-0">
        <li>sample1</li>
        <li>sample 2</li>
        <li>sample3</li>
      </div>
    </div>
  );
};
export default SubRegion;
