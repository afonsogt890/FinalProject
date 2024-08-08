import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "", allRightsReservedLeft }) => {
  const footerStyle = useMemo(() => {
    return {
      left: allRightsReservedLeft,
    };
  }, [allRightsReservedLeft]);

  return (
    <div className={`footer ${className}`} style={footerStyle}>
      <div className="all-rights-reserved">
        All rights reserved. G2M, Inc 2024
      </div>
      <div className="terms-of-service2">Terms of Service</div>
      <div className="privacy-policy2">Privacy Policy</div>
      <img className="logo-icon2" alt="" src="/logo@2x.png" />
      <div className="social-icons">
        <img className="buttons-icon" alt="" src="/buttons--icon@2x.png" />
        <img className="buttons-icon" alt="" src="/buttons--icon1@2x.png" />
        <img className="buttons-icon" alt="" src="/buttons--icon2@2x.png" />
        <img className="buttons-icon" alt="" src="/buttons--icon3@2x.png" />
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  allRightsReservedLeft: PropTypes.any,
};

export default Footer;
