import PropTypes from "prop-types";
import "./TopGames.css";

const TopGames = ({ className = "" }) => {
  return (
    <div className={`top-games ${className}`}>
      <div className="game2-selection">
        <img className="game2-selection-child" alt="" src="/rectangle-4.svg" />
        <img className="game2-icon" alt="" src="/game2@2x.png" />
      </div>
      <div className="game1-selection">
        <img className="game1-selection-child" alt="" src="/rectangle-41.svg" />
        <img className="game1-icon14" alt="" src="/game1@2x.png" />
      </div>
      <div className="game1-selection1">
        <img className="game1-selection-item" alt="" src="/rectangle-42.svg" />
        <img className="game1-icon14" alt="" src="/game11@2x.png" />
      </div>
      <div className="most-searched-games">Most Searched Games</div>
    </div>
  );
};

TopGames.propTypes = {
  className: PropTypes.string,
};

export default TopGames;
