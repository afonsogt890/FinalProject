import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BottomFooter.css";

const BottomFooter = ({ className = "", allRightsReservedBottom }) => {
  const footer1Style = useMemo(() => {
    return {
      bottom: allRightsReservedBottom,
    };
  }, [allRightsReservedBottom]);

  return (
    <div className={`footer1 ${className}`} style={footer1Style}>
      <div className="all-rights-reserved1">
        All rights reserved. G2M, Inc 2024
      </div>
      <div className="links">
        <div className="terms-of-service3">Terms of Service</div>
        <div className="privacy-policy3">Privacy Policy</div>
      </div>
      <img className="logo-icon3" alt="" src="/logo@2x.png" />
      <div className="social-icons1">
        <img className="buttons-icon4" alt="" src="/buttons--icon@2x.png" />
        <img className="buttons-icon4" alt="" src="/buttons--icon1@2x.png" />
        <img className="buttons-icon4" alt="" src="/buttons--icon2@2x.png" />
        <img className="buttons-icon4" alt="" src="/buttons--icon3@2x.png" />
      </div>
    </div>
  );
};

BottomFooter.propTypes = {
  className: PropTypes.string,

  /** Style props */
  allRightsReservedBottom: PropTypes.any,
};

export default BottomFooter;
