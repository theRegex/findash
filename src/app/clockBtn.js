import PropTypes from "prop-types";
import React from "react";
import { css } from "emotion";

const ClockBtn = ({active, onClick}) => (
  <button onClick={onClick}
    className={css`
      margin-top: 30px;
      height: 32px;
      width: 64px;
      background-color: ${(active ? "#11CCCC" : "#111111")};
      border-radius: 3px;
      outline: none;
      font-size: 16px;
      color: ${(active ? "#111111" : "#11CCCC")};

      &:hover {
        cursor: pointer;
      }
    `}>
    {(active ? "Stop" : "Start")}
  </button>
);

ClockBtn.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default ClockBtn;
