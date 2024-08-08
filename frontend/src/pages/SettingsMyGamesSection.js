import { useCallback } from "react";
import BottomFooter from "../components/BottomFooter";
import GamesContent from "../components/GamesContent";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./SettingsMyGamesSection.css";

const SettingsMyGamesSection = () => {
  const navigate = useNavigate();

  const onSettingsTextClick = useCallback(() => {
    navigate("/settings-main-page");
  }, [navigate]);

  const onIconToReturnToPreviousPagClick = useCallback(() => {
    navigate("/page-games");
  }, [navigate]);

  return (
    <div className="settings-mygames-section">
      <BottomFooter allRightsReservedBottom="4px" />
      <div className="mygame-section">
        <GamesContent />
        <div className="settings" onClick={onSettingsTextClick}>
          Settings
        </div>
        <div className="my-games">My Games</div>
        <div className="profile1">{`Profile `}</div>
        <img
          className="icon-to-return-to-previous-pag"
          alt=""
          src="/return-icon-to-previous-page@2x.png"
          onClick={onIconToReturnToPreviousPagClick}
        />
        <img className="icon-save-edit" alt="" src="/save-icon@2x.png" />
      </div>
      <Header propRight="-4px" propLeft="4px" />
    </div>
  );
};

export default SettingsMyGamesSection;
