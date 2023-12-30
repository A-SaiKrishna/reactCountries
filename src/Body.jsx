import EachCard from "./EachCard";
import { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dropdown from "./Dropdown";
import ShimmerCard from "./ShimmerCard";
import { DarkMode } from "./main";

let Body = () => {
  let regionArray = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  async function fetchCountries() {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    return data;
  }
  //   console.log(data);

  let darkValue = useContext(DarkMode);
  let [searchText, setSearchText] = useState("");
  let [subRegionArray, setSubRegionArray] = useState([]);
  let [initialCountryData, setInitialCountryData] = useState([]);
  let [regionFilter, setRegionFilter] = useState("");
  let [subRegionFilter, setSubRegionFilter] = useState("");
  let [populationFilter, setPopulationFilter] = useState("");
  let [areaFilter, setAreaFilter] = useState("");

  useEffect(() => {
    fetchCountries().then((data) => {
      setInitialCountryData(data);
    });
  }, []);
  let bodyStyle = {
    padding: "3rem",
    backgroundColor: "white",
    color: "hsl(200, 15%, 8%)",
    boxShadow: "0px -5px 5px -5px rgba(0, 0, 0, 0.5)",
  };
  let searchStyle = {
    width: "35%",
    backgroundColor: "white",
    color: "hsl(200, 15%, 8%)",
  };
  let darkStyleSearch = {
    backgroundColor: "white",
    color: "hsl(200, 15%, 8%)",
  };
  let lightDark = {
    backgroundColor: "white",
    color: "hsl(200, 15%, 8%)",
  };

  if (darkValue === "dark") {
    darkStyleSearch.backgroundColor = "hsl(207, 26%, 17%)";
    darkStyleSearch.color = "white";
    searchStyle.backgroundColor = "hsl(209, 23%, 22%)";
    searchStyle.color = "white";
    bodyStyle.backgroundColor = "hsl(207, 26%, 17%)";
    bodyStyle.color = "white";
    lightDark.backgroundColor = "hsl(209, 23%, 22%)";
    lightDark.color = "white";
    bodyStyle.border = "none";
  }
  return (
    <div className="body" style={bodyStyle}>
      <div className="filter-class mt-5  d-flex justify-content-between py-auto">
        <div className="search" style={searchStyle}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text border-0"
                id="basic-addon1"
                style={{
                  ...lightDark,
                  boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                <i className="bi bi-search"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search for a country"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={searchText}
              style={{
                ...lightDark,
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
              }}
              onChange={(e) => {
                console.log(e.target.value);
                setSearchText(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <Dropdown
          name={"Sort By Area"}
          list={["increase", "decrease"]}
          regionData={(data) => {
            setPopulationFilter("");
            setAreaFilter(data);
          }}
        />
        <Dropdown
          name={"Sort By Population"}
          list={["increase", "decrease"]}
          regionData={(data) => {
            setAreaFilter("");
            setPopulationFilter(data);
          }}
        />
        <Dropdown
          name={"Filter By SubRegion"}
          list={subRegionArray}
          regionData={(data) => {
            setSubRegionFilter(data);
          }}
        />
        <Dropdown
          name={"Filter By Region"}
          list={regionArray}
          regionData={(data) => {
            setRegionFilter(data);
            let subObj = {};
            initialCountryData.forEach((element) => {
              if (
                element.region.trim().toLowerCase() ===
                data.trim().toLowerCase()
              )
                subObj[element.subregion] = 1;
            });
            setSubRegionArray(Object.keys(subObj));
          }}
        />
      </div>
      <div className="restCountries row">
        {initialCountryData.length !== 0 ? (
          initialCountryData
            .filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(searchText.toLowerCase())
            )
            .filter((country) => {
              if (regionFilter) {
                return (
                  country.region.trim().toLowerCase() ===
                  regionFilter.trim().toLowerCase()
                );
              }
              return true;
            })
            .filter((country) => {
              if (subRegionFilter) {
                return (
                  country.subregion.trim().toLowerCase() ===
                  subRegionFilter.trim().toLowerCase()
                );
              }
              return true;
            })

            .sort((obj1, obj2) => {
              return populationFilter
                ? populationFilter === "increase"
                  ? obj1.population - obj2.population
                  : obj2.population - obj1.population
                : 0;
            })
            .sort((obj1, obj2) => {
              return areaFilter
                ? areaFilter === "increase"
                  ? obj1.area - obj2.area
                  : obj2.area - obj1.area
                : 0;
            })
            .map((obj) => <EachCard key={obj.cca3} country={obj} />)
        ) : (
          <div className="row">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </div>
        )}
      </div>
    </div>
  );
};
export default Body;
