import EachCard from "./EachCard";
import { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dropdown from "./Dropdown";
import ShimmerCard from "./ShimmerCard";
import { DarkMode } from "./main";

let Body = () => {
  async function fetchCountries() {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    return data;
  }
  //   console.log(data);
  let darkValue = useContext(DarkMode);
  let [countryData, setCountryData] = useState([]);
  let [filterCountryData, setFilterCountryData] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredRegion, setFilteredRegion] = useState("");
  if (filteredRegion != null && filteredRegion != "") {
    filterCountryData = filterCountryData.filter((obj) => {
      return (
        obj.region.trim().toLowerCase() === filteredRegion.trim().toLowerCase()
      );
    });
  }
  let [initialState, setInitialState] = useState(true);
  //   console.log(searchText);
  useEffect(() => {
    fetchCountries().then((data) => {
      setCountryData(data);
      setFilterCountryData(data);
      setInitialState(false);
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
                setSearchText(e.target.value);
                // console.log(searchText);
                let searchData = countryData.filter((obj) => {
                  return obj.name.common
                    .trim()
                    .toLowerCase()
                    .includes(e.target.value.trim().toLowerCase());
                });
                // console.log(searchData);
                setFilterCountryData(searchData);
              }}
            ></input>
          </div>
        </div>
        <Dropdown
          regionData={(data) => {
            if (data != "" || data != null) {
              // console.log(data);
              setFilteredRegion(data);
            }
          }}
        />
      </div>
      <div className="restCountries row ">
        {filterCountryData.length === 0 ? (
          initialState === true ? (
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
          ) : (
            <h1 className="m-5">No data found</h1>
          )
        ) : (
          filterCountryData.map((obj) => {
            return <EachCard country={obj} />;
          })
        )}
      </div>
    </div>
  );
};
export default Body;
