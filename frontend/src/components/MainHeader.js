import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./MainHeader.css";

const MainHeader = ({ className = "", onLoginButtonContainerClick }) => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick1 = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`navigation1 ${className}`}>
      <div className="items1">
        <div className="about-us3">About Us</div>
        <div className="sign-up3">Sign Up</div>
        <div className="login-button3" onClick={onLoginButtonContainerClick}>
          <div className="login4">Login</div>
        </div>
      </div>
      <img
        className="logo-icon5"
        alt=""
        src="/logo1@2x.png"
        onClick={onLogoImageClick}
      />
    </div>
  );
};

MainHeader.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onLoginButtonContainerClick: PropTypes.func,
};

export default MainHeader;
