import { Link } from "react-router-dom";
let ShimmerCountry = () => {
  return (
    <div className="country">
      <Link to="/" className="btn btn-light m-5 shadow  backbutton">
        <i className="bi bi-arrow-left "></i> <span>Back</span>
      </Link>
      <div className="d-xl-flex justify-content-between d-lg-block mt-4">
        <div className="img-div ps-4 ms-5">
          <img src=".." id="flag" className="shadow"></img>
        </div>
        <div className="country-details">
          <h2 className="ps-4 pb-3"></h2>
          <div className="details d-flex  pb-5">
            <ul>
              <li>
                <span> </span> <span></span>
              </li>
              <li>
                <span></span>
                <span> </span>
              </li>
              <li>
                {" "}
                <span></span>
                <span></span>
              </li>
              <li>
                {" "}
                <span></span>
                <span></span>
              </li>
              <li>
                {" "}
                <span></span>
                <span> </span>
              </li>
            </ul>
            <ul className="ms-5 ps-5">
              <li>
                {" "}
                <span></span>
                <span></span>
              </li>
              <li>
                <span></span> <span></span>
              </li>
              <li>
                {" "}
                <span></span>
                <span></span>
              </li>
            </ul>
          </div>
          <div className="border-countries ps-4 ms-1 pt-1">
            <span>
              <span></span>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShimmerCountry;
