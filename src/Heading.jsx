import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

let Heading = () => {
  let Style = { margin: "0 3rem" };
  return (
    <div className="Heading d-flex justify-content-between border-bottom shadow py-3 ">
      <h1 className="fs-4 fw-bold " style={Style}>
        Where in the world?
      </h1>
      <button className="dark-mode border-0 bg-white" style={Style}>
        <i className="bi bi-moon fw-600"></i> Dark Mode
      </button>
    </div>
  );
};
export default Heading;
