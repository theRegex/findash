import React from "react";
import { Card, Box, Flex, Heading, Button } from "@rebass/emotion";
import { AppContext } from "../app";
import { observer } from "mobx-react-lite";

const Suppliers = () => {
  const{ store } = React.useContext(AppContext);

  return(
    <Box p={3}>
      <input value={store.word} onChange={store.setWord} />
      <Button onClick={store.addWord}>{"Add Word"}</Button>
      {store.words.map((word, index) => (
        <Card key={index}>{word}</Card>
      ))}
    </Box>
  );
};

export default observer(Suppliers);
