import React from "react";
import { observer } from "mobx-react-lite";
import { css } from "@emotion/core";
import { Card } from "@rebass/emotion";
import { StoreContext } from "../context.js";
import { Table, Filters } from "components";

const bodyStyle = css`
  padding: 10px;
  width: 100%;
`;

const tableCss = css`
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
  font-size: 0.9rem;
  height: 500px;
  overflow: auto;

  & tr {
    border-bottom: 1px solid black;
    cursor: pointer;
  }

  & tr:last-child {
    border-bottom: 0;
  }

  & thead {
    border: 1px solid black;
    color: white;
    border-bottom: 0;
    width: 100%;
  }

  & tbody {
    border: 1px solid black;
    margin-top: 40px;
  }

  & th {
    top: 0;
    background-color: black;
    position: sticky;
  }

  & td,
  th {
    padding: 10px 15px;
    text-align: left;
  }
`;

const Body = observer(() => {
  const {
    store: { transactionStore }
  } = React.useContext(StoreContext);

  return (
    <div css={bodyStyle}>
      <Card
        boxShadow="0 2px 16px rgba(0, 0, 0, 0.2)"
        m={5}
        css={{ position: "relative", height: "500px", overflow: "auto" }}
      >
        <Filters />
        <Table
          headers={transactionStore.headers}
          dataset={transactionStore.transactions.slice()}
          name="Transactions"
          tableCss={tableCss}
        />
      </Card>
    </div>
  );
});

export { Body };
