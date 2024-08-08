import { useCallback } from "react";
import Footer from "../components/Footer";
import PasswordInputFieldWithLabe from "../components/PasswordInputFieldWithLabe";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='loginContentContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onLoginButtonContainerClick1 = useCallback(() => {
    navigate("/page-games");
  }, [navigate]);

  return (
    <div className="login2">
      <Footer allRightsReservedLeft="calc(50% - 961px)" />
      <div className="login-form">
        <div className="login-content" data-scroll-to="loginContentContainer">
          <img className="logo-icon1" alt="" src="/logo2@2x.png" />
          <img className="breaker-line-icon" alt="" src="/vector-1.svg" />
          <PasswordInputFieldWithLabe inputType="Email" propTop="305px" />
          <div className="dont-have-an-container1" onClick={onDontHaveAnClick}>
            <span className="dont-have-an1">Dont have an account?</span>
            <span className="span1">{` `}</span>
          </div>
          <div className="sign-up1" onClick={onDontHaveAnClick}>
            Sign up
          </div>
          <PasswordInputFieldWithLabe inputType="Password" propTop="424px" />
          <div className="login-button2" onClick={onLoginButtonContainerClick1}>
            <div className="login3">Login</div>
          </div>
          <div className="forgot-password">Forgot Password ?</div>
        </div>
      </div>
      <MainHeader onLoginButtonContainerClick={onLoginButtonContainerClick} />
    </div>
  );
};

export default Login;
