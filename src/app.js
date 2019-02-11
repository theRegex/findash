import React from "react";
import Header from "components/Header";
import NewContact from "components/NewContact";
import Suppliers from "components/Contacts";
import { css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import theme from "ui/theme";
import store from "stores/store";
import { observer } from "mobx-react-lite";

const container = css`
  display: flex;
`;

export const AppContext = React.createContext();

const App = () => {
  // React.useEffect(() => {
  //   console.log("component mounted");
  //   store.getSuppliers();
  // });
  return(
    <AppContext.Provider value={{ store }}>
      <ThemeProvider theme={theme}>
        <div css={container}>
          <div>
            <Header />
            <div
              css={css`
                display: flex;
              `}
            >
              <Suppliers />
              {store.showForm && <NewContact />}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default observer(App);
