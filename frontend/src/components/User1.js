import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./User1.css";

const User1 = ({
  className = "",
  graphic,
  bronze2,
  kallySin,
  propLeft,
  propTop,
  onUser1ContainerClick,
}) => {
  const user1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const navigate = useNavigate();

  const onUser1ContainerClick1 = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div
      className={`user-1 ${className}`}
      onClick={onUser1ContainerClick}
      style={user1Style}
    >
      <div className="user-1-child" />
      <img className="graphic-icon1" alt="" src={graphic} />
      <div className="rank-bronze-2-container">
        <span className="rank-bronze-2-container1">
          <p className="rank">Rank</p>
          <p className="bronze-2">Bronze 2</p>
        </span>
      </div>
      <div className="kallysin">{kallySin}</div>
      <div className="thanks-to-g2m1">
        Thanks to G2M, I've found the perfect team! Now every match is an
        adventure full of fun and camaraderie. I love playing with them.
      </div>
    </div>
  );
};

User1.propTypes = {
  className: PropTypes.string,
  graphic: PropTypes.string,
  bronze2: PropTypes.string,
  kallySin: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,

  /** Action props */
  onUser1ContainerClick: PropTypes.func,
};

export default User1;
