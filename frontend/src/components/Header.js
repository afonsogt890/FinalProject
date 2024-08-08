import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "", propRight, propLeft }) => {
  const navigationStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div className={`navigation2 ${className}`} style={navigationStyle}>
      <div className="items2">
        <div className="profile3">Profile</div>
        <div className="chats">Games</div>
        <div className="chats">Chats</div>
        <img
          className="profile-picture-icon"
          alt=""
          src="/profile-picture@2x.png"
        />
      </div>
      <img className="logo-icon6" alt="" src="/logo1@2x.png" />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propRight: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Header;
