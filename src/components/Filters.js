import React from "react";
import { css } from "@emotion/core";
import { Input, Dropdown } from "ui";

const container = css`
  display: flex;
  align-items: center;
`;

const list = [
  {
    id: 0,
    title: "New York",
    selected: false,
    key: "location"
  },
  {
    id: 1,
    title: "Dublin",
    selected: false,
    key: "location"
  },
  {
    id: 2,
    title: "California",
    selected: false,
    key: "location"
  },
  {
    id: 3,
    title: "Istanbul",
    selected: false,
    key: "location"
  },
  {
    id: 4,
    title: "Izmir",
    selected: false,
    key: "location"
  },
  {
    id: 5,
    title: "Oslo",
    selected: false,
    key: "location"
  }
];

const Filters = () => {
  const [listOpen, setListOpen] = React.useState(false);

  function toggleList() {
    setListOpen(!listOpen);
  }

  return (
    <div css={container}>
      <Input label="Description" />
      <Dropdown
        list={list}
        title="Select Location"
        listOpen={listOpen}
        toggleList={toggleList}
      />
    </div>
  );
};

export { Filters };
