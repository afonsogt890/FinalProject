import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomFooter from "../components/BottomFooter";
import User1 from "../components/User1";
import Header from "../components/Header";
import "./UsersGame.css";

const UsersGame = () => {
  const navigate = useNavigate();

  const onUser1ContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onIconToReturnToPreviousScrClick = useCallback(() => {
    navigate("/page-games");
  }, [navigate]);

  return (
    <div className="users-game">
      <BottomFooter allRightsReservedBottom="-1px" />
      <div className="users-related-to-game">
        <div className="league-of-legends1">League of legends</div>
        <div className="user-selection">
          <User1
            graphic="/graphic1@2x.png"
            kallySin="KallySin"
            onUser1ContainerClick={onUser1ContainerClick}
          />
          <User1
            graphic="/graphic2@2x.png"
            kallySin="Henry "
            propLeft="617px"
            propTop="0px"
          />
          <User1
            graphic="/graphic3@2x.png"
            kallySin="Bobbi"
            propLeft="1186px"
            propTop="0px"
          />
          <User1
            graphic="/graphic4@2x.png"
            kallySin="JorgeG"
            propLeft="70px"
            propTop="321px"
          />
          <User1
            graphic="/graphic5@2x.png"
            kallySin="LaraO "
            propLeft="617px"
            propTop="321px"
          />
        </div>
        <img
          className="icon-to-return-to-previous-scr"
          alt=""
          src="/return-icon-to-previous-page@2x.png"
          onClick={onIconToReturnToPreviousScrClick}
        />
      </div>
      <Header propRight="-4px" propLeft="4px" />
    </div>
  );
};

export default UsersGame;
