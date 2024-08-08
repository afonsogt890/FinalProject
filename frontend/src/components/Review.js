import PropTypes from "prop-types";
import "./Review.css";

const Review = ({ className = "" }) => {
  return (
    <div className={`review ${className}`}>
      <img className="container-box-icon" alt="" src="/container-box.svg" />
      <div className="profile2">
        <img className="graphic-icon" alt="" src="/graphic@2x.png" />
        <div className="copy" />
      </div>
      <div className="text-area">
        <b className="thanks-to-g2m">
          “Thanks to G2M, I've found the perfect team! Now every match is an
          adventure full of fun and camaraderie. I love playing with them.”
        </b>
        <b className="joenitor">Joenitor</b>
      </div>
    </div>
  );
};

Review.propTypes = {
  className: PropTypes.string,
};

export default Review;
