import PropTypes from "prop-types";
import "./LoginContent.css";

const LoginContent = ({ className = "" }) => {
  return (
    <div className={`login-content1 ${className}`}>
      <div className="username-frenchtoast">
        <b className="username">{`Username:  `}</b>
        <span className="frenchtoast">FrenchToast</span>
        <span className="span2">{`   `}</span>
      </div>
      <div className="languagues-french-portuguese-container">
        <p className="languagues">
          <b className="username">{`Languagues:   `}</b>
        </p>
        <p className="languagues">
          <span className="frenchtoast">French, Portuguese</span>
          <span className="span3">{`   `}</span>
        </p>
      </div>
      <b className="image">Image:</b>
      <div className="password1">
        <b className="username">{`Password:  `}</b>
        <span className="frenchtoast">****************</span>
        <span className="span2">{`   `}</span>
      </div>
      <div className="email-ouibaguettegmailcom">
        <b className="username">{`Email:  `}</b>
        <span className="frenchtoast">ouibaguette@gmail.com</span>
        <span className="span2">{`   `}</span>
      </div>
      <div className="description-text-input-box">
        <div className="oui-je-sui">Oui, je sui francé, lol !!!</div>
        <img
          className="icont-to-edit-description"
          alt=""
          src="/icont-to-edit-description@2x.png"
        />
      </div>
      <b className="description">{`Description:  `}</b>
      <img
        className="profile-picture-current"
        alt=""
        src="/profile-picture-current@2x.png"
      />
      <img className="save-icon" alt="" src="/save-icon@2x.png" />
      <img
        className="icon-to-edit-username"
        alt=""
        src="/icont-to-edit-description@2x.png"
      />
      <img
        className="icon-to-edit-password"
        alt=""
        src="/icont-to-edit-description@2x.png"
      />
      <img
        className="icon-to-edit-email"
        alt=""
        src="/icont-to-edit-description@2x.png"
      />
      <img
        className="icon-to-edit-languages"
        alt=""
        src="/icont-to-edit-description@2x.png"
      />
      <img
        className="profile-picture-edit-icon"
        alt=""
        src="/profile-picture-edit-icon@2x.png"
      />
    </div>
  );
};

LoginContent.propTypes = {
  className: PropTypes.string,
};

export default LoginContent;
