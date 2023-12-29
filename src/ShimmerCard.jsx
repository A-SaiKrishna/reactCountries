import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
let ShimmerCard = () => {
  return (
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
  );
};
export default ShimmerCard;
