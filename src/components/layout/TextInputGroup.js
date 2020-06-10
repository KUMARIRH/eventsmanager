import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const TextInputGroup = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextInputGroup.defaultProps = {
  type: "text"
};
TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default TextInputGroup;
