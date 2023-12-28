import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
let Shimmer = () => {
  let bodyStyle = { margin: "0 3rem" };
  let searchStyle = { width: "35%" };
  let Style = { height: "1rem", width: "20%", position: "relative" };
  return (
    <div className="body" style={bodyStyle}>
      <div className="filter-class mt-5  d-flex justify-content-between py-auto">
        <div className="search" style={searchStyle}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                {" "}
                <i className="bi bi-search"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a country"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
        <div className="drop z-1" style={Style}>
          <button
            className="btn-primary border-0 shadow bg-white"
            style={{ height: "3rem", width: "100%" }}
          >
            Filter by Region
            <i className="bi bi-caret-down-fill"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex justify-content-center my-5">
          <div
            className="card bg-light"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img className="card-img-top bg-light" src="..." alt=""></img>
            <div className="card-body">
              <h5 className="card-title ps-3"></h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
                <li className="list-group-item border-0 ">
                  <span style={{ fontWeight: "500" }}> </span>
                </li>
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3 d-flex justify-content-center my-5">
          <div
            className="card bg-light"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img className="card-img-top bg-light" src="..." alt=""></img>
            <div className="card-body">
              <h5 className="card-title ps-3"></h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
                <li className="list-group-item border-0 ">
                  <span style={{ fontWeight: "500" }}> </span>
                </li>
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3 d-flex justify-content-center my-5">
          <div
            className="card bg-light"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img className="card-img-top bg-light" src="..." alt=""></img>
            <div className="card-body">
              <h5 className="card-title ps-3"></h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
                <li className="list-group-item border-0 ">
                  <span style={{ fontWeight: "500" }}> </span>
                </li>
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3 d-flex justify-content-center my-5">
          <div
            className="card bg-light"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img className="card-img-top bg-light" src="..." alt=""></img>
            <div className="card-body">
              <h5 className="card-title ps-3"></h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
                <li className="list-group-item border-0 ">
                  <span style={{ fontWeight: "500" }}> </span>
                </li>
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3 d-flex justify-content-center my-5">
          <div
            className="card bg-light"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img className="card-img-top bg-light" src="..." alt=""></img>
            <div className="card-body">
              <h5 className="card-title ps-3"></h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
                <li className="list-group-item border-0 ">
                  <span style={{ fontWeight: "500" }}> </span>
                </li>
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center my-5">
          <div
            className="card bg-light"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img className="card-img-top bg-light" src="..." alt=""></img>
            <div className="card-body">
              <h5 className="card-title ps-3"></h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
                <li className="list-group-item border-0 ">
                  <span style={{ fontWeight: "500" }}> </span>
                </li>
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center my-5">
          <div
            className="card bg-light"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img className="card-img-top bg-light" src="..." alt=""></img>
            <div className="card-body">
              <h5 className="card-title ps-3"></h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
                <li className="list-group-item border-0 ">
                  <span style={{ fontWeight: "500" }}> </span>
                </li>
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center my-5">
          <div
            className="card bg-light"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img className="card-img-top bg-light" src="..." alt=""></img>
            <div className="card-body">
              <h5 className="card-title ps-3"></h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
                <li className="list-group-item border-0 ">
                  <span style={{ fontWeight: "500" }}> </span>
                </li>
                <li className="list-group-item border-0">
                  <span style={{ fontWeight: "500" }}></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shimmer;
