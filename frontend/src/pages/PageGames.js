import { useCallback } from "react";
import BottomFooter from "../components/BottomFooter";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./PageGames.css";

const PageGames = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/users-game");
  }, [navigate]);

  return (
    <div className="page-games">
      <BottomFooter allRightsReservedBottom="-1px" />
      <div className="games-section">
        <div className="games">Games</div>
        <div className="games-selection">
          <div className="group">
            <div className="elden-ring">Elden Ring</div>
            <img className="game1-icon" alt="" src="/game15@2x.png" />
          </div>
          <div className="group1">
            <div className="elden-ring">Fortnite</div>
            <img className="game1-icon" alt="" src="/game16@2x.png" />
          </div>
          <div className="group2">
            <div className="elden-ring">Valorant</div>
            <img className="game1-icon" alt="" src="/game17@2x.png" />
          </div>
          <div className="group3" onClick={onGroupContainerClick}>
            <div className="elden-ring">League of legends</div>
            <img className="game1-icon" alt="" src="/game12@2x.png" />
          </div>
          <div className="group4">
            <div className="apex-legends">Apex Legends</div>
            <img className="game1-icon" alt="" src="/game18@2x.png" />
          </div>
          <div className="group5">
            <div className="elden-ring">Counter Strike 2</div>
            <img className="game1-icon" alt="" src="/game13@2x.png" />
          </div>
          <div className="group6">
            <div className="call-of-duty">Call of Duty: warzone</div>
            <img className="game1-icon" alt="" src="/game19@2x.png" />
          </div>
          <div className="group7">
            <div className="elden-ring">World of Warcraft</div>
            <img className="game1-icon" alt="" src="/game14@2x.png" />
          </div>
          <div className="group8">
            <div className="elden-ring">Dota 2</div>
            <img className="game1-icon" alt="" src="/game110@2x.png" />
          </div>
          <div className="group9">
            <div className="elden-ring">Minecraft</div>
            <img className="game1-icon" alt="" src="/game111@2x.png" />
          </div>
        </div>
      </div>
      <Header propRight="0px" propLeft="0px" />
    </div>
  );
};

export default PageGames;
