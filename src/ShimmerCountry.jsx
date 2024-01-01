import "./ShimmerCountry.css";
let ShimmerCountry = () => {
  return (
    <div className="countryy">
      <button className="btn btn-light border shadow m-5">button</button>
      <div className=" d-flex">
        <div className="flagg w-50   d-flex">
          <div id="imflag"></div>
        </div>
        <div className="content  w-50">
          <div id="headingg" className="ms-3"></div>
          <div className="listt "></div>
          <div className="borderr"></div>
        </div>
      </div>
    </div>
  );
};
export default ShimmerCountry;
