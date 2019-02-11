import React from "react";
import { Card, Flex, Heading } from "@rebass/emotion";

const Header = ({ children = "FBA MANAGER" }) => {
  return(
    <Card borderBottom="1px solid black" p="1.55rem">
      <Flex justifyContent="space-between">
        <Heading letterSpacing="1.3px" fontSize={4}>
          {children}
        </Heading>
      </Flex>
    </Card>
  );
};

export default Header;
