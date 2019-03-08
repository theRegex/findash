import React from "react";
import FontAwesome from "react-fontawesome";
import { css } from "@emotion/core";

const ddWrapper = css`
  user-select: none;
  position: relative;
  width: auto;
`;

const ddHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  line-height: 33px;
  position: relative;
  background-color: white;
  font-size: 0.9rem;
`;

const ddHeaderTitle = css`
  border: 1px solid black;
  padding: 0 10px;
`;

const ddList = css`
  z-index: 10;
  position: absolute;
  border: 1px solid black;
  border-top: 0;
  background-color: white;
  max-height: 215px;
  overflow: auto;
  top: 100%;
  right: 0;
  left: 0;
  padding-inline-start: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const ddListItem = css`
  width: 100%;
  font-size: 0.9rem;
  padding: 5px;
  cursor: default;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;

  &.selected {
    color: white;
    background-color: black;
  }

  &:hover {
    color: white;
    background-color: black;
  }
`;

const Dropdown = ({ listOpen, list, title, toggleList }) => {
  return (
    <div css={ddWrapper}>
      <div css={ddHeader} onClick={toggleList}>
        <div css={ddHeaderTitle}>{title}</div>
        {listOpen && (
          <ul css={ddList}>
            {list.map(item => (
              <li css={ddListItem} key={item.title}>
                {item.title} {item.selected && <FontAwesome name="check" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export { Dropdown };
