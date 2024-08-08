import { useCallback } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Review from "../components/Review";
import TopGames from "../components/TopGames";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onNavigationContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onItemsContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="homepage">
      <Footer />
      <div className="about-us">
        <div className="about-us-section">
          <div className="about-us1">About Us</div>
          <div className="g2m-is-an">
            G2M is an emerging company developing a gaming platform that enables
            gamers to establish connections with fellow players to enhance their
            online multiplayer encounters. We assist gamers in uncovering
            companions for online play, ultimately enhancing a user's gaming
            journey. This is accomplished by linking gamers who possess
            comparable expertise, gaming preferences, demographics, and beyond.
          </div>
        </div>
        <div className="picture">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <div className="ceo-afonso-lana-container">
            <span>
              <p className="ceo">CEO</p>
              <p className="afonso-lana">Afonso Lança</p>
            </span>
          </div>
        </div>
      </div>
      <div className="herosection" data-scroll-to="heroSectionContainer">
        <div className="herosection1">
          <div className="call-out">
            <div className="best-lfg-platform">BEST LFG PLATFORM FOR</div>
            <div className="gamers">GAMERS</div>
            <div className="login-button" onClick={onLoginButtonContainerClick}>
              <div className="create-account-now">Create Account Now</div>
            </div>
          </div>
        </div>
        <Review />
        <TopGames />
      </div>
      <div className="navigation" onClick={onNavigationContainerClick}>
        <img className="logo-icon" alt="" src="/logo1@2x.png" />
        <div className="items" onClick={onItemsContainerClick}>
          <div className="about-us2">About Us</div>
          <div className="sign-up" onClick={onLoginButtonContainerClick}>
            Sign Up
          </div>
          <div className="login-button1">
            <div className="login">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
