import { useCallback } from "react";
import BottomFooter from "../components/BottomFooter";
import UserCard from "../components/UserCard";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./UserProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();

  const onIconToReturnToPreviousPagClick = useCallback(() => {
    navigate("/users-game");
  }, [navigate]);

  return (
    <div className="user-profile">
      <BottomFooter allRightsReservedBottom="-1px" />
      <div className="user-profile1">
        <div className="user-profile-detail">
          <div className="game-section">
            <div className="game-2-group">
              <div className="valorant1">Valorant</div>
              <img className="game1-icon10" alt="" src="/game17@2x.png" />
            </div>
            <div className="game-1-group">
              <div className="valorant1">League of legends</div>
              <img className="game1-icon10" alt="" src="/game12@2x.png" />
            </div>
            <div className="game-group-3">
              <div className="valorant1">Minecraft</div>
              <img className="game1-icon10" alt="" src="/game111@2x.png" />
            </div>
            <div className="game-group-4">
              <div className="apex-legends1">Apex Legends</div>
              <img className="game1-icon10" alt="" src="/game18@2x.png" />
            </div>
            <div className="games1">Games</div>
          </div>
          <UserCard />
        </div>
        <img
          className="icon-to-return-to-previous-pag1"
          alt=""
          src="/return-icon-to-previous-page@2x.png"
          onClick={onIconToReturnToPreviousPagClick}
        />
        <div className="user-profile2">User Profile</div>
      </div>
      <Header propRight="-4px" propLeft="4px" />
    </div>
  );
};

export default UserProfile;
