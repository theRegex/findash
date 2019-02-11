import React from "react";
import { css } from "@emotion/core";

const inputCss = css`
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  margin-top: 5px;
`;

const containerCss = css`
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
`;

const labelCss = css`
  font-size: 11px;
`;

const Input = ({ label = "label", ...props }) => {
  return(
    <div css={containerCss}>
      <label css={labelCss}>{label}</label>
      <input css={inputCss} {...props} />
    </div>
  );
};

export{ Input };
