import { useCallback } from "react";
import BottomFooter from "../components/BottomFooter";
import LoginContent from "../components/LoginContent";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./SettingsMainPage.css";

const SettingsMainPage = () => {
  const navigate = useNavigate();

  const onMyGamesLinkClick = useCallback(() => {
    navigate("/settings-mygames-section");
  }, [navigate]);

  const onReturnIconToPreviousPageClick = useCallback(() => {
    navigate("/page-games");
  }, [navigate]);

  return (
    <div className="settings-main-page">
      <BottomFooter allRightsReservedBottom="-1px" />
      <div className="settings-card">
        <LoginContent />
        <div className="settings-link">Settings</div>
        <div className="my-games-link" onClick={onMyGamesLinkClick}>
          My Games
        </div>
      </div>
      <div className="profile">{`Profile `}</div>
      <img
        className="return-icon-to-previous-page"
        alt=""
        src="/return-icon-to-previous-page@2x.png"
        onClick={onReturnIconToPreviousPageClick}
      />
      <Header />
    </div>
  );
};

export default SettingsMainPage;
