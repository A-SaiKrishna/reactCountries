import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "./main";

let BorderCountry = ({ code }) => {
  let dark = useContext(DarkMode);
  async function fetchCountryName() {
    let response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    let data = await response.json();
    return data;
  }
  let [countryName, setCountryName] = useState(null);
  useEffect(() => {
    fetchCountryName().then((data) => {
      //   console.log(data);
      setCountryName(data);
    });
  }, []);
  let darkStyle = {
    color: "hsl(207, 26%, 17%)",
  };
  if (dark === "dark") {
    darkStyle.backgroundColor = "hsl(209, 23%, 22%)";
    darkStyle.color = "white";
    darkStyle.border = "none";
  }
  return !countryName ? (
    <div> loading </div>
  ) : (
    <div className="btn btn-light mx-1 shadow mb-2" style={darkStyle}>
      <Link
        to={`/country/${countryName[0].cca3}`}
        className="text-decoration-none "
        style={darkStyle}
      >
        {countryName[0].name.common}
      </Link>
    </div>
  );
};
export default BorderCountry;
