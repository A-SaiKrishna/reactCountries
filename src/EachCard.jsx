import "bootstrap/dist/css/bootstrap.min.css";
let EachCard = ({ country }) => {
  //   console.log(country);
  let { name, population, region, capital, flags } = country;
  return (
    <div className="col-md-3 d-flex justify-content-center my-5">
      <div className="card " style={{ width: "24rem" }}>
        <img
          className="card-img-top"
          src={flags.png}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h5 className="card-title ps-3">{name.common}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0">
              <span style={{ fontWeight: "500" }}>Population : </span>
              {population}
            </li>
            <li className="list-group-item border-0 ">
              <span style={{ fontWeight: "500" }}>Region : </span>
              {region}
            </li>
            <li className="list-group-item border-0">
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
