import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PasswordInputFieldWithLabe.css";

const PasswordInputFieldWithLabe = ({ className = "", inputType, propTop }) => {
  const passwordInputFieldWithLabeStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`password-input-field-with-labe ${className}`}
      style={passwordInputFieldWithLabeStyle}
    >
      <div className="password">{inputType}</div>
      <div className="field">
        <div className="label">Placeholder</div>
      </div>
    </div>
  );
};

PasswordInputFieldWithLabe.propTypes = {
  className: PropTypes.string,
  inputType: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default PasswordInputFieldWithLabe;
