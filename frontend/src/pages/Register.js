import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomFooter from "../components/BottomFooter";
import SignUpContent from "../components/SignUpContent";
import MainHeader from "../components/MainHeader";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className="register">
      <BottomFooter />
      <div className="login-page-send">
        <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
          <span className="dont-have-an">Dont have an account?</span>
          <span className="span">{` `}</span>
        </div>
        <div className="login1" onClick={onDontHaveAnClick}>
          Login
        </div>
      </div>
      <div className="sign-up-form">
        <SignUpContent />
      </div>
      <MainHeader onLoginButtonContainerClick={onLoginButtonContainerClick} />
    </div>
  );
};

export default Register;
