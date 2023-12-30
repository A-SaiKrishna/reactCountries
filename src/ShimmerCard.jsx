import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
let ShimmerCard = () => {
  let Style = {
    backgroundColor: "white",
  };
  return (
    <div className="col-md-3 d-flex justify-content-center my-5">
      <div
        className="card bg-light"
        style={{ width: "18rem", height: "20rem" }}
      >
        <img
          className="card-img-top  h-40"
          src="..."
          alt=""
          style={Style}
        ></img>
        <div className="card-body">
          <h5 className="card-title ps-3" style={Style}></h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 h-10" style={Style}>
              <span style={{ fontWeight: "500" }}></span>
            </li>
            <li className="list-group-item border-0 h-10" style={Style}>
              <span style={{ fontWeight: "500" }}> </span>
            </li>
            <li className="list-group-item border-0" style={Style}>
              <span style={{ fontWeight: "500" }}></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ShimmerCard;
