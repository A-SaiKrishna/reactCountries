import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCountry from "./ShimmerCountry";
import BorderCountry from "./BorderCountry";
import { Link } from "react-router-dom";
import "./Country.css";
import { DarkMode } from "./main";
import { useContext } from "react";
let Country = () => {
  let dark = useContext(DarkMode);
  let { countryId } = useParams();
  let [countryData, setCountryData] = useState("");
  async function fetchingCountry() {
    let response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryId}`
    );
    let data = await response.json();
    return data;
  }
  useEffect(() => {
    fetchingCountry().then((data) => {
      setCountryData(data[0]);
      //   console.log(data);
    });
  }, [countryData]);
  if (countryData === "") {
    return <ShimmerCountry />;
  }
  let {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    flags,
    languages,
    borders,
  } = countryData;
  let darkStyle = {};
  let lightDarkStyle = { color: "gray" };
  let buttons = {};
  if (dark === "dark") {
    darkStyle.backgroundColor = "hsl(207, 26%, 17%)";
    darkStyle.color = "white";
    lightDarkStyle.backgroundColor = "hsl(207, 26%, 17%)";
    lightDarkStyle.color = "white";
    buttons.border = "none";
    buttons.backgroundColor = "hsl(209, 23%, 22%)";
    buttons.color = "white";
  }
  return (
    <div className="country" style={darkStyle}>
      <Link
        to="/"
        className="btn btn-light m-5 shadow  backbutton"
        style={buttons}
      >
        <i className="bi bi-arrow-left "></i> <span>Back</span>
      </Link>
      <div className="d-xl-flex justify-content-between d-lg-block mt-4">
        <div className="img-div ps-4 ms-5">
          <img src={flags.png} id="flag" className="shadow"></img>
        </div>
        <div className="country-details">
          <h2 className="ps-4 pb-3" style={darkStyle}>
            {name.common}
          </h2>
          <div className="details d-flex  pb-5">
            <ul>
              <li>
                <span style={{ fontWeight: "500" }}>Native Name: </span>{" "}
                <span style={lightDarkStyle}>
                  {
                    Object.values(name.nativeName)
                      .map((obj) => obj.common)
                      .sort()
                      .reverse()[0]
                  }
                </span>
              </li>
              <li>
                <span style={{ fontWeight: "500" }}>Population:</span>
                <span style={lightDarkStyle}> {population}</span>
              </li>
              <li>
                {" "}
                <span style={{ fontWeight: "500" }}>Region:</span>
                <span style={lightDarkStyle}>{region}</span>
              </li>
              <li>
                {" "}
                <span style={{ fontWeight: "500" }}>Sub Region:</span>
                <span style={lightDarkStyle}>{subregion}</span>
              </li>
              <li>
                {" "}
                <span style={{ fontWeight: "500" }}>Capital:</span>
                <span style={lightDarkStyle}> {capital[0]}</span>
              </li>
            </ul>
            <ul className="ms-5 ps-5">
              <li>
                {" "}
                <span style={{ fontWeight: "500" }}>Top Level Domain:</span>
                <span style={lightDarkStyle}>{tld[0]}</span>
              </li>
              <li>
                <span style={{ fontWeight: "500" }}>Currencies:</span>{" "}
                <span style={lightDarkStyle}>
                  {Object.values(currencies)
                    .map((obj) => obj.name)
                    .sort()
                    .join(",")}
                </span>
              </li>
              <li>
                {" "}
                <span style={{ fontWeight: "500" }}>Languages:</span>
                <span style={lightDarkStyle}>
                  {Object.values(languages).sort().join(",")}
                </span>
              </li>
            </ul>
          </div>
          <div className="border-countries ps-4 ms-1 pt-1">
            <span>
              <span style={{ ...darkStyle, fontWeight: "500" }}>
                Border Countries:
              </span>{" "}
              {borders ? (
                borders.map((eachCountry) => {
                  return (
                    <BorderCountry
                      key={eachCountry}
                      code={eachCountry}
                      className={buttons}
                    />
                  );
                })
              ) : (
                <span className=" mx-1 shadow" style={darkStyle}>
                  No border countries
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Country;
