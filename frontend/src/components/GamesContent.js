import PropTypes from "prop-types";
import "./GamesContent.css";

const GamesContent = ({ className = "" }) => {
  return (
    <div className={`games-content ${className}`}>
      <div className="games3">Games</div>
      <div className="game-1">
        <div className="league-of-legends3">League of legends</div>
        <img className="game1-icon16" alt="" src="/game12@2x.png" />
      </div>
      <div className="game-2">
        <div className="league-of-legends3">Counter Strike 2</div>
        <img className="game1-icon16" alt="" src="/game13@2x.png" />
      </div>
      <div className="game-3">
        <div className="group10">
          <div className="league-of-legends3">World of Warcraft</div>
          <img className="game1-icon16" alt="" src="/game14@2x.png" />
        </div>
      </div>
      <div className="game-4">
        <div className="league-of-legends3">Elden Ring</div>
        <img className="game1-icon16" alt="" src="/game15@2x.png" />
      </div>
    </div>
  );
};

GamesContent.propTypes = {
  className: PropTypes.string,
};

export default GamesContent;
