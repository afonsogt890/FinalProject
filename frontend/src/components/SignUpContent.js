import { useCallback } from "react";
import PasswordInputFieldWithLabe from "./PasswordInputFieldWithLabe";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./SignUpContent.css";

const SignUpContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSignUpButtonClick = useCallback(() => {
    navigate("/page-games");
  }, [navigate]);

  return (
    <div className={`signup-content ${className}`}>
      <img className="logo-icon4" alt="" src="/logo2@2x.png" />
      <img className="signup-content-child" alt="" src="/vector-1.svg" />
      <PasswordInputFieldWithLabe inputType="Password" />
      <PasswordInputFieldWithLabe inputType="Username" propTop="227px" />
      <PasswordInputFieldWithLabe
        inputType="Confirm Password"
        propTop="434px"
      />
      <PasswordInputFieldWithLabe inputType="Email" propTop="538px" />
      <div className="sign-up-button" onClick={onSignUpButtonClick}>
        <div className="sign-up2">Sign Up</div>
      </div>
      <div className="check-the-box-container">
        <p className="check-the-box-if-you-agree-wit">
          {`Check the box if you agree with G2M’s `}
          <span className="terms-of-service4">Terms of Service</span>
        </p>
        <p className="check-the-box-if-you-agree-wit">
          {`and `}
          <span className="terms-of-service4">Privacy Policy</span>
        </p>
      </div>
      <img className="checkbox-icon" alt="" src="/checkbox.svg" />
    </div>
  );
};

SignUpContent.propTypes = {
  className: PropTypes.string,
};

export default SignUpContent;
