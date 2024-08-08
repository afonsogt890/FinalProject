import PropTypes from "prop-types";
import "./UserCard.css";

const UserCard = ({ className = "" }) => {
  return (
    <div className={`user-card ${className}`}>
      <div className="chat-button">
        <div className="chat-button1" />
        <b className="chat">Chat</b>
      </div>
      <b className="kallysin1">KallySin</b>
      <div className="portuguesespanish">Portuguese/Spanish</div>
      <div className="i-love-play">
        “I love play league of legends and valorant”
      </div>
      <img
        className="profile-picture-icon1"
        alt=""
        src="/profile-picture1@2x.png"
      />
    </div>
  );
};

UserCard.propTypes = {
  className: PropTypes.string,
};

export default UserCard;
