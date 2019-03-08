import React from "react";
import { css } from "@emotion/core";

const group = css`
  position: relative;
  margin-right: 10px;

  label {
    position: absolute;
    bottom: 5px;
    left: 10px;
    font-size: 0.9rem;
    background-color: white;
    transition: all 0.2s ease;
  }

  input {
    display: block;
    outline: none;
    padding: 10px 10px 10px 5px;
    border: 1px solid black;
    border-radius: 2px;

    &:focus ~ label,
    &:active ~ label {
      display: block;
      bottom: 25px;
      left: 5px;
      font-size: 0.7rem;
      padding: 2px;
      color: blue;
    }

    &:focus,
    &:active {
      border: 1px solid blue;
    }
  }
`;

const Input = ({ label, ...props }) => {
  return (
    <div css={group}>
      <input {...props} />
      <label>{label}</label>
    </div>
  );
};

export { Input };
