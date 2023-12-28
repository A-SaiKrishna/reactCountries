import EachCard from "./EachCard";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dropdown from "./Dropdown";
import Shimmer from "./Shimmer";

let Body = () => {
  async function fetchCountries() {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    return data;
  }
  //   console.log(data);
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
  //   console.log(searchText);
  useEffect(() => {
    fetchCountries().then((data) => {
      setCountryData(data);
      setFilterCountryData(data);
    });
  }, []);
  let bodyStyle = { margin: "0 3rem" };
  let searchStyle = { width: "35%" };
  return filterCountryData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body" style={bodyStyle}>
      <div className="filter-class mt-5  d-flex justify-content-between py-auto">
        <div className="search" style={searchStyle}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-search"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a country"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={searchText}
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
        {filterCountryData.map((obj) => {
          return <EachCard country={obj} />;
        })}
      </div>
    </div>
  );
};
export default Body;
