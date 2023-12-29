import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { DarkMode } from "./main";
let EachCard = ({ country }) => {
  //   console.log(country);
  let darkValue = useContext(DarkMode);
  let darkStyle = {
    backgroundColor: "white",
    color: "hsl(200, 15%, 8%)",
  };
  if (darkValue === "dark") {
    darkStyle.backgroundColor = "hsl(209, 23%, 22%)";
    darkStyle.color = "white";
  }
  let { name, population, region, capital, flags } = country;
  return (
    <div className="col-md-3 d-flex justify-content-center my-5">
      <div className="card " style={{ width: "24rem", ...darkStyle }}>
        <img
          className="card-img-top"
          src={flags.png}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h5 className="card-title ps-3">{name.common}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0" style={darkStyle}>
              <span style={{ fontWeight: "500" }}>Population : </span>
              {population}
            </li>
            <li className="list-group-item border-0 " style={darkStyle}>
              <span style={{ fontWeight: "500" }}>Region : </span>
              {region}
            </li>
            <li className="list-group-item border-0" style={darkStyle}>
              <span style={{ fontWeight: "500" }}>Capital : </span>
              {capital}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default EachCard;
