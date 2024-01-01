import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShimmerCard.css";
let ShimmerCard = () => {
  return (
    <div className="shimmercard col-md-4 m-5">
      <div className="shimmerimg"></div>
      <div className="shimmerbody">
        <div className="shimmertext my-3"></div>
        <div className="shimmertext"></div>
      </div>
    </div>
  );
};
export default ShimmerCard;
