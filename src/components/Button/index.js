import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./index.module.scss";

const Button = ({
  size,
  block,
  basic,
  rounded,
  style,
  link,
  value,
  buttonValue,
  icon,
  children,
  onClick,
  loading,
  inverted,
  disabled,
  customClass,
  iconButton,
  tooltip,
  borderless,
  simple,
  type,
  spin
}) => (
  <div className={styles.container}>
    <button
      style={style}
      href={link}
      type={type}
      value={buttonValue}
      className={`
    ${styles.button}
    ${styles[`size-${size}`]}
    ${styles[`type-${type}`]}
    ${block ? styles.block : ""}
    ${basic ? styles.basic : ""}
    ${rounded ? styles.rounded : ""}
    ${iconButton ? styles.iconButton : ""}
    ${disabled ? styles.isDisabled : ""}
    ${loading ? styles.loading : ""}
    ${inverted ? styles.inverted : ""}
    ${borderless ? styles.borderless : ""}
    ${simple ? styles.simple : ""}
    ${customClass && styles[`${customClass}`]}
    ${icon && children ? styles.iconandtext : ""}
    `}
      onClick={!disabled ? onClick : undefined} // eslint-disable-line
    >
      {(value || icon) && (
        <React.Fragment>
          {value && <span>{value} </span>}
          {icon && <FontAwesomeIcon icon={icon} spin={spin} />}
        </React.Fragment>
      )}
      {children}
    </button>
    {tooltip && <div className={styles.tooltip}>{tooltip}</div>}
  </div>
);

Button.defaultProps = {
  size: "medium",
  style: {},
  link: null,
  disabled: false,
  loading: false,
  customClass: "",
  type: "primary"
};

Button.propTypes = {
  size: PropTypes.string,
  value: PropTypes.string,
  buttonValue: PropTypes.string,
  icon: PropTypes.object,
  link: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  rounded: PropTypes.bool,
  inverted: PropTypes.bool,
  block: PropTypes.bool,
  basic: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  borderless: PropTypes.bool,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
  iconButton: PropTypes.bool,
  tooltip: PropTypes.any,
  simple: PropTypes.bool,
  type: PropTypes.any,
  spin: PropTypes.bool
};

export default Button;
