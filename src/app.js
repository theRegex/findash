import React from "react";
import { Header, Sidebar, Body } from "components";
import { css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import theme from "ui/theme";
import store from "stores/store";
import { StoreContext } from "./context";

const container = css`
  display: flex;
`;

const main = css`
  width: 100%;
`;

const App = () => {
  React.useEffect(() => {
    store.transactionStore.getTransactions();
  }, []);

  return (
    <StoreContext.Provider value={{ store }}>
      <ThemeProvider theme={theme}>
        <div css={container}>
          <Sidebar />
          <div css={main}>
            <Header title="Nexttrack Finance Manager" />
            <Body />
          </div>
        </div>
      </ThemeProvider>
    </StoreContext.Provider>
  );
};

export default App;
