import React from "react";
import { Card, Flex, Heading, Button } from "@rebass/emotion";
import { Input } from "ui";
import { css } from "@emotion/core";
import { AppContext } from "../app";
import { observer } from "mobx-react-lite";

const containerCss = css`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.3rem;
`;
const NewContact = () => {
  const{ store } = React.useContext(AppContext);

  const updateField = event => {
    const{ value, name } = event.target;

    store.supplier[name] = value;
  };

  return(
    <Card border="1px solid black" p={2} m={3}>
      <Flex flexDirection="column" alignItems="center">
        <Heading p={2} fontSize={2}>
          ADD NEW CONTACT
        </Heading>
        <div css={containerCss}>
          <Input
            label="Name"
            onChange={updateField}
            value={store.supplier.name}
            name="name"
          />
          <Input
            label="Company"
            onChange={updateField}
            value={store.supplier.company}
            name="company"
          />
          <Input
            label="Email"
            value={store.supplier.email}
            onChange={updateField}
            name="email"
          />
          <Input
            label="Skype"
            value={store.supplier.skype}
            onChange={updateField}
            name="skype"
          />
        </div>
        <Button variant="primary" my={3} onClick={store.addSupplier}>
          Add Supplier
        </Button>
      </Flex>
    </Card>
  );
};

export default observer(NewContact);
